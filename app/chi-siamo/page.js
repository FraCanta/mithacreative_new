import Image from "next/image";
import Cta2 from "../components/Cta/Cta2";
import styles from "./about.module.css";

export const metadata = {
  title: "Chi siamo | Mitha Creative",
  description: "Mitha Creative unisce design, sviluppo web e identità visiva. Scopri lo studio e il nostro approccio: ascolto, ricerca e cura dei dettagli.",
};

const principles = [
  { number: "01", title: "Ascoltare, prima di disegnare.", text: "Ogni progetto comincia dalla tua storia. Ci confrontiamo su obiettivi, pubblico e necessità per capire cosa deve comunicare il tuo brand e cosa deve fare il tuo sito." },
  { number: "02", title: "Dare un senso a ogni scelta.", text: "Mettiamo in relazione ricerca, identità visiva e funzionalità. Colori, parole e interazioni devono parlare la stessa lingua e rendere semplice l’esperienza di chi ti sceglie." },
  { number: "03", title: "Costruire insieme, fino al lancio.", text: "Condividiamo la direzione del progetto, affiniamo i dettagli e verifichiamo il risultato. Restiamo al tuo fianco anche dopo la pubblicazione, con assistenza e supporto." },
];

export default function ChiSiamo() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Chi siamo / Lo studio</p>
          <h1>Una visione creativa.<br /><span>Con i piedi per terra.</span></h1>
          <p className={styles.intro}>Siamo Mitha Creative. Uniamo design e sviluppo per dare forma a brand riconoscibili ed esperienze digitali che funzionano.</p>
          <a className={styles.anchor} href="#approccio">Esplora il nostro approccio <span aria-hidden="true">↓</span></a>
        </div>
        <div className={styles.visual}>
          <span className={styles.orbit} aria-hidden="true" />
          <Image src="/assets/mitha.webp" alt="" fill priority sizes="(min-width: 900px) 42vw, 90vw" className={styles.artwork} />
          <p className={styles.visualLabel}>Idee da esplorare.<br />Identità da costruire.</p>
        </div>
      </header>

      <section className={styles.manifesto} aria-labelledby="studio">
        <p className={styles.eyebrow}>Il nostro punto di vista</p>
        <div>
          <h2 id="studio">La creatività prende forma<br />quando incontra uno scopo.</h2>
          <div className={styles.story}>
            <p>Affianchiamo professionisti, artigiani, piccole imprese e startup che vogliono raccontarsi meglio. Partiamo da ciò che rende unica un’attività e lo traduciamo in un linguaggio visivo coerente.</p>
            <p>Il nostro lavoro mette insieme sensibilità grafica e competenze tecniche. Progettiamo identità e siti web pensando sia a chi li commissiona, sia alle persone che li useranno ogni giorno.</p>
          </div>
        </div>
      </section>

      <section id="approccio" className={styles.approach} aria-labelledby="approccio-titolo">
        <div className={styles.approachIntro}>
          <p className={styles.eyebrow}>Il nostro approccio</p>
          <h2 id="approccio-titolo">Curiose per natura.<br /><span>Concrete per scelta.</span></h2>
          <p>Tre principi che guidano il nostro modo di progettare, dall’idea iniziale all’ultimo dettaglio.</p>
        </div>
        <ol className={styles.principles}>
          {principles.map(({ number, title, text }) => (
            <li key={number}>
              <span className={styles.number} aria-hidden="true">{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.closing} aria-labelledby="prossima-idea">
        <p className={styles.eyebrow}>La prossima idea potrebbe essere la tua</p>
        <h2 id="prossima-idea">Facciamole spazio.</h2>
        <div className={styles.closingBottom}>
          <p>Hai un progetto in mente? Partiamo da una conversazione.</p>
          <div className={styles.links}>
            <Cta2 link="/contatti" lightSurface>Conosciamoci</Cta2>
            <Cta2 link="/servizi" lightSurface>Esplora i servizi</Cta2>
          </div>
        </div>
      </section>
    </div>
  );
}
