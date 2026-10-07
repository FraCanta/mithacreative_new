const COLORS = {
  ink: "#0d161e",
  purple: "#865397",
  lilac: "#d0abdc",
  pale: "#f4eef7",
  line: "#e8dfee",
  muted: "#777181",
  white: "#ffffff",
};

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/mitha.creative/", icon: iconifyImage("mdi/instagram", COLORS.purple, "Instagram") },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61551739027892", icon: iconifyImage("mdi/facebook", COLORS.purple, "Facebook") },
];

export function projectConfirmationEmail({ name, baseUrl }) {
  return confirmationEmail({
    name,
    baseUrl,
    image: "/assets/progetto_email.png",
    imageAlt: "Un’astronauta esplora lo spazio con il suo computer",
    eyebrow: "Richiesta ricevuta",
    message: "Abbiamo ricevuto la tua richiesta di progetto e la leggeremo con attenzione.",
    followUp: "Ti ricontatteremo entro 72 ore.",
    promoTitle: "Nel frattempo, esplora le Mission",
    promoCopy: "Brand, Digital, Lancio e Orbit: quattro punti di partenza per capire da dove può cominciare il tuo progetto.",
    promoLink: "Scopri le Mission",
    promoHref: "/servizi",
  });
}

export function collaborationConfirmationEmail({ name, baseUrl }) {
  return confirmationEmail({
    name,
    baseUrl,
    image: "/assets/collaborazioni_email.png",
    imageAlt: "Due astronaute si incontrano nello spazio",
    eyebrow: "Proposta ricevuta",
    message: "Abbiamo ricevuto la tua proposta di collaborazione e la valuteremo con attenzione.",
    followUp: "Ti aggiorneremo appena possibile.",
    promoTitle: "Le collaborazioni prendono forma",
    promoCopy: "Mitha è una rete di freelance indipendenti: ci incontriamo intorno ai progetti e alle competenze che servono.",
    promoLink: "A presto, nella stessa orbita",
    promoHref: "/collabora-con-noi",
  });
}

export function projectNotificationEmail({ data, baseUrl }) {
  const fields = [
    ["Nome", data.name],
    ["Email", data.email],
    ["Mission", missionLabel(data.mission)],
    ["Obiettivi", (data.objectives || []).map(objectiveLabel).join(", ")],
    ["Altro", data.objectiveOther],
    ["Messaggio", data.message],
    ["Investimento", data.investimento],
    ["Tempistiche", timelineLabel(data.timeline)],
    ["Data precisa", data.deadlineDate],
  ];

  return notificationEmail({
    baseUrl,
    eyebrow: "Nuova richiesta progetto",
    title: "Nuova richiesta progetto",
    intro: "Hai ricevuto una nuova richiesta di progetto dal sito.",
    iconAsset: "/assets/email-icon-mail.svg",
    senderName: data.name,
    senderEmail: data.email,
    fields,
    replySubject: `Re: richiesta progetto — ${data.name}`,
  });
}

export function collaborationNotificationEmail({ data, baseUrl }) {
  const fields = [
    ["Nome", data.name],
    ["Email", data.email],
    ["Sito / portfolio / LinkedIn", data.website],
    ["Attività", data.work],
    ["Tipo di collaborazione", contactTypeLabel(data.contactType)],
    ["Competenze", data.skills],
    ["Progetti preferiti", data.preferredProjects],
    ["Disponibilità", data.availability],
    ["Informazioni sul progetto", data.projectInfo],
  ];

  return notificationEmail({
    baseUrl,
    eyebrow: "Nuova proposta di collaborazione",
    title: "Nuova proposta di collaborazione",
    intro: "Hai ricevuto una nuova proposta di collaborazione dal sito.",
    iconAsset: "/assets/email-icon-users.svg",
    senderName: data.name,
    senderEmail: data.email,
    fields,
    replySubject: `Re: proposta di collaborazione — ${data.name}`,
  });
}

