import nodemailer from "nodemailer";

// Utilizza variabili d'ambiente per le credenziali

export async function POST(req) {
  let data;
  try {
    data = await req.json();
  } catch {
    return Response.json({ error: "Richiesta non valida." }, { status: 400 });
  }
  const fields = ["name", "email", "message", "investimento"];
  if (!data || fields.some((field) => typeof data[field] !== "string" || !data[field].trim() || data[field].length > 10000) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ||
      !Array.isArray(data.goal) || !data.goal.length || data.goal.length > 9 ||
      data.goal.some((value) => typeof value !== "string" || value.length > 100)) {
    return Response.json({ error: "Controlla i campi richiesti." }, { status: 400 });
  }
  if (!process.env.NODEMAILER_USER || !process.env.NODEMAILER_PASS) {
    return Response.json({ error: "Invio email temporaneamente non disponibile." }, { status: 503 });
  }
  const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));
  const name = escapeHtml(data.name.trim());
  const email = data.email.trim();
  const message = escapeHtml(data.message.trim());
  const investimento = escapeHtml(data.investimento);
  const goal = data.goal.map(escapeHtml);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  // HTML per l'email
  const emailHtml = `
    <html lang="it">
      <head>
        <style>
          .container { padding: 20px; background-color: #ffffff; border: 1px solid #cccccc; border-radius: 5px; }
          .heading { font-size: 24px; font-weight: bold; }
          .section { margin-bottom: 20px; }
          .bold { font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="section">
            <img src="https://i.ibb.co/2hJVkfS/logoMio3.png" alt="Logo dell'azienda" style="width: 100px;"/>
          </div>
          <div class="section">
            <div class="bold">Motivo del contatto:</div>
            <p>${goal.join(", ")}</p>
          </div>
          <div class="section">
            <p><span class="bold">Nome:</span> ${name}</p>
            <p><span class="bold">Email:</span> ${escapeHtml(email)}</p>
            <p><span class="bold">Investimento:</span> ${investimento}</p>
          </div>
          
          <div class="section">
            <div class="heading">Note</div>
            <p>${message}</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const thankHtml = `
   <html lang="it">
  <head>
    <style>
      .container {
        padding: 20px;
        background-color: #ffffff;
        border: 1px solid #cccccc;
        border-radius: 5px;
      }
      .heading {
        font-size: 24px;
        font-weight: bold;
      }
      .button {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        color: #ffffff;
        background-color: #007bff;
        text-decoration: none;
        border-radius: 5px;
        margin-top: 20px;
      }
      .footer {
        margin-top: 20px;
        font-size: 14px;
        color: #777777;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p>Ciao ${name},</p>
      <p>Grazie per avermi contattata. Ho ricevuto la tua richiesta e sono felice di offrirti un incontro per discutere ulteriormente.</p>
      <p>Ti risponderemo per concordare insieme il prossimo passo.</p>

      <p>Saluti,<br>Mitha Creative</p>
    </div>
    <div class="footer">
      Barberino di Mugello (FI) - Lavoro da remoto
    </div>
  </body>
</html>

  `;

  try {
    // Invia l'email a te stesso
    await transporter.sendMail({
      from: { name: "Mitha Creative", address: process.env.NODEMAILER_USER },
      to: process.env.NODEMAILER_TO || "info@mithacreative.it",
      subject: `Richiesta prenotazione call: ${name}`,
      replyTo: email,
      html: emailHtml,
    });

    // Invia l'email di ringraziamento all'utente
    await transporter.sendMail({
      from: { name: "Mitha Creative", address: process.env.NODEMAILER_USER },
      to: email,
      subject: "Grazie per avermi contattata",
      html: thankHtml,
    });

    // Risposta positiva
    return Response.json({ message: "Email inviata con successo" });
  } catch (error) {
    // Log dell'errore per debugging
    console.error("Errore nell'invio dell'email:", error);
    return Response.json({ error: "Invio non riuscito. Riprova più tardi." }, { status: 500 });
  }
}
