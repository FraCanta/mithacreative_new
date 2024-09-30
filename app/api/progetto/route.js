import nodemailer from "nodemailer";

// Utilizza variabili d'ambiente per le credenziali

export default async function mailer(req, res) {
  const { name, email, goal, message, investimento } = req.body;

  console.log(req.body);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "thalliondev@gmail.com",
      pass: "lywb cntb nbqm uckr",
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
            <p><span class="bold">Email:</span> ${email}</p>
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
      <p>Per prenotare una call, clicca sul pulsante qui sotto:</p>
      <a href="https://calendly.com/thallion-dev-info/call" class="button">Prenota una Call</a>
      <p>Saluti,<br>Thallion Dev</p>
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
      from: `Thallion Dev `,
      to: "info@thallion-dev.it",
      subject: `Richiesta prenotazione call: ${name}`,
      replyTo: email,
      html: emailHtml,
    });

    // Invia l'email di ringraziamento all'utente
    await transporter.sendMail({
      from: `Thallion Dev `,
      to: email,
      subject: "Grazie per avermi contattata",
      html: thankHtml,
    });

    // Risposta positiva
    return res.status(200).json({ message: "Email inviata con successo" });
  } catch (error) {
    // Log dell'errore per debugging
    console.error("Errore nell'invio dell'email:", error);
    return res
      .status(500)
      .json({ error: error.message || "Errore nell'invio dell'email" });
  }
}
