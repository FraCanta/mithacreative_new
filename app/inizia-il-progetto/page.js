import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Logo from "../../public/assets/logo.png";
import StepsContact from "../components/StepsContact/StepsContact";
import styles from "./project.module.css";

export const metadata = {
  title: "Inizia il progetto | Mitha Creative",
  description: "Raccontaci la tua idea: obiettivi, servizi e budget indicativo. Iniziamo a costruire insieme il tuo prossimo progetto digitale.",
};

export default function IniziaProgetto() {
  const configuredPrivacyUrl = process.env.PROJECT_PRIVACY_URL || "";
  const privacyUrlReady = /^(https?:\/\/|\/(?!\/))/.test(configuredPrivacyUrl);
  // Sblocco temporaneo richiesto per verificare l'invio email in produzione.
  const privacyReady = true;
  const privacyUrl = privacyUrlReady ? configuredPrivacyUrl : "/privacy";
  return (
    <div className={styles.page}>
      <nav className={styles.navigation} aria-label="Navigazione del progetto">
        <Link href="/" aria-label="Mitha Creative, homepage"><Image src={Logo} alt="Mitha Creative" width={80} height={80} /></Link>
        <Link href="/contatti" className={styles.back}><Icon icon="lucide:arrow-left" aria-hidden="true" /> Torna ai contatti</Link>
      </nav>
      <div className={styles.layout}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Inizia il progetto / Il primo passo</p>
          <h1>Tu porti il punto di partenza.<br /><span>Noi costruiamo la rotta.</span></h1>
          <p className={styles.description}>Non devi sapere già quale servizio ti serve. Raccontaci cosa vuoi ottenere, cosa esiste già e dove senti che qualcosa manca.</p>
          <div className={styles.next}>
            <h2>E dopo l’invio?</h2>
            <ol className={styles.process}>
              <li><span>01</span><div><h3>Leggiamo il progetto</h3><p>Capiamo esigenza, obiettivo e contesto.</p></div></li>
              <li><span>02</span><div><h3>Componiamo la crew</h3><p>Coinvolgiamo le competenze necessarie per il progetto.</p></div></li>
              <li><span>03</span><div><h3>Ci confrontiamo</h3><p>Se possiamo aiutarti, fissiamo una call conoscitiva gratuita di 30 minuti.</p></div></li>
            </ol>
            <p className={styles.responseTime}>Ti rispondiamo solitamente entro 72 ore, dal lunedì al venerdì.</p>
          </div>
          <div className={styles.direct}>
            <p>Preferisci partire da una email?</p>
            <a href="mailto:info@mithacreative.it">info@mithacreative.it</a>
          </div>
        </header>
        <StepsContact privacyUrl={privacyUrl} privacyReady={privacyReady} />
      </div>
    </div>
  );
}