function confirmationEmail({ baseUrl, image, imageAlt, eyebrow, message, followUp, promoTitle, promoCopy, promoLink, promoHref }) {
  const imageUrl = absoluteUrl(baseUrl, image);
  const homeUrl = absoluteUrl(baseUrl, "/");
  const promoUrl = absoluteUrl(baseUrl, promoHref);

  return shell(baseUrl, `
    <tr><td class="content" style="padding:48px 24px 28px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
        <td class="copy-column" valign="middle" width="55%" style="width:55%;padding-right:12px">
          <p style="margin:0 0 12px;color:${COLORS.purple};font-size:11px;font-weight:bold;letter-spacing:.04em;text-transform:uppercase">${escapeHtml(eyebrow)}</p>
          <h1 style="margin:0 0 14px;color:${COLORS.ink};font-size:30px;line-height:1.08;font-weight:700">Grazie per<br>averci scritto!</h1>
          <p style="margin:0 0 10px;color:${COLORS.muted};font-size:14px;line-height:1.45">${escapeHtml(message)}</p>
          <p style="margin:0 0 24px;color:${COLORS.muted};font-size:14px;line-height:1.45">${escapeHtml(followUp)}</p>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td bgcolor="${COLORS.purple}" style="border-radius:28px">
            <a href="${escapeHtml(homeUrl)}" style="display:inline-block;padding:13px 20px;color:${COLORS.white};font-size:11px;font-weight:bold;letter-spacing:.03em;text-decoration:none;text-transform:uppercase">Torna al sito ${iconifyImage("lucide/arrow-right", COLORS.white, "")}</a>
          </td></tr></table>
        </td>
        <td class="image-column" valign="middle" width="45%" style="width:45%;padding-left:8px;text-align:center">
          <img src="${escapeHtml(imageUrl)}" width="260" alt="${escapeHtml(imageAlt)}" style="display:block;width:100%;max-width:260px;height:auto;margin:0 auto;border:0;outline:none;text-decoration:none">
        </td>
      </tr></table>
    </td></tr>
    <tr><td class="promo-wrap" style="padding:0 24px 28px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${COLORS.pale}" style="background:${COLORS.pale};border-radius:14px"><tr>
        <td valign="top" width="48" style="padding:20px 0 20px 18px"><span style="display:block;width:36px;height:36px;border-radius:50%;background:${COLORS.lilac};color:${COLORS.purple};font-size:20px;line-height:36px;text-align:center">✦</span></td>
        <td style="padding:18px 18px 18px 12px">
          <h2 style="margin:0 0 5px;color:${COLORS.ink};font-size:14px;line-height:1.3">${escapeHtml(promoTitle)}</h2>
          <p style="margin:0 0 13px;color:${COLORS.muted};font-size:12px;line-height:1.45">${escapeHtml(promoCopy)}</p>
          <a href="${escapeHtml(promoUrl)}" style="color:${COLORS.purple};font-size:10px;font-weight:bold;letter-spacing:.03em;text-decoration:none;text-transform:uppercase">${escapeHtml(promoLink)} ${iconifyImage("lucide/arrow-right", COLORS.purple, "")}</a>
        </td>
      </tr></table>
    </td></tr>
  `);
}

