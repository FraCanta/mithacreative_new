"use client";

import { useEffect, useRef, useState } from "react";
import Cta2 from "../Cta/Cta2";
import styles from "../../inizia-il-progetto/project.module.css";

const goals = [
  ["nuovo-sito-web", "Un nuovo sito web"],
  ["ridisegnare-sito-web", "Restyling del sito"],
  ["ecommerce", "Un nuovo e-commerce"],
  ["ridisegnare-ecommerce", "Restyling e-commerce"],
  ["brand-identity", "Brand identity"],
  ["restyling-brand", "Restyling del brand"],
  ["packaging", "Packaging e prodotti"],
  ["illustrazioni", "Grafica e illustrazioni"],
  ["evento", "Promuovere un evento"],
];
const budgets = ["Meno di 1.500 €", "Da 1.500 a meno di 3.000 €", "Da 3.000 a 5.000 €", "Oltre 5.000 €", "Non so ancora"];

export default function StepsContact({ privacyUrl = "/privacy", privacyReady = false }) {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");
  const submitting = useRef(false);
  const success = useRef(null);

  useEffect(() => {
    if (status === "success") success.current?.focus();
  }, [status]);

  function clearError(event) {
    const name = event.target.name;
    setErrors((current) => current[name] ? { ...current, [name]: undefined } : current);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const values = new FormData(form);
    const payload = {
      name: String(values.get("name") || "").trim(),
      email: String(values.get("email") || "").trim(),
      goal: values.getAll("goal"),
      message: String(values.get("message") || "").trim(),
      investimento: String(values.get("investimento") || ""),
    };
    const nextErrors = {};
    if (!payload.name) nextErrors.name = "Inserisci il tuo nome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) nextErrors.email = "Inserisci un indirizzo email valido.";
    if (!payload.goal.length) nextErrors.goal = "Scegli almeno un servizio.";
    if (!payload.message) nextErrors.message = "Raccontaci brevemente il tuo progetto.";
    if (!payload.investimento) nextErrors.investimento = "Scegli una fascia oppure ‘Non so ancora’.";
    if (privacyUrl && !values.get("privacy")) nextErrors.privacy = "Conferma di aver letto l’informativa privacy.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      form.querySelector(`[name="${Object.keys(nextErrors)[0]}"]`)?.focus();
      return;
    }
    if (!privacyReady) return;
    submitting.current = true;
    setStatus("submitting");
    setSubmitError("");
    try {
      const response = await fetch("/api/progetto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(20000),
      });
      if (!response.ok) throw new Error("Invio non riuscito");
      setStatus("success");
    } catch {
      setStatus("idle");
      setSubmitError("Non siamo riuscite a confermare l’invio. I dati sono ancora nel modulo: riprova oppure scrivici a info@mithacreative.it.");
    } finally {
      submitting.current = false;
    }
  }

  if (status === "success") return (
    <section className={styles.formPanel} aria-labelledby="richiesta-inviata">
      <p className={styles.eyebrow}>Messaggio ricevuto</p>
      <h2 id="richiesta-inviata" ref={success} tabIndex={-1}>La tua idea è arrivata.</h2>
      <p className={styles.successText}>Grazie per averci raccontato il tuo progetto. Ti risponderemo per concordare insieme il prossimo passo.</p>
      <Cta2 link="/">Torna alla home</Cta2>
    </section>
  );

  return (
    <form className={styles.formPanel} onSubmit={handleSubmit} onChange={clearError} noValidate aria-labelledby="form-titolo" aria-busy={status === "submitting"}>
      <div className={styles.formHeading}><h2 id="form-titolo">Parlaci del tuo progetto</h2><p>I campi con * sono obbligatori.</p></div>
      <fieldset disabled={status === "submitting"} className={styles.fields}>
        <legend className="sr-only">I tuoi dati e il tuo progetto</legend>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="project-name">Come ti chiami? *</label>
            <input id="project-name" name="name" autoComplete="name" placeholder="Nome e cognome" maxLength={120} required aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
            {errors.name && <p id="name-error" className={styles.error}>{errors.name}</p>}
          </div>
          <div className={styles.field}>
            <label htmlFor="project-email">La tua email *</label>
            <input id="project-email" name="email" type="email" autoComplete="email" placeholder="nome@esempio.it" maxLength={254} required aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
            {errors.email && <p id="email-error" className={styles.error}>{errors.email}</p>}
          </div>
        </div>
        <fieldset className={styles.services} aria-describedby={errors.goal ? "goal-error" : "goal-hint"}>
          <legend>Di cosa hai bisogno? *</legend>
          <p id="goal-hint" className={styles.hint}>Puoi scegliere più di un servizio.</p>
          <div className={styles.options}>
            {goals.map(([value, label]) => <label key={value} className={styles.option}><input type="checkbox" name="goal" value={value} aria-invalid={!!errors.goal} /><span>{label}</span></label>)}
          </div>
          {errors.goal && <p id="goal-error" className={styles.error}>{errors.goal}</p>}
        </fieldset>
        <div className={styles.field}>
          <label htmlFor="project-message">Raccontaci la tua idea *</label>
          <textarea id="project-message" name="message" rows={4} maxLength={5000} placeholder="Cosa fai, cosa vorresti realizzare e cosa ti serve per cominciare…" required aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : "message-hint"} />
          <p id="message-hint" className={styles.hint}>Se hai già un sito, puoi aggiungere il link.</p>
          {errors.message && <p id="message-error" className={styles.error}>{errors.message}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="project-budget">Qual è il budget indicativo? *</label>
          <select id="project-budget" name="investimento" defaultValue="" required aria-invalid={!!errors.investimento} aria-describedby={errors.investimento ? "budget-error" : "budget-hint"}>
            <option value="" disabled>Seleziona una fascia</option>
            {budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
          </select>
          <p id="budget-hint" className={styles.hint}>Non serve una cifra precisa: puoi scegliere “Non so ancora”.</p>
          {errors.investimento && <p id="budget-error" className={styles.error}>{errors.investimento}</p>}
        </div>
        {privacyUrl ? <div><label className={styles.privacy}><input type="checkbox" name="privacy" required aria-invalid={!!errors.privacy} aria-describedby={errors.privacy ? "privacy-error" : undefined} /><span>Ho letto l’<a href={privacyUrl} target="_blank" rel="noopener noreferrer">informativa privacy (si apre in una nuova scheda)</a>. *</span></label>{errors.privacy && <p id="privacy-error" className={styles.error}>{errors.privacy}</p>}</div> : <p className={styles.notice}>L’invio dal modulo è temporaneamente non disponibile. Puoi scriverci a <a href="mailto:info@mithacreative.it">info@mithacreative.it</a>.</p>}
        {!privacyReady && <p className={styles.notice}>L’informativa privacy è in preparazione. Nel frattempo puoi contattarci via <a href="mailto:info@mithacreative.it">email</a>.</p>}
        {submitError && <p role="alert" className={styles.error}>{submitError}</p>}
        <div className={styles.submitRow}>
          <Cta2 type="submit" disabled={status === "submitting" || !privacyReady}>{status === "submitting" ? "Invio in corso…" : "Invia il progetto"}</Cta2>
          <p role="status" className={styles.hint}>{status === "submitting" ? "Stiamo inviando la tua richiesta." : "Iniziamo con una conversazione."}</p>
        </div>
      </fieldset>
    </form>
  );
}
