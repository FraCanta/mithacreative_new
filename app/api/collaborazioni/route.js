import nodemailer from "nodemailer";

const typeLabels = {
  mitha: "Vorrei collaborare su progetti Mitha",
  project: "Ho un progetto o cliente e cerco supporto",
  both: "Entrambe le cose",
  meet: "Vorrei semplicemente conoscerci",
};
const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[char]));

export async function POST(request) {
  let data;
  try { data = await request.json(); } catch { return Response.json({error:"Richiesta non valida."},{status:400}); }
  const required = ["name","email","work","contactType"];
  const optional = ["website","skills","preferredProjects","availability","projectInfo"];
  if (!data || required.some((key) => typeof data[key] !== "string" || !data[key].trim() || data[key].length > 4000) ||
    optional.some((key) => data[key] !== undefined && (typeof data[key] !== "string" || data[key].length > 4000)) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || !typeLabels[data.contactType]) {
    return Response.json({error:"Controlla i campi richiesti."},{status:400});
  }
  if (!process.env.NODEMAILER_USER || !process.env.NODEMAILER_PASS) return Response.json({error:"Invio email temporaneamente non disponibile."},{status:503});

  const safe = Object.fromEntries(Object.entries(data).map(([key,value]) => [key,escapeHtml(value).replace(/\n/g,"<br>")]));
  const transporter = nodemailer.createTransport({host:"smtp.gmail.com",port:465,secure:true,auth:{user:process.env.NODEMAILER_USER,pass:process.env.NODEMAILER_PASS}});
  const detail = (label, value) => value ? `<p><strong>${label}:</strong> ${value}</p>` : "";
  const emailHtml = `<html lang="it"><body style="font-family:Arial,sans-serif;color:#0d161e"><div style="max-width:680px;padding:24px;border:1px solid #ccc;border-radius:8px"><h1 style="font-size:24px">Nuova proposta di collaborazione</h1>${detail("Nome",safe.name)}${detail("Email",safe.email)}${detail("Tipo di contatto",escapeHtml(typeLabels[data.contactType]))}${detail("Sito / portfolio / LinkedIn",safe.website)}${detail("Cosa fa",safe.work)}${detail("Competenze",safe.skills)}${detail("Progetti preferiti",safe.preferredProjects)}${detail("Disponibilità",safe.availability)}${detail("Progetto",safe.projectInfo)}</div></body></html>`;
  const thankHtml = `<html lang="it"><body style="font-family:Arial,sans-serif;color:#0d161e"><div style="max-width:680px;padding:24px;border:1px solid #ccc;border-radius:8px"><p>Ciao ${safe.name},</p><p>grazie per averci raccontato come lavori e come potremmo collaborare.</p><p>Leggeremo il tuo messaggio con attenzione e ti risponderemo se vediamo uno spazio concreto per conoscerci o costruire qualcosa insieme.</p><p>Un saluto,<br>Mitha Creative</p></div></body></html>`;
  try {
    await transporter.sendMail({from:{name:"Mitha Creative",address:process.env.NODEMAILER_USER},to:process.env.NODEMAILER_TO || "info@mithacreative.it",subject:`Proposta di collaborazione — ${data.name.trim()}`,replyTo:data.email.trim(),html:emailHtml});
    await transporter.sendMail({from:{name:"Mitha Creative",address:process.env.NODEMAILER_USER},to:data.email.trim(),subject:"Abbiamo ricevuto il tuo messaggio",html:thankHtml});
    return Response.json({message:"Email inviata con successo"});
  } catch (error) {
    console.error("Errore nell'invio della collaborazione:",error);
    return Response.json({error:"Invio non riuscito. Riprova più tardi."},{status:500});
  }
}
