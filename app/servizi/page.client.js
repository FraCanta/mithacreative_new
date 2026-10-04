import Image from "next/image";
import Cta2 from "../components/Cta/Cta2";
import Tabs from "../components/Tabs/Tabs";
import styles from "./services.module.css";

export default function ServiziClient() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Servizi / Le missioni Mitha</p>
          <h1>Da dove parte<br /><span>il tuo progetto?</span></h1>
          <p className={styles.heroIntro}>C’è chi deve trovare la propria identità, chi costruire uno spazio digitale, chi lanciare una nuova idea. E chi ha bisogno di capire cosa non funziona.</p>
          <Cta2 link="#missioni">Trova la tua missione</Cta2>
        </div>
        <div className={styles.heroVisual}>
          <Image
            src="/assets/servizi_hero.webp"
            alt="Quattro astronauti attorno a un pianeta viola"
            width={1672}
            height={941}
            priority
            sizes="(min-width: 1000px) 43vw, 90vw"
          />
        </div>
      </header>

      <section className={styles.orientation} aria-labelledby="orientamento-title">
        <p className={styles.eyebrow}>Quattro punti di ingresso</p>
        <div>
          <h2 id="orientamento-title">Inizia dal bisogno.<br /><span>La rotta la costruiamo insieme.</span></h2>
          <p>Le missioni servono a orientarti, non sono pacchetti rigidi. Un progetto può attraversarne più di una: Mitha sceglie le competenze da coinvolgere in base a ciò che serve davvero.</p>
        </div>
      </section>

      <Tabs />

      <section className={styles.freelance} aria-labelledby="freelance-project-title">
        <div><p className={styles.eyebrow}>Collaborazioni</p><h2 id="freelance-project-title">Se il progetto parte da te?</h2></div>
        <div><p>Se sei un freelance e hai un cliente che richiede più competenze di quelle che puoi gestire da solo, possiamo costruire insieme la crew.</p><Cta2 link="/collabora-con-noi?tipo=project#form-collaborazione">Porta il progetto</Cta2></div>
      </section>

      <section className={styles.closing} aria-labelledby="servizi-contatto">
        <p className={styles.eyebrow}>Nessuna etichetta necessaria</p>
        <h2 id="servizi-contatto">Non sai da dove iniziare?</h2>
        <p>Raccontaci il tuo progetto. Ti aiutiamo a individuare il punto di partenza.</p>
        <Cta2 link="/contatti" lightSurface>Raccontaci il progetto</Cta2>
      </section>
    </div>
  );
}