function notificationEmail({ baseUrl, eyebrow, title, intro, iconAsset, senderName, senderEmail, fields, replySubject }) {
  const rows = fields.filter(([, value]) => hasValue(value)).map(([label, value]) => `
    <tr>
      <td valign="top" width="31%" style="width:31%;padding:9px 8px 9px 16px;border-bottom:1px solid ${COLORS.line};color:${COLORS.purple};font-size:9px;font-weight:bold;line-height:1.35;text-transform:uppercase">${escapeHtml(label)}</td>
      <td valign="top" style="padding:9px 16px 9px 8px;border-bottom:1px solid ${COLORS.line};color:${COLORS.ink};font-size:12px;line-height:1.5;overflow-wrap:anywhere">${formatValue(value)}</td>
    </tr>
  `).join("");
  const [localPart, domain] = senderEmail.split("@");
  const mailtoAddress = `${encodeURIComponent(localPart)}@${domain.split(".").map(encodeURIComponent).join(".")}`;
  const replyUrl = `mailto:${mailtoAddress}?subject=${encodeURIComponent(replySubject)}`;
  const iconUrl = absoluteUrl(baseUrl, iconAsset);

  return shell(baseUrl, `
    <tr><td class="notification-content" style="padding:48px 24px 28px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
        <td valign="middle"><p style="margin:0 0 10px;color:${COLORS.purple};font-size:10px;font-weight:bold;letter-spacing:.04em;text-transform:uppercase"><span style="display:inline-block;width:9px;height:9px;margin-right:8px;border-radius:50%;background:${COLORS.lilac};vertical-align:middle"></span>${escapeHtml(eyebrow)}</p>
          <h1 style="margin:0 0 8px;color:${COLORS.ink};font-size:28px;line-height:1.08;font-weight:700">${escapeHtml(title)}</h1>
          <p style="margin:0;color:${COLORS.muted};font-size:13px;line-height:1.45">${escapeHtml(intro)}</p>
        </td>
        <td width="88" align="right" valign="middle" style="width:88px;padding-left:12px">
          <table role="presentation" width="68" height="68" cellpadding="0" cellspacing="0" border="0" bgcolor="${COLORS.pale}" style="width:68px;height:68px;border-radius:50%;background:${COLORS.pale}"><tr><td align="center" valign="middle"><img src="${escapeHtml(iconUrl)}" width="30" height="30" alt="" style="display:block;width:30px;height:30px;border:0"></td></tr></table>
        </td>
      </tr></table>
    </td></tr>
    <tr><td class="details-wrap" style="padding:0 24px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${COLORS.pale}" style="background:${COLORS.pale};border-radius:14px;border-collapse:separate">
        ${rows}
      </table>
    </td></tr>
    <tr><td class="reply-wrap" style="padding:20px 24px 36px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td bgcolor="${COLORS.purple}" align="left" style="border-radius:28px">
        <a href="${escapeHtml(replyUrl)}" style="display:block;padding:14px 16px;color:${COLORS.white};font-size:11px;font-weight:bold;letter-spacing:.02em;text-decoration:none;text-transform:uppercase">Rispondi a ${escapeHtml(senderName)} <span style="float:right">${iconifyImage("lucide/arrow-right", COLORS.white, "")}</span></a>
      </td></tr></table>
    </td></tr>
  `);
}

