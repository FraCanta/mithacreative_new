import nodemailer from "nodemailer";

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

const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));
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

  if (!process.env.NODEMAILER_USER || !process.env.NODEMAILER_PASS) {
    return Response.json({ error: "Invio email temporaneamente non disponibile." }, { status: 503 });
  }

  const name = escapeHtml(data.name.trim());
  const email = data.email.trim();
  const message = escapeHtml(data.message.trim()).replace(/\n/g, "<br>");
  const mission = escapeHtml(missionLabels[data.mission]);
  const objectives = data.objectives.map((value) => escapeHtml(objectiveLabels[value]));
  const objectiveOther = escapeHtml(data.objectiveOther?.trim() || "");
  const investimento = escapeHtml(data.investimento?.trim() || "Non indicato");
  const timeline = escapeHtml(data.timeline ? timelineLabels[data.timeline] : "Non indicata");
  const deadlineDate = escapeHtml(data.deadlineDate?.trim() || "");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: process.env.NODEMAILER_USER, pass: process.env.NODEMAILER_PASS },
  });

  const emailHtml = `
    <html lang="it">
      <body style="font-family:Arial,sans-serif;color:#0d161e">
        <div style="max-width:680px;padding:24px;border:1px solid #cccccc;border-radius:8px">
          <h1 style="font-size:24px">Nuova richiesta di progetto</h1>
          <p><strong>Mission:</strong> ${mission}</p>
          <p><strong>Obiettivi:</strong> ${objectives.length ? objectives.join(", ") : "Non indicati"}</p>
          ${objectiveOther ? `<p><strong>Altro obiettivo:</strong> ${objectiveOther}</p>` : ""}
          <p><strong>Budget:</strong> ${investimento}</p>
          <p><strong>Tempistica:</strong> ${timeline}${deadlineDate ? ` — ${deadlineDate}` : ""}</p>
          <hr style="border:0;border-top:1px solid #dddddd;margin:24px 0">
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <h2 style="font-size:20px">Punto di partenza e obiettivo</h2>
          <p style="line-height:1.6">${message}</p>
        </div>
      </body>
    </html>
  `;

  const thankHtml = `
    <html lang="it">
      <body style="font-family:Arial,sans-serif;color:#0d161e">
        <div style="max-width:680px;padding:24px;border:1px solid #cccccc;border-radius:8px">
          <p>Ciao ${name},</p>
          <p>grazie per averci raccontato il tuo progetto. Abbiamo ricevuto la tua richiesta e la leggeremo con attenzione.</p>
          <p>Ti risponderemo per concordare insieme il prossimo passo.</p>
          <p>Un saluto,<br>Mitha Creative</p>
        </div>
      </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: { name: "Mitha Creative", address: process.env.NODEMAILER_USER },
      to: process.env.NODEMAILER_TO || "info@mithacreative.it",
      subject: `Nuova richiesta: ${missionLabels[data.mission]} — ${data.name.trim()}`,
      replyTo: email,
      html: emailHtml,
    });
    await transporter.sendMail({
      from: { name: "Mitha Creative", address: process.env.NODEMAILER_USER },
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
