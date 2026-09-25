import Cta2 from "../components/Cta/Cta2";
import Tabs from "../components/Tabs/Tabs";
import styles from "./services.module.css";

export default function ServiziClient() {
  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <div>
          <p className={styles.eyebrow}>Servizi / Mitha Creative</p>
          <h1>Le tue idee.<br /><span>Il nostro lato creativo.</span></h1>
        </div>
        <p className={styles.description}>Identità visive, siti web e dettagli che fanno la differenza. Scegli da dove iniziare: al resto pensiamo insieme.</p>
      </header>
      <Tabs />
      <section className={styles.closing} aria-labelledby="servizi-contatto">
        <div>
          <p className={styles.eyebrow}>Troviamo la tua direzione</p>
          <h2 id="servizi-contatto">Non sai da dove partire?</h2>
          <p>Raccontaci la tua idea: ti aiutiamo a scegliere i servizi adatti al tuo progetto.</p>
        </div>
        <Cta2 link="/contatti" lightSurface>Parliamone</Cta2>
      </section>
    </div>
  );
}
