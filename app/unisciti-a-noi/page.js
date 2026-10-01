import Cta2 from "../components/Cta/Cta2";
import styles from "./join.module.css";

export const metadata = {
  title: "Unisciti a noi | Mitha Creative",
  description: "Presentati a Mitha Creative: cerchiamo freelance curiose, affidabili e pronte a collaborare su progetti multidisciplinari.",
};

const qualities = [
  ["01", "Autonomia", "Sai organizzare il tuo lavoro, condividere le scelte e rispettare gli impegni presi."],
  ["02", "Collaborazione", "Ti piace confrontarti, dare spazio alle altre competenze e costruire una direzione comune."],
  ["03", "Cura", "Presti attenzione ai dettagli, alle persone e alla qualità di ciò che consegni."],
];

export default function UniscitiANoi() {
  const emailLink = "mailto:info@mithacreative.it?subject=Vorrei%20collaborare%20con%20Mitha";

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Mitha / Unisciti a noi</p>
        <div className={styles.heroGrid}>
          <h1>Nuove competenze.<br /><span>Nuove orbite.</span></h1>
          <div className={styles.heroCopy}>
            <p>Siamo una rete di freelance indipendenti e ci piace incontrare persone con cui condividere progetti, responsabilità e idee ben fatte.</p>
            <Cta2 link={emailLink}>Presentati a Mitha</Cta2>
          </div>
        </div>
      </header>

      <section className={styles.intro} aria-labelledby="come-funziona">
        <p className={styles.eyebrow}>Come funziona</p>
        <div>
          <h2 id="come-funziona">Non cerchiamo ruoli da riempire.<br /><span>Costruiamo collaborazioni.</span></h2>
          <p>Mitha non è un’agenzia con una struttura fissa. Per ogni progetto componiamo la squadra in base alle competenze necessarie. Se nasce l’incastro giusto, lavoriamo insieme mantenendo ciascuna la propria autonomia professionale.</p>
        </div>
      </section>

      <section className={styles.values} aria-labelledby="cerchiamo-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Il modo di lavorare</p>
          <h2 id="cerchiamo-title">Cosa cerchiamo nelle persone.</h2>
        </div>
        <ol className={styles.qualityList}>
          {qualities.map(([number, title, copy]) => (
            <li key={number}>
              <span aria-hidden="true">{number}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.profiles} aria-labelledby="profili-title">
        <p className={styles.eyebrow}>Competenze complementari</p>
        <div>
          <h2 id="profili-title">Ci interessa conoscere chi può ampliare la squadra.</h2>
          <p>Strategia, sviluppo, design, contenuti, fotografia, video, performance marketing e altre specializzazioni utili ai progetti digitali e di comunicazione. L’elenco resta aperto: conta soprattutto il contributo che puoi portare.</p>
        </div>
      </section>

      <section className={styles.apply} aria-labelledby="presentati-title">
        <div>
          <p className={styles.eyebrow}>Raccontaci di te</p>
          <h2 id="presentati-title">Iniziamo da una presentazione semplice.</h2>
        </div>
        <div className={styles.applyCopy}>
          <p>Scrivici chi sei, di cosa ti occupi e in quali progetti dai il meglio. Aggiungi il portfolio, il sito o alcuni lavori rappresentativi. Leggiamo ogni messaggio, anche quando non c’è subito un progetto adatto.</p>
          <a className={styles.email} href={emailLink}>info@mithacreative.it <span aria-hidden="true">↗</span></a>
          <p className={styles.note}>Collaboriamo con professioniste e professionisti freelance. L’invio della presentazione non costituisce una candidatura per una posizione lavorativa aperta.</p>
        </div>
      </section>
    </div>
  );
}