function shell(baseUrl, content) {
  const logoUrl = absoluteUrl(baseUrl, "/assets/mitha_logo_trasparente.png");
  const socials = SOCIAL_LINKS.map(({ label, href, icon }) => `<a href="${escapeHtml(href)}" aria-label="${escapeHtml(label)}" style="display:inline-block;margin-left:8px;color:${COLORS.purple};text-decoration:none;vertical-align:middle">${icon}</a>`).join("");

  return `<!doctype html>
<html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="x-apple-disable-message-reformatting"><title>Mitha Creative</title>
<style>
  body{margin:0!important;padding:0!important;background:#f7f5f8;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}
  table{border-spacing:0}
  @media screen and (max-width:600px){.email-shell{width:100%!important}.content,.notification-content{padding:30px 20px 22px!important}.copy-column,.image-column{display:block!important;width:100%!important;padding:0!important}.image-column{padding-top:18px!important}.image-column img{max-width:280px!important}.promo-wrap,.details-wrap,.reply-wrap{padding-left:20px!important;padding-right:20px!important}.email-header{padding-left:20px!important;padding-right:20px!important}.copy-column h1{font-size:28px!important}}
</style></head>
<body style="margin:0;padding:0;background:#f7f5f8;font-family:Arial,Helvetica,sans-serif;color:${COLORS.ink}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f7f5f8" style="background:#f7f5f8"><tr><td align="center" style="padding:24px 12px">
    <table role="presentation" class="email-shell" width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="${COLORS.white}" style="width:100%;max-width:600px;background:${COLORS.white}">
      <tr><td class="email-header" style="padding:16px 24px 12px;border-bottom:1px solid ${COLORS.line}">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
          <td valign="middle"><img src="${escapeHtml(logoUrl)}" width="48" height="45" alt="Mitha Creative" style="display:block;width:48px;height:auto;border:0"></td>
          <td align="right" valign="middle" style="color:${COLORS.purple};font-size:10px;font-weight:bold;letter-spacing:.04em;text-transform:uppercase">Creative Collective</td>
        </tr></table>
      </td></tr>
      ${content}
      <tr><td style="padding:0 24px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-top:1px solid ${COLORS.line};font-size:1px;line-height:1px">&nbsp;</td></tr></table></td></tr>
      <tr><td class="email-footer" style="padding:13px 24px 18px;color:${COLORS.muted};font-size:9px;line-height:1.5">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
          <td valign="middle">© ${new Date().getFullYear()} Mitha Creative Collective</td>
          <td align="center" valign="middle">${socials}</td>
          <td align="right" valign="middle" style="color:${COLORS.purple};font-size:9px;font-weight:bold">Mitha · Italia</td>
        </tr></table>
      </td></tr>
    </table>
  </td></tr></table>
</body></html>`;
}

function missionLabel(value) {
  return ({ "brand-mission": "Brand Mission", "digital-mission": "Digital Mission", "launch-mission": "Launch Mission", "orbit-check": "Orbit Check", "non-lo-so": "Non lo so ancora" })[value] || value;
}

function objectiveLabel(value) {
  return ({ "farmi-conoscere": "Farmi conoscere meglio", "contatti-vendite": "Generare più contatti o vendite", "brand-riconoscibile": "Rendere il brand più riconoscibile", migliorare: "Migliorare qualcosa che oggi non funziona", lanciare: "Lanciare qualcosa di nuovo", semplificare: "Rendere più semplice un processo o un servizio", altro: "Altro" })[value] || value;
}

function timelineLabel(value) {
  return ({ "nessuna-scadenza": "Nessuna scadenza precisa", "entro-un-mese": "Entro 1 mese", "uno-tre-mesi": "1–3 mesi", "tre-sei-mesi": "3–6 mesi", "piu-avanti": "Più avanti", "data-precisa": "Ho una data precisa" })[value] || value;
}

function contactTypeLabel(value) {
  return ({ mitha: "Vorrei collaborare su progetti Mitha", project: "Ho un progetto o cliente e cerco supporto", both: "Entrambe le cose", meet: "Vorrei semplicemente conoscerci" })[value] || value;
}

function formatValue(value) {
  const text = Array.isArray(value) ? value.join(", ") : value;
  return escapeHtml(text).replace(/\r?\n/g, "<br>");
}

function hasValue(value) {
  return Array.isArray(value) ? value.length > 0 : value !== undefined && value !== null && String(value).trim() !== "";
}

function absoluteUrl(baseUrl, path) {
  const configuredBase = process.env.EMAIL_BASE_URL || baseUrl;
  return new URL(path, configuredBase.endsWith("/") ? configuredBase : `${configuredBase}/`).toString();
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function iconifyImage(icon, color, alt, size = 16) {
  const src = `https://api.iconify.design/${icon}.svg?color=${encodeURIComponent(color)}`;
  return `<img src="${escapeHtml(src)}" width="${size}" height="${size}" alt="${escapeHtml(alt)}" style="display:inline-block;width:${size}px;height:${size}px;border:0;vertical-align:middle">`;
}
