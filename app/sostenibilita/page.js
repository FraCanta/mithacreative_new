import styles from "./sostenibilita.module.css";
import { Icon } from "@iconify/react";

const hostname = "mithacreative-new.mitha-creatives.workers.dev";
const greenCheckUrl = `https://www.thegreenwebfoundation.org/green-web-check/?url=${hostname}`;
const badgeUrl = `https://app.greenweb.org/api/v3/greencheckimage/${hostname}?nocache=true`;

export const metadata = {
  title: "Sostenibilità digitale | Mitha Creative",
  description: "Le scelte di Mitha per un sito più leggero e la verifica dell’hosting tramite Green Web Foundation.",
};

export default function SostenibilitaPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Mitha / Sostenibilità digitale</p>
          <h1>Un sito più leggero.<br /><span>Una scelta più consapevole.</span></h1>
          <p className={styles.lead}>Anche un sito web usa risorse. Per questo curiamo il peso delle immagini e abbiamo scelto un’infrastruttura riconosciuta dalla Green Web Foundation per il suo impegno verso un web alimentato da energia più pulita.</p>
        </div>
        <aside className={styles.badgeCard} aria-label="Verifica dell’hosting">
          <p className={styles.cardEyebrow}>Hosting verificato</p>
          <a href={greenCheckUrl} target="_blank" rel="noopener noreferrer" aria-label="Apri la verifica dell’hosting sul sito della Green Web Foundation (nuova scheda)">
            {/* Il badge ufficiale è già un'immagine di 200 × 95 px servita dalla fondazione. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={badgeUrl} alt="Badge Green Web Foundation: verifica dell’hosting del sito Mitha Creative" width="200" height="95" decoding="async" />
          </a>
          <p>Il badge mostra il risultato del Green Web Check per il dominio su cui è pubblicato questo sito.</p>
        </aside>
      </header>

      <section className={styles.detail} aria-labelledby="hosting-title">
        <p className={styles.eyebrow}>01 / Hosting</p>
        <div>
          <h2 id="hosting-title">Un provider verificato.</h2>
          <p>La verifica effettuata il 1° ottobre 2026 ha identificato Cloudflare come provider di hosting riconosciuto come “green” dalla Green Web Foundation per <strong>{hostname}</strong>. Il risultato riguarda l’infrastruttura che serve questo dominio.</p>
          <a className={styles.textLink} href={greenCheckUrl} target="_blank" rel="noopener noreferrer">Consulta la verifica aggiornata <Icon icon="lucide:arrow-up-right" aria-hidden="true" /></a>
        </div>
      </section>

      <section className={styles.detail} aria-labelledby="resources-title">
        <p className={styles.eyebrow}>02 / Risorse</p>
        <div>
          <h2 id="resources-title">Meno peso da trasferire.</h2>
          <p>Abbiamo ridotto le dimensioni delle immagini del sito e convertito quelle usate nelle pagine in WebP. Le serviamo già ottimizzate, senza trasformarle a ogni richiesta. È un modo concreto per limitare i dati trasferiti durante la navigazione.</p>
        </div>
      </section>

      <aside className={styles.note} aria-labelledby="scope-title">
        <p className={styles.eyebrow}>Cosa indica il badge</p>
        <h2 id="scope-title">Una verifica dell’hosting, non dell’intero impatto del sito.</h2>
        <p>Il Green Web Check identifica un provider di hosting verificato nel suo dataset. Non misura le emissioni di ogni visita e non certifica che il sito sia a emissioni zero. Continueremo a curare prestazioni e risorse con la stessa attenzione.</p>
      </aside>
    </div>
  );
}
