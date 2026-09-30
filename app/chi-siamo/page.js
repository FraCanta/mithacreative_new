import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Cta2 from "../components/Cta/Cta2";
import styles from "./about.module.css";

export const metadata = {
  title: "Chi siamo | Mitha Creative",
  description: "Scopri Mitha: quattro freelance indipendenti che costruiscono crew su misura per ogni progetto.",
};

const freelancers = [
  { name: "Alice Bolla", role: "Copywriter & Ads", image: "/assets/Alice_Bolla_astronauta.png", accent: "coral", portfolio: "" },
  { name: "Miranda Giaccon", role: "UX/UI Designer", image: "/assets/Miranda_Giaccon_astronauta.png", accent: "lilac", portfolio: "" },
  { name: "Elisa Avantey", role: "Graphic Designer", image: "/assets/Elisa_Avantey_astronauta.png", accent: "violet", portfolio: "" },
  { name: "Francesca Cantale", role: "Web Developer", image: "/assets/Francesca_Cantale_astronauta.png", accent: "orange", portfolio: "" },
];

const missions = [
  ["Brand Mission", "Costruiamo identità che lasciano il segno.", "/assets/brand_mission.png"],
  ["Digital Mission", "Esperienze digitali belle, utili e performanti.", "/assets/digital_mission.png"],
  ["Launch Mission", "Ti aiutiamo a lanciare nuove idee e progetti.", "/assets/launch_mission.png"],
  ["Orbit Check", "Analizziamo, ottimizziamo e facciamo crescere ciò che esiste già.", "/assets/orbit_check.png"],
];

export default function ChiSiamo() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Chi siamo / Il collective</p>
          <h1>Quattro freelance.<br /><span>Una crew fatta sul tuo progetto.</span></h1>
          <p className={styles.intro}>Mitha è una rete di quattro professioniste indipendenti. Mettiamo insieme le competenze giuste in base a ciò che il tuo progetto richiede, mantenendo un unico punto di contatto.</p>
          <div className={styles.heroActions}>
            <Cta2 link="#freelance">Conosci le persone</Cta2>
            <Cta2 link="/servizi">Esplora i servizi</Cta2>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <Image src="/assets/chi_siamohero.png" alt="Illustrazione Mitha per la pagina Chi siamo" fill priority sizes="(min-width: 900px) 45vw, 100vw" />
        </div>
      </header>

      <section className={styles.pointOfView} aria-labelledby="punto-di-vista">
        <p className={styles.eyebrow}>Il punto di vista Mitha</p>
        <div>
          <h2 id="punto-di-vista">Una crew che si compone intorno al progetto.</h2>
          <div className={styles.twoColumns}>
            <p>Le professioniste di Mitha lavorano in autonomia, con competenze e sensibilità diverse. Per ogni incarico scegliamo chi può dare il contributo più utile, senza partire da un team fisso o da una soluzione preconfezionata.</p>
            <p>Mitha resta il punto di contatto: coordina la direzione, tiene insieme le decisioni e rende semplice lavorare con persone indipendenti che condividono lo stesso standard di cura.</p>
          </div>
        </div>
      </section>

      <section id="freelance" className={styles.freelancers} aria-labelledby="freelance-title">
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>Le quattro freelance</p><h2 id="freelance-title">Profili diversi.<br /><span>Una direzione comune.</span></h2></div>
        <div className={styles.freelanceGrid}>
          {freelancers.map((person) => <article className={`${styles.personCard} ${styles[person.accent]}`} key={person.name}>
            <div className={styles.personImage}><Image src={person.image} alt={`${person.name}, ${person.role}`} fill sizes="(min-width: 900px) 22vw, 90vw" /></div>
            <div className={styles.personInfo}><h3>{person.name}</h3><p>{person.role}</p><div className={styles.socialLinks} aria-label={`Link social di ${person.name}`}><a className={styles.socialLinkDisabled} href="#" aria-label={`Instagram di ${person.name}`} aria-disabled="true" tabIndex={-1}><Icon icon="mdi:instagram" width="20" height="20" /></a><a className={styles.socialLinkDisabled} href="#" aria-label={`LinkedIn di ${person.name}`} aria-disabled="true" tabIndex={-1}><Icon icon="mdi:linkedin" width="20" height="20" /></a><a className={styles.socialLinkDisabled} href="#" aria-label={`Sito web di ${person.name}`} aria-disabled="true" tabIndex={-1}><Icon icon="mdi:web" width="20" height="20" /></a></div></div>
          </article>)}
        </div>
      </section>

      <section className={styles.services} aria-labelledby="services-title">
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>Servizi Mitha</p><h2 id="services-title">Scegli la missione<br /><span>da cui partire.</span></h2></div>
        <div className={styles.missionGrid}>
          {missions.map(([title, description, image]) => <Link className="mission-card" href="/servizi" key={title}>
            <div className="mission-card__image"><Image src={image} alt="" fill sizes="(min-width: 900px) 22vw, 90vw" /></div>
            <div className="mission-card__body"><div className="mission-card__copy"><h3>{title}</h3><p>{description}</p></div><span className="mission-arrow" aria-hidden="true"><Icon icon="mdi:arrow-right" width="18" height="18" /></span></div>
          </Link>)}
        </div>
      </section>

      <section className={styles.collaboration} aria-labelledby="collaboration-title">
        <p className={styles.eyebrow}>Come collaboriamo</p>
        <div><h2 id="collaboration-title">Ascoltiamo il progetto,<br /><span>componiamo la crew,</span><br />realizziamo insieme.</h2><p>Non c’è un percorso uguale per tutti. Partiamo dall’ascolto, scegliamo le competenze adatte e costruiamo il lavoro insieme, con una direzione chiara e spazio per fare le cose bene.</p></div>
      </section>

      <section className={styles.closing} aria-labelledby="closing-title">
        <p className={styles.eyebrow}>Una nuova orbita per il tuo progetto</p><h2 id="closing-title">Troviamo la crew giusta.</h2>
        <div className={styles.closingActions}><Cta2 link="/servizi" lightSurface>Esplora i servizi</Cta2><Cta2 link="/inizia-il-progetto" lightSurface>Inizia un progetto</Cta2></div>
      </section>
    </div>
  );
}
