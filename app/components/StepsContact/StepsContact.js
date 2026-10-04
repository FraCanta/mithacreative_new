"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Cta2 from "../Cta/Cta2";
import styles from "../../inizia-il-progetto/project.module.css";

const missions = [
  { value: "brand-mission", code: "01 / BRAND", title: "Brand Mission", description: "Devo costruire o rimettere a fuoco un’identità." },
  { value: "digital-mission", code: "02 / DIGITAL", title: "Digital Mission", description: "Devo progettare o rinnovare qualcosa di digitale." },
  { value: "launch-mission", code: "03 / LAUNCH", title: "Launch Mission", description: "Devo portare una nuova idea sul mercato." },
  { value: "orbit-check", code: "04 / ORBIT", title: "Orbit Check", description: "Ho già qualcosa, ma non capisco cosa non sta funzionando." },
  { value: "non-lo-so", code: "PUNTO DI PARTENZA APERTO", title: "Non lo so ancora", description: "Vorrei capire insieme da dove partire." },
];
const objectives = [
  ["farmi-conoscere", "Farmi conoscere meglio"],
  ["contatti-vendite", "Generare più contatti o vendite"],
  ["brand-riconoscibile", "Rendere il brand più riconoscibile"],
  ["migliorare", "Migliorare qualcosa che oggi non funziona"],
  ["lanciare", "Lanciare qualcosa di nuovo"],
  ["semplificare", "Rendere più semplice un processo o un servizio"],
  ["altro", "Altro"],
];
const budgets = ["Meno di 1.500 €", "Da 1.500 a meno di 3.000 €", "Da 3.000 a 5.000 €", "Oltre 5.000 €", "Non l’ho ancora definito"];
const timelines = [
  ["nessuna-scadenza", "Nessuna scadenza precisa"],
  ["entro-un-mese", "Entro 1 mese"],
  ["uno-tre-mesi", "1–3 mesi"],
  ["tre-sei-mesi", "3–6 mesi"],
  ["piu-avanti", "Più avanti"],
  ["data-precisa", "Ho una data precisa"],
];

