import Cta2 from "../components/Cta/Cta2";
import { Icon } from "@iconify/react";
import CollaborationForm from "./CollaborationForm";
import styles from "./collaboration.module.css";

export const metadata = {
  title: "Collabora con Mitha | Freelance e crew creative",
  description: "Sei un freelance e cerchi competenze per un progetto più grande, oppure vuoi collaborare con Mitha? Costruiamo crew su misura intorno ai progetti.",
};

const skills = ["Fotografia e video", "Motion", "3D", "Advertising specialistico", "Sviluppo verticale", "SEO specialistica", "Data e analytics", "Illustrazione", "Produzione", "Altre competenze complementari"];
const principles = ["Cliente tuo, nostro o condiviso.", "Ruoli chiari prima di partire.", "Competenze che si combinano quando servono."];
const steps = [
  ["01", "Ci raccontiamo come lavoriamo", "Competenze, esperienza, tipo di clienti, disponibilità e aspettative."],
  ["02", "Capiamo se c’è compatibilità", "Metodo, comunicazione, responsabilità e qualità del lavoro contano quanto le skill."],
  ["03", "Costruiamo la collaborazione", "Ruoli, rapporto con il cliente e compensi vengono definiti prima di iniziare."],
];
const values = ["Autonomia professionale", "Affidabilità", "Comunicazione chiara", "Rispetto dei ruoli", "Qualità del lavoro", "Capacità di collaborare con altre discipline", "Trasparenza con cliente e team"];

export default function CollaboraConNoi() {
  const configuredPrivacyUrl = process.env.PROJECT_PRIVACY_URL || "";
  const privacyReady = /^(https?:\/\/|\/(?!\/))/.test(configuredPrivacyUrl);
  const privacyUrl = privacyReady ? configuredPrivacyUrl : "/privacy";

  return <div className={styles.page}>
    <header className={styles.hero}>
      <p className={styles.eyebrow}>Collaborazioni / Crew aperta</p>
      <div className={styles.heroGrid}>
        <h1>Ci sono progetti<br />che richiedono più di una persona.<br /><span>Costruiamoli insieme.</span></h1>
        <div className={styles.heroCopy}>
          <p>Mitha è una rete di professionisti indipendenti. Possiamo coinvolgerti in un nostro progetto oppure affiancarti quando un tuo cliente richiede competenze, capacità o struttura che non vuoi gestire da solo.</p>
          <div className={styles.actions}><Cta2 link="#form-collaborazione">Raccontaci come lavori</Cta2><a href="#form-collaborazione" data-contact-type="project" className={styles.textLink}>Ho già un progetto <Icon icon="lucide:arrow-down" aria-hidden="true" /></a></div>
        </div>
      </div>
    </header>

    <section className={styles.manifesto} aria-labelledby="principio-title">
      <p className={styles.eyebrow}>Collaborare senza diventare altro</p>
      <div><h2 id="principio-title">Non devi diventare un’agenzia<br /><span>per lavorare su progetti più grandi.</span></h2><div className={styles.editorialCopy}><p>Ci interessa collaborare con professionisti autonomi, non costruire una rete di fornitori invisibili.</p><p>Il cliente può essere tuo, nostro o condiviso. Mitha può entrare come supporto, crew o regia: ruoli, responsabilità, relazione con il cliente e compensi si definiscono prima di iniziare.</p><p>Nessuno viene assunto o inserito in una squadra permanente. Non chiediamo disponibilità continuativa: ogni collaborazione nasce intorno a un progetto concreto.</p></div><ul className={styles.principles}>{principles.map((item) => <li key={item}>{item}</li>)}</ul></div>
    </section>

    <section className={styles.modes} aria-labelledby="modalita-title">
      <h2 id="modalita-title" className="sr-only">Due modalità di collaborazione</h2>
      <article><p className={styles.eyebrow}>Entra nella crew</p><h3>Porta la tua competenza.</h3><p>Se lavori in un ambito complementare ai nostri e ti interessa entrare in progetti più articolati, raccontaci cosa fai, come lavori e in quali situazioni dai il meglio.</p><ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul><a className={styles.inlineCta} href="#form-collaborazione" data-contact-type="mitha">Presentati alla crew <Icon icon="lucide:arrow-right" aria-hidden="true" /></a></article>
      <article className={styles.projectMode}><p className={styles.eyebrow}>Porta il progetto</p><h3>Hai il cliente.<br />Ti serve una crew.</h3><p>Se hai acquisito un progetto che richiede più competenze, più capacità produttiva o una regia più strutturata, possiamo costruire insieme il gruppo di lavoro necessario senza toglierti la relazione con il cliente.</p><p className={styles.callout}>Mitha non deve necessariamente essere il soggetto che acquisisce il cliente.</p><a className={styles.inlineCta} href="#form-collaborazione" data-contact-type="project">Parliamo del progetto <Icon icon="lucide:arrow-right" aria-hidden="true" /></a></article>
    </section>

    <section className={styles.process} aria-labelledby="process-title"><div className={styles.sectionHeading}><p className={styles.eyebrow}>Come funziona</p><h2 id="process-title">Prima il modo di lavorare.<br /><span>Poi il progetto.</span></h2></div><ol>{steps.map(([number,title,copy]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></section>

    <section className={styles.values} aria-labelledby="values-title"><div><p className={styles.eyebrow}>Cosa conta</p><h2 id="values-title">Ci interessa come lavori,<br />non riempire un database.</h2><p>Non stiamo creando una lista infinita di contatti. Preferiamo conoscere persone con cui avrebbe davvero senso costruire qualcosa.</p></div><ul>{values.map((value) => <li key={value}>{value}</li>)}</ul></section>

    <CollaborationForm privacyUrl={privacyUrl} privacyReady={privacyReady} />
  </div>;
}
