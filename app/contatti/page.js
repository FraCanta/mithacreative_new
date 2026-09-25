import Cta2 from "../components/Cta/Cta2";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contatti | Mitha Creative",
  description: "Hai un’idea o una domanda? Scrivi a info@mithacreative.it oppure raccontaci il tuo progetto. Mitha Creative ti aiuta a scegliere da dove iniziare.",
};

export default function Contatti() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Contatti / Iniziamo da una conversazione</p>
          <h1>Hai un’idea?<br /><span>Facciamole spazio.</span></h1>
        </div>
        <p className={styles.intro}>Un nuovo sito, un’identità da ripensare o una domanda da condividere. Siamo qui per ascoltarti.</p>
      </header>

      <section className={styles.contactGrid} aria-label="Come contattarci">
        <div className={styles.direct}>
          <p className={styles.eyebrow}>Una domanda, una collaborazione, un primo saluto</p>
          <h2>Scrivici, ti leggiamo.</h2>
          <a className={styles.email} href="mailto:info@mithacreative.it">info@mithacreative.it <span aria-hidden="true">↗</span></a>
          <p className={styles.emailHint}>Il link apre la tua app email. Puoi anche copiare l’indirizzo.</p>
          <dl className={styles.details}>
            <div><dt>Quando rispondiamo</dt><dd>Dal lunedì al venerdì, solitamente entro 72 ore.</dd></div>
            <div><dt>Dove lavoriamo</dt><dd>Le distanze non sono un problema: collaboriamo con clienti in tutta Italia e anche all’estero.</dd></div>
          </dl>
          <nav className={styles.social} aria-label="Seguici sui social">
            <span>Ci trovi anche qui</span>
            <a href="https://www.instagram.com/mitha.creative/">Instagram <span aria-hidden="true">↗</span></a>
            <a href="https://www.facebook.com/profile.php?id=61551739027892">Facebook <span aria-hidden="true">↗</span></a>
          </nav>
        </div>

        <article className={styles.project}>
          <p className={styles.eyebrow}>Hai già un progetto in mente?</p>
          <h2>Raccontaci cosa<br />vuoi realizzare.</h2>
          <p>Il questionario ci aiuta a conoscere la tua attività e a preparare il primo confronto. Ti chiederemo:</p>
          <ol className={styles.projectSteps}>
            <li><span aria-hidden="true">01</span><div><h3>Chi sei e dove vuoi arrivare</h3><p>La tua attività e gli obiettivi del progetto.</p></div></li>
            <li><span aria-hidden="true">02</span><div><h3>Di cosa hai bisogno</h3><p>Le idee, i dubbi e le difficoltà che incontri.</p></div></li>
            <li><span aria-hidden="true">03</span><div><h3>Il budget che hai in mente</h3><p>Un’indicazione per orientarci sulle tue esigenze.</p></div></li>
          </ol>
          <Cta2 link="/inizia-il-progetto" lightSurface>Raccontaci il progetto</Cta2>
        </article>
      </section>

      <section className={styles.note} aria-labelledby="primo-messaggio">
        <p className={styles.eyebrow}>Non serve avere tutto definito</p>
        <div><h2 id="primo-messaggio">Puoi cominciare da quello che sai.</h2><p>Nel tuo messaggio raccontaci brevemente cosa fai, cosa vorresti migliorare e su cosa cerchi un confronto. Se hai già un sito, puoi aggiungere il link.</p></div>
      </section>

      <section className={styles.faq} aria-labelledby="dubbi-contatto">
        <div><h2 id="dubbi-contatto">Prima, vuoi saperne di più?</h2><p>Costi indicativi, tempistiche e modalità di lavoro: trovi le prime risposte nelle FAQ.</p></div>
        <Cta2 link="/faq-domande-frequenti">Leggi le FAQ</Cta2>
      </section>
    </div>
  );
}