export default function StepsContact({ privacyUrl = "/privacy", privacyReady = false }) {
  const searchParams = useSearchParams();
  const requestedMission = searchParams.get("mission");
  const initialMission = missions.some(({ value }) => value === requestedMission) ? requestedMission : "";
  const [mission, setMission] = useState(initialMission);
  const [otherSelected, setOtherSelected] = useState(false);
  const [timeline, setTimeline] = useState("");
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
      mission: String(values.get("mission") || ""),
      objectives: values.getAll("objectives"),
      objectiveOther: String(values.get("objectiveOther") || "").trim(),
      message: String(values.get("message") || "").trim(),
      investimento: String(values.get("investimento") || ""),
      timeline: String(values.get("timeline") || ""),
      deadlineDate: String(values.get("deadlineDate") || ""),
    };
    const nextErrors = {};
    if (!payload.mission) nextErrors.mission = "Scegli il punto di partenza più vicino al tuo progetto.";
    if (!payload.message) nextErrors.message = "Raccontaci brevemente il tuo progetto.";
    if (!payload.name) nextErrors.name = "Inserisci il tuo nome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) nextErrors.email = "Inserisci un indirizzo email valido.";
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
      <div className={styles.formHeading}>
        <p className={styles.formKicker}>Iniziamo dal tuo progetto</p>
        <h2 id="form-titolo">Parlaci del punto di partenza.</h2>
        <p>I campi con * sono obbligatori.</p>
      </div>
      <fieldset disabled={status === "submitting"} className={styles.fields}>
        <legend className="sr-only">Il tuo progetto e i tuoi dati</legend>

        <fieldset className={styles.formSection} aria-describedby={errors.mission ? "mission-error" : undefined}>
          <legend><span className={styles.stepNumber}>01</span>Da dove parte il tuo progetto? *</legend>
          <div className={styles.missionOptions}>
            {missions.map((item) => (
              <label key={item.value} className={styles.missionOption}>
                <input type="radio" name="mission" value={item.value} checked={mission === item.value} onChange={() => setMission(item.value)} />
                <span className={styles.radioMark} aria-hidden="true" />
                <span><small>{item.code}</small><strong>{item.title}</strong><span>{item.description}</span></span>
              </label>
            ))}
          </div>
          {errors.mission && <p id="mission-error" className={styles.error}>{errors.mission}</p>}
        </fieldset>

        <fieldset className={styles.formSection}>
          <legend><span className={styles.stepNumber}>02</span>Cosa vorresti ottenere? <small>(facoltativo)</small></legend>
          <p className={styles.hint}>Puoi scegliere più opzioni.</p>
          <div className={styles.options}>
            {objectives.map(([value, label]) => (
              <label key={value} className={styles.option}>
                <input type="checkbox" name="objectives" value={value} onChange={value === "altro" ? (event) => setOtherSelected(event.target.checked) : undefined} />
                <span>{label}</span>
              </label>
            ))}
          </div>
          {otherSelected && <div className={styles.conditionalField}><label htmlFor="project-other">Raccontaci quale</label><input id="project-other" name="objectiveOther" maxLength={300} /></div>}
        </fieldset>

        <div className={styles.formSection}>
          <div className={styles.field}>
            <label htmlFor="project-message"><span className={styles.stepNumber}>03</span>Raccontaci cosa vuoi ottenere. *</label>
            <textarea id="project-message" name="message" rows={6} maxLength={5000} placeholder="Cosa fai oggi, cosa vorresti cambiare o realizzare e cosa ti sta portando a cercare un supporto?" required aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : "message-hint"} />
            <p id="message-hint" className={styles.hint}>Se hai già un sito o altri materiali, puoi aggiungere qui i link.</p>
            {errors.message && <p id="message-error" className={styles.error}>{errors.message}</p>}
          </div>
        </div>

        <div className={styles.formSection}>
          <div className={styles.field}>
            <label htmlFor="project-budget"><span className={styles.stepNumber}>04</span>Che investimento hai previsto? <small>(facoltativo)</small></label>
            <select id="project-budget" name="investimento" defaultValue="">
              <option value="">Seleziona una fascia</option>
              {budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
            </select>
            <p className={styles.hint}>Non serve una cifra precisa. Ci aiuta a capire quale soluzione può essere realistica per il progetto.</p>
          </div>
        </div>

        <fieldset className={styles.formSection}>
          <legend><span className={styles.stepNumber}>05</span>Hai una scadenza o un periodo in mente? <small>(facoltativo)</small></legend>
          <div className={styles.timelineOptions}>
            {timelines.map(([value, label]) => (
              <label key={value} className={styles.option}>
                <input type="radio" name="timeline" value={value} checked={timeline === value} onChange={() => setTimeline(value)} />
                <span>{label}</span>
              </label>
            ))}
          </div>
          {timeline === "data-precisa" && <div className={styles.conditionalField}><label htmlFor="project-date">Quale data hai in mente?</label><input id="project-date" type="date" name="deadlineDate" /></div>}
        </fieldset>

        <div className={styles.formSection}>
          <p className={styles.sectionLabel}><span className={styles.stepNumber}>06</span>Come possiamo ricontattarti?</p>
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
        </div>

        {privacyUrl ? <div><label className={styles.privacy}><input type="checkbox" name="privacy" required aria-invalid={!!errors.privacy} aria-describedby={errors.privacy ? "privacy-error" : undefined} /><span>Ho letto l’<a href={privacyUrl} target="_blank" rel="noopener noreferrer">informativa privacy (si apre in una nuova scheda)</a>. *</span></label>{errors.privacy && <p id="privacy-error" className={styles.error}>{errors.privacy}</p>}</div> : <p className={styles.notice}>L’invio dal modulo è temporaneamente non disponibile. Puoi scriverci a <a href="mailto:info@mithacreative.it">info@mithacreative.it</a>.</p>}
        {!privacyReady && <p className={styles.notice}>L’informativa privacy è in preparazione. Nel frattempo puoi contattarci via <a href="mailto:info@mithacreative.it">email</a>.</p>}
        {submitError && <p role="alert" className={styles.error}>{submitError}</p>}
        <div className={styles.submitRow}>
          <Cta2 type="submit" disabled={status === "submitting" || !privacyReady}>{status === "submitting" ? "Invio in corso…" : "Partiamo da qui"}</Cta2>
          <p role="status" className={styles.hint}>{status === "submitting" ? "Stiamo inviando la tua richiesta." : "Iniziamo con una conversazione."}</p>
        </div>
      </fieldset>
    </form>
  );
}
