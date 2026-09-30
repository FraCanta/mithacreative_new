import Link from "next/link";
import styles from "../privacy/privacy.module.css";

export const metadata = {
  title: "Informativa cookie — Bozza | Mitha Creative",
  description: "Bozza dell’informativa cookie di Mitha Creative, in attesa della verifica tecnica del sito pubblicato.",
  robots: { index: false, follow: false },
};

export default function CookiePage() {
  return (
    <article className={styles.page}>
      <header>
        <p className={styles.eyebrow}>Cookie / Documento in preparazione</p>
        <h1>Informativa cookie</h1>
        <p className={styles.notice}><strong>Bozza da completare.</strong> Questa pagina richiede una verifica tecnica del sito pubblicato prima di poter descrivere con precisione cookie, strumenti, durata, finalità ed eventuali consensi.</p>
      </header>
      <section>
        <h2>1. Cosa sono i cookie</h2>
        <p>I cookie e tecnologie simili possono essere utilizzati per consentire il funzionamento del sito, ricordare preferenze o raccogliere informazioni sull’utilizzo dei servizi.</p>
      </section>
      <section>
        <h2>2. Verifiche da completare</h2>
        <p>Prima della pubblicazione definitiva devono essere verificati gli strumenti effettivamente caricati, i cookie tecnici e di eventuali terze parti, le finalità, i tempi di conservazione, i destinatari e le modalità di gestione del consenso.</p>
        <p>La verifica deve includere anche il tema chiaro/scuro, i collegamenti social, eventuali contenuti esterni e ogni servizio di analytics o marketing attivo in produzione.</p>
      </section>
      <section>
        <h2>3. Aggiornamenti</h2>
        <p>Ultimo aggiornamento: [data di approvazione della versione definitiva].</p>
      </section>
      <Link href="/privacy" className={styles.back}>Leggi l’informativa privacy</Link>
    </article>
  );
}
