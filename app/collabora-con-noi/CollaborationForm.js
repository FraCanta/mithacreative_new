"use client";

import { useEffect, useRef, useState } from "react";
import Cta2 from "../components/Cta/Cta2";
import styles from "./collaboration.module.css";

const contactTypes = [
  ["mitha", "Vorrei collaborare su progetti Mitha."],
  ["project", "Ho un progetto o cliente e cerco supporto."],
  ["both", "Entrambe le cose."],
  ["meet", "Vorrei semplicemente conoscerci."],
];
const availability = ["Occasionale", "Alcuni progetti durante l’anno", "Collaborazione ricorrente", "Da valutare in base al progetto"];

export default function CollaborationForm({ privacyUrl, privacyReady }) {
  const [contactType, setContactType] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");
  const sending = useRef(false);

  useEffect(() => {
    const requestedType = new URLSearchParams(window.location.search).get("tipo");
    if (contactTypes.some(([value]) => value === requestedType)) setContactType(requestedType);
    const handler = (event) => {
      const type = event.target.closest("[data-contact-type]")?.dataset.contactType;
      if (type) setContactType(type);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  async function submit(event) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(["name","email","website","work","contactType","skills","preferredProjects","availability","projectInfo"].map((key) => [key, String(data.get(key) || "").trim()]));
    const nextErrors = {};
    if (!payload.name) nextErrors.name = "Inserisci nome e cognome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) nextErrors.email = "Inserisci un indirizzo email valido.";
    if (!payload.work) nextErrors.work = "Raccontaci brevemente cosa fai.";
    if (!payload.contactType) nextErrors.contactType = "Scegli il tipo di contatto.";
    if (!data.get("privacy")) nextErrors.privacy = "Conferma di aver letto l’informativa privacy.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) { form.querySelector(`[name="${Object.keys(nextErrors)[0]}"]`)?.focus(); return; }
    if (!privacyReady) return;
    sending.current = true; setStatus("submitting"); setSubmitError("");
    try {
      const response = await fetch("/api/collaborazioni", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(payload), signal:AbortSignal.timeout(20000) });
      if (!response.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("idle");
      setSubmitError("Non siamo riuscite a confermare l’invio. I dati sono ancora nel modulo: riprova oppure scrivici a info@mithacreative.it.");
    } finally { sending.current = false; }
  }

  if (status === "success") return <section id="form-collaborazione" className={styles.formSection}><p className={styles.eyebrow}>Messaggio ricevuto</p><h2 tabIndex={-1}>Grazie. Ora sappiamo qualcosa in più di te.</h2><p>Leggeremo la tua presentazione e ti risponderemo se vediamo uno spazio concreto per conoscerci o lavorare insieme.</p></section>;

  return <section id="form-collaborazione" className={styles.formSection} aria-labelledby="collaboration-form-title">
    <div className={styles.formIntro}><p className={styles.eyebrow}>Parliamone</p><h2 id="collaboration-form-title">Raccontaci come potremmo lavorare insieme.</h2><p>Non è una candidatura. È l’inizio di una possibile collaborazione.</p></div>
    <form className={styles.form} onSubmit={submit} onChange={(e) => setErrors((old) => ({...old,[e.target.name]:undefined}))} noValidate aria-busy={status === "submitting"}>
      <fieldset disabled={status === "submitting"}>
        <div className={styles.row}><Field label="Nome e cognome *" name="name" error={errors.name} autoComplete="name" /><Field label="Email *" name="email" type="email" error={errors.email} autoComplete="email" /></div>
        <Field label="Sito / portfolio / LinkedIn" name="website" type="url" />
        <Field label="Cosa fai? *" name="work" textarea error={errors.work} />
        <fieldset className={styles.choiceGroup} aria-describedby={errors.contactType ? "contact-type-error" : undefined}><legend>Tipo di contatto *</legend>{contactTypes.map(([value,label]) => <label key={value}><input type="radio" name="contactType" value={value} checked={contactType === value} onChange={() => setContactType(value)} /><span>{label}</span></label>)}{errors.contactType && <p id="contact-type-error" className={styles.error}>{errors.contactType}</p>}</fieldset>
        <Field label="Competenze principali" name="skills" />
        <Field label="Che tipo di progetti preferisci?" name="preferredProjects" textarea />
        <div className={styles.field}><label htmlFor="availability">Disponibilità indicativa</label><select id="availability" name="availability" defaultValue=""><option value="">Seleziona, se vuoi</option>{availability.map((item) => <option key={item}>{item}</option>)}</select></div>
        {(contactType === "project" || contactType === "both") && <Field label="Informazioni sul progetto" name="projectInfo" textarea hint="Raccontaci brevemente di cosa si tratta, quali competenze ti servono e in che fase ti trovi." />}
        <label className={styles.privacy}><input type="checkbox" name="privacy" /><span>Ho letto l’<a href={privacyUrl} target="_blank" rel="noopener noreferrer">informativa privacy (si apre in una nuova scheda)</a>. *</span></label>
        {errors.privacy && <p className={styles.error}>{errors.privacy}</p>}
        {!privacyReady && <p className={styles.notice}>L’informativa privacy è in preparazione. Nel frattempo puoi contattarci via <a href="mailto:info@mithacreative.it">email</a>.</p>}
        {submitError && <p role="alert" className={styles.error}>{submitError}</p>}
        <div className={styles.submit}><Cta2 type="submit" disabled={!privacyReady || status === "submitting"}>{status === "submitting" ? "Invio in corso…" : "Conosciamoci"}</Cta2><p role="status">Non è una candidatura. È l’inizio di una possibile collaborazione.</p></div>
      </fieldset>
    </form>
  </section>;
}

function Field({ label, name, type="text", textarea=false, error, hint, ...props }) {
  const id = `collab-${name}`;
  return <div className={styles.field}><label htmlFor={id}>{label}</label>{textarea ? <textarea id={id} name={name} rows={4} maxLength={4000} aria-invalid={!!error} {...props} /> : <input id={id} name={name} type={type} maxLength={500} aria-invalid={!!error} {...props} />}{hint && <p className={styles.hint}>{hint}</p>}{error && <p className={styles.error}>{error}</p>}</div>;
}
