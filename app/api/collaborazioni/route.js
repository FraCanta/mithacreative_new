import { sendResendEmail } from "../../lib/resend";
import { collaborationConfirmationEmail, collaborationNotificationEmail } from "../../lib/email-templates";

const typeLabels = {
  mitha: "Vorrei collaborare su progetti Mitha",
  project: "Ho un progetto o cliente e cerco supporto",
  both: "Entrambe le cose",
  meet: "Vorrei semplicemente conoscerci",
};

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Richiesta non valida." }, { status: 400 });
  }

  const required = ["name", "email", "work", "contactType"];
  const optional = ["website", "skills", "preferredProjects", "availability", "projectInfo"];
  if (
    !data ||
    required.some((key) => typeof data[key] !== "string" || !data[key].trim() || data[key].length > 4000) ||
    optional.some((key) => data[key] !== undefined && (typeof data[key] !== "string" || data[key].length > 4000)) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ||
    !typeLabels[data.contactType]
  ) {
    return Response.json({ error: "Controlla i campi richiesti." }, { status: 400 });
  }
  if (!process.env.RESEND_API_KEY) {
    return Response.json({ error: "Invio email temporaneamente non disponibile." }, { status: 503 });
  }

  const email = data.email.trim();
  const name = data.name.trim();
  const baseUrl = new URL(request.url).origin;
  const normalizedData = { ...data, name, email };
  const internalHtml = collaborationNotificationEmail({ data: normalizedData, baseUrl });
  const confirmationHtml = collaborationConfirmationEmail({ name, baseUrl });

  try {
    await sendResendEmail({
      to: "info@mithacreative.it",
      subject: `Proposta di collaborazione — ${name}`,
      replyTo: email,
      html: internalHtml,
    });
    await sendResendEmail({
      to: email,
      subject: "Abbiamo ricevuto il tuo messaggio",
      html: confirmationHtml,
    });
    return Response.json({ message: "Email inviata con successo" });
  } catch (error) {
    console.error("Errore nell'invio della collaborazione:", error);
    return Response.json({ error: "Invio non riuscito. Riprova più tardi." }, { status: 500 });
  }
}
