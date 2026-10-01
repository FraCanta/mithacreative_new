import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Cta2 from "../components/Cta/Cta2";
import { missions } from "../servizi/missions";
import FreelanceCard from "./FreelanceCard";
import { freelancers } from "./people";
import styles from "./about.module.css";

export const metadata = {
  title: "Chi siamo | Mitha Creative",
  description: "Scopri Mitha: quattro freelance indipendenti che formano una squadra su misura per ogni progetto.",
};

export default function ChiSiamo() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Chi siamo / Il collective</p>
          <h1>Quattro freelance.<br /><span>Una squadra per il tuo progetto.</span></h1>
          <p className={styles.intro}>Mitha è una rete di quattro professioniste indipendenti. Mettiamo insieme le competenze giuste in base a ciò che il tuo progetto richiede, mantenendo un unico punto di contatto.</p>
          <div className={styles.heroActions}>
            <Cta2 link="#freelance">Conosci le persone</Cta2>
            <Cta2 link="/servizi">Esplora i servizi</Cta2>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <Image src="/assets/chi_siamohero.webp" alt="Illustrazione Mitha per la pagina Chi siamo" fill priority sizes="(min-width: 900px) 45vw, 100vw" />
        </div>
      </header>

      <section className={styles.pointOfView} aria-labelledby="punto-di-vista">
        <p className={styles.eyebrow}>Il punto di vista Mitha</p>
        <div>
          <h2 id="punto-di-vista">Una squadra che si forma intorno al progetto.</h2>
          <div className={styles.twoColumns}>
            <p>Le professioniste di Mitha lavorano in autonomia, con competenze e sensibilità diverse. Per ogni incarico scegliamo chi può dare il contributo più utile, senza partire da un team fisso o da una soluzione preconfezionata.</p>
            <p>Mitha resta il punto di contatto: coordina la direzione, tiene insieme le decisioni e rende semplice lavorare con persone indipendenti che condividono lo stesso standard di cura.</p>
          </div>
        </div>
      </section>

      <section id="freelance" className={styles.freelancers} aria-labelledby="freelance-title">
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>Le quattro freelance</p><h2 id="freelance-title">Profili diversi.<br /><span>Una direzione comune.</span></h2></div>
        <div className={styles.freelanceGrid}>
          {freelancers.map((person) => <FreelanceCard key={person.name} person={person} />)}
        </div>
      </section>

      <section className={styles.services} aria-labelledby="services-title">
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>Servizi Mitha</p><h2 id="services-title">Scegli la missione<br /><span>da cui partire.</span></h2></div>
        <div className={styles.missionGrid}>
          {missions.map(({ title, need, image, slug }) => <Link className="mission-card" href={`/servizi/${slug}`} key={slug} aria-label={`Scopri ${title}: ${need}`}>
            <div className="mission-card__image"><Image src={image} alt="" fill sizes="(min-width: 900px) 22vw, 90vw" /></div>
            <div className="mission-card__body"><div className="mission-card__copy"><h3>{title}</h3><p>{need}</p></div><span className="mission-arrow" aria-hidden="true"><Icon icon="mdi:arrow-right" width="18" height="18" /></span></div>
          </Link>)}
        </div>
      </section>

      <section className={styles.collaboration} aria-labelledby="collaboration-title">
        <p className={styles.eyebrow}>Come collaboriamo</p>
        <div><h2 id="collaboration-title">Ascoltiamo il progetto,<br /><span>componiamo la squadra,</span><br />realizziamo insieme.</h2><p>Non c’è un percorso uguale per tutti. Partiamo dall’ascolto, scegliamo le competenze adatte e costruiamo il lavoro insieme, con una direzione chiara e spazio per fare le cose bene.</p></div>
      </section>

      <section className={styles.join} aria-labelledby="join-title">
        <div>
          <p className={styles.eyebrow}>Entra nella nostra orbita</p>
          <h2 id="join-title">Ti riconosci nel nostro modo di lavorare?</h2>
        </div>
        <div>
          <p>Siamo curiose di conoscere freelance con competenze complementari, attenzione per i dettagli e voglia di costruire collaborazioni solide.</p>
          <Cta2 link="/unisciti-a-noi">Unisciti a noi</Cta2>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="closing-title">
        <p className={styles.eyebrow}>Una nuova orbita per il tuo progetto</p><h2 id="closing-title">Troviamo la squadra giusta.</h2>
        <div className={styles.closingActions}><Cta2 link="/servizi" lightSurface>Esplora i servizi</Cta2><Cta2 link="/inizia-il-progetto" lightSurface>Inizia un progetto</Cta2></div>
      </section>
    </div>
  );
}
