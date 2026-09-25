import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/logo.png";
import StepsContact from "../components/StepsContact/StepsContact";
import styles from "./project.module.css";

export const metadata = {
  title: "Inizia il progetto | Mitha Creative",
  description: "Raccontaci la tua idea: obiettivi, servizi e budget indicativo. Iniziamo a costruire insieme il tuo prossimo progetto digitale.",
};

export default function IniziaProgetto() {
  const configuredPrivacyUrl = process.env.PROJECT_PRIVACY_URL || "";
  const privacyReady = /^(https?:\/\/|\/(?!\/))/.test(configuredPrivacyUrl);
  const privacyUrl = privacyReady ? configuredPrivacyUrl : "/privacy";
  return (
    <div className={styles.page}>
      <nav className={styles.navigation} aria-label="Navigazione del progetto">
        <Link href="/" aria-label="Mitha Creative, homepage"><Image src={Logo} alt="Mitha Creative" width={80} height={80} /></Link>
        <Link href="/contatti" className={styles.back}><span aria-hidden="true">←</span> Torna ai contatti</Link>
      </nav>
      <div className={styles.layout}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Inizia il progetto / Il primo passo</p>
          <h1>Tu porti l’idea.<br /><span>Noi le diamo forma.</span></h1>
          <p className={styles.description}>Raccontaci cosa hai in mente. Non serve un brief perfetto: bastano un obiettivo e la voglia di cominciare.</p>
          <div className={styles.next}>
            <h2>E dopo l’invio?</h2>
            <p>Leggiamo la tua richiesta e ti rispondiamo, solitamente entro 72 ore dal lunedì al venerdì, per concordare un primo confronto.</p>
            <p>La call conoscitiva di 30 minuti è gratuita.</p>
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
