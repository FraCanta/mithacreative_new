import Image from "next/image";
import Cta2 from "../components/Cta/Cta2";
import styles from "./mentoring.module.css";

export const metadata = {
  title: "Mentoring | Mitha Creative",
  description: "Mentoring per freelance, artigiani e professionisti: un percorso personalizzato o una sessione di 90 minuti per fare chiarezza sul tuo progetto digitale.",
};

const topics = [
  ["Direzione", "Mettiamo a fuoco obiettivi, priorità e prossimi passi del tuo progetto."],
  ["Competenze", "Approfondiamo gli aspetti tecnici del web design su cui vuoi lavorare."],
  ["Comunicazione", "Ragioniamo su come presentare la tua attività e raggiungere il tuo pubblico."],
  ["Continuità", "Ti affianchiamo nei dubbi e nelle decisioni lungo il percorso."],
];

export default function Mentoring() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Mentoring / Uno spazio per crescere</p>
          <h1>Il prossimo passo?<br /><span>Troviamolo insieme.</span></h1>
          <p className={styles.intro}>Hai tante idee, ma non sai come portarle avanti? Un confronto uno a uno per fare chiarezza, sviluppare le tue competenze e dare una direzione al tuo progetto digitale.</p>
          <div className={styles.actions}>
            <Cta2 link="/contatti">Parliamo dei tuoi obiettivi</Cta2>
            <a href="#percorsi" className={styles.textLink}>Scopri i percorsi <span aria-hidden="true">↓</span></a>
          </div>
          <p className={styles.audience}>Per freelance, artigiani, professionisti e chi muove i primi passi nel web design.</p>
        </div>
        <div className={styles.visual}>
          <div className={styles.orbit} aria-hidden="true" />
          <Image src="/assets/lancio.webp" alt="" fill priority sizes="(min-width: 960px) 40vw, 90vw" className={styles.artwork} />
          <span className={styles.badge}>Il tuo progetto, al centro.</span>
        </div>
      </header>

      <section className={styles.focus} aria-labelledby="focus-titolo">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Su cosa possiamo lavorare</p>
          <h2 id="focus-titolo">Meno dubbi.<br />Più consapevolezza.</h2>
        </div>
        <div className={styles.topics}>
          {topics.map(([title, text], index) => (
            <article key={title}><span className={styles.number} aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section id="percorsi" className={styles.paths} aria-labelledby="percorsi-titolo">
        <div className={styles.pathsHeading}>
          <div><p className={styles.eyebrow}>Due modi per cominciare</p><h2 id="percorsi-titolo">Il supporto giusto,<br />nel momento giusto.</h2></div>
          <p>Un dubbio preciso o un progetto da accompagnare nel tempo: partiamo da ciò di cui hai bisogno.</p>
        </div>
        <div className={styles.pathGrid}>
          <article className={`${styles.pathCard} ${styles.featured}`}>
            <p className={styles.eyebrow}>01 / Un percorso da costruire</p>
            <h3>Mentoring su misura</h3>
            <p>Per chi cerca un confronto continuativo e una direzione da sviluppare, un passo alla volta.</p>
            <ul><li>Primo confronto conoscitivo gratuito</li><li>Obiettivi e piano personalizzati</li><li>Supporto e formazione sulle tue esigenze</li></ul>
            <div className={styles.cardAction}><Cta2 link="/contatti" lightSurface>Parliamo del tuo percorso</Cta2></div>
          </article>
          <article className={styles.pathCard}>
            <p className={styles.eyebrow}>02 / Un tema da approfondire</p>
            <h3>Power session</h3>
            <p>Una consulenza di <strong>90 minuti</strong> per concentrarci su un problema o una scelta del tuo progetto.</p>
            <ul><li>Un confronto dedicato al tuo obiettivo</li><li>Spazio per domande e dubbi specifici</li><li>Indicazioni per decidere come proseguire</li></ul>
            <div className={styles.cardAction}><Cta2 link="/contatti">Parliamo della sessione</Cta2></div>
          </article>
        </div>
      </section>

      <section className={styles.stepsSection} aria-labelledby="passi-titolo">
        <p className={styles.eyebrow}>Come iniziamo</p>
        <h2 id="passi-titolo">Dalla prima domanda<br />a una direzione più chiara.</h2>
        <ol className={styles.steps}>
          {[
            ["Raccontaci dove sei", "Scrivici cosa stai realizzando, quali dubbi hai e su cosa vorresti un supporto."],
            ["Scegliamo il formato", "Valutiamo insieme se partire da una sessione mirata o da un percorso personalizzato."],
            ["Mettiamoci al lavoro", "Concordiamo modalità e tempi e iniziamo a lavorare sui tuoi obiettivi."],
          ].map(([title, text], index) => <li key={title}><span className={styles.number} aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}
        </ol>
      </section>

      <section className={styles.closing} aria-labelledby="inizia-titolo">
        <div><h2 id="inizia-titolo">Puoi partire anche da un dubbio.</h2><p>Non serve avere già tutte le risposte. Raccontaci la tua situazione.</p></div>
        <Cta2 link="/contatti">Parliamone</Cta2>
      </section>
    </div>
  );
}
