import { sendResendEmail } from "../../lib/resend";
import { projectConfirmationEmail, projectNotificationEmail } from "../../lib/email-templates";

const missionLabels = {
  "brand-mission": "Brand Mission",
  "digital-mission": "Digital Mission",
  "launch-mission": "Launch Mission",
  "orbit-check": "Orbit Check",
  "non-lo-so": "Non lo so ancora",
};
const objectiveLabels = {
  "farmi-conoscere": "Farmi conoscere meglio",
  "contatti-vendite": "Generare più contatti o vendite",
  "brand-riconoscibile": "Rendere il brand più riconoscibile",
  migliorare: "Migliorare qualcosa che oggi non funziona",
  lanciare: "Lanciare qualcosa di nuovo",
  semplificare: "Rendere più semplice un processo o un servizio",
  altro: "Altro",
};
const timelineLabels = {
  "nessuna-scadenza": "Nessuna scadenza precisa",
  "entro-un-mese": "Entro 1 mese",
  "uno-tre-mesi": "1–3 mesi",
  "tre-sei-mesi": "3–6 mesi",
  "piu-avanti": "Più avanti",
  "data-precisa": "Ho una data precisa",
};

const isOptionalString = (value, maxLength) => value === undefined || (typeof value === "string" && value.length <= maxLength);

export async function POST(req) {
  let data;
  try {
    data = await req.json();
  } catch {
    return Response.json({ error: "Richiesta non valida." }, { status: 400 });
  }

  const requiredFields = ["name", "email", "mission", "message"];
  const validObjectives = Array.isArray(data?.objectives) &&
    data.objectives.length <= Object.keys(objectiveLabels).length &&
    data.objectives.every((value) => typeof value === "string" && objectiveLabels[value]);
  const validOptionalFields =
    isOptionalString(data?.investimento, 100) &&
    isOptionalString(data?.objectiveOther, 300) &&
    isOptionalString(data?.timeline, 100) &&
    isOptionalString(data?.deadlineDate, 20);

  if (!data ||
      requiredFields.some((field) => typeof data[field] !== "string" || !data[field].trim() || data[field].length > 5000) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ||
      !missionLabels[data.mission] ||
      !validObjectives ||
      !validOptionalFields ||
      (data.timeline && !timelineLabels[data.timeline])) {
    return Response.json({ error: "Controlla i campi richiesti." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json({ error: "Invio email temporaneamente non disponibile." }, { status: 503 });
  }

  const name = data.name.trim();
  const email = data.email.trim();
  const baseUrl = new URL(req.url).origin;
  const emailHtml = projectNotificationEmail({ data: { ...data, name, email, message: data.message.trim(), objectiveOther: data.objectiveOther?.trim() || "", investimento: data.investimento?.trim() || "", deadlineDate: data.deadlineDate?.trim() || "" }, baseUrl });
  const thankHtml = projectConfirmationEmail({ name, baseUrl });

  try {
    await sendResendEmail({
      to: "info@mithacreative.it",
      subject: `Nuova richiesta: ${missionLabels[data.mission]} — ${name}`,
      replyTo: email,
      html: emailHtml,
    });
    await sendResendEmail({
      to: email,
      subject: "Abbiamo ricevuto il tuo progetto",
      html: thankHtml,
    });
    return Response.json({ message: "Email inviata con successo" });
  } catch (error) {
    console.error("Errore nell'invio dell'email:", error);
    return Response.json({ error: "Invio non riuscito. Riprova più tardi." }, { status: 500 });
  }
}
