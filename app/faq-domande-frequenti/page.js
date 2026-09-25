import Cta2 from "../components/Cta/Cta2";
import styles from "./faq.module.css";

export const metadata = {
  title: "Domande frequenti | Mitha Creative",
  description: "Servizi, costi indicativi, tempi e modalità di lavoro: le risposte alle domande più frequenti su siti web, e-commerce e consulenze Mitha Creative.",
};

const groups = [
  {
    id: "servizi",
    title: "Servizi",
    description: "Cosa possiamo fare per il tuo progetto.",
    questions: [
      {
        question: "Di quali servizi vi occupate?",
        answer: "Realizziamo siti web responsive ed e-commerce e offriamo consulenze. Con le nostre collaboratrici ci occupiamo anche di branding, loghi, identità visive, copywriting e social media.",
      },
      {
        question: "Vi occupate anche di SEO?",
        answer: "Per una strategia SEO dedicata ci affidiamo a professionisti specializzati. Possiamo valutare insieme il supporto adatto alle esigenze del tuo progetto.",
      },
    ],
  },
  {
    id: "costi",
    title: "Costi",
    description: "Un punto di partenza per orientarti.",
    questions: [
      {
        question: "Quanto costa un sito web?",
        answer: "I prezzi partono da 1.500 € per un sito personalizzato one page e da 2.000 € per un sito vetrina. Il costo dipende dalle caratteristiche e dalle esigenze del progetto.",
      },
      {
        question: "Quanto costa un e-commerce?",
        answer: "Il prezzo base parte da 2.800 € e varia in funzione delle funzionalità richieste.",
      },
      {
        question: "Posso richiedere una consulenza UX/UI?",
        answer: "Sì, offriamo consulenze UX/UI a partire da 160 € per sessione. Contattaci per raccontarci su cosa vorresti lavorare.",
      },
    ],
  },
  {
    id: "collaborazione",
    title: "Tempi e collaborazione",
    description: "Come lavoriamo, dal primo confronto al lancio.",
    questions: [
      {
        question: "Come si svolge un progetto?",
        answer: "Partiamo da un briefing per conoscere obiettivi ed esigenze. Seguono le fasi di ricerca, design, sviluppo e lancio.",
      },
      {
        question: "Quanto tempo serve per un sito vetrina?",
        answer: "Generalmente servono dalle 4 alle 8 settimane. Le tempistiche dipendono dalle caratteristiche del progetto.",
      },
      {
        question: "Fate manutenzione su siti realizzati da altri?",
        answer: "Valutiamo ogni caso singolarmente. Raccontaci di quale sito si tratta e di che tipo di intervento hai bisogno, così possiamo capire come aiutarti.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>FAQ / Facciamo chiarezza</p>
          <h1>Le tue domande.<br /><span>Le nostre risposte.</span></h1>
        </div>
        <p className={styles.intro}>Quanto costa un sito? Da dove si comincia? Qui trovi le informazioni per fare il prossimo passo con più tranquillità.</p>
      </header>

      <nav className={styles.topics} aria-label="Argomenti delle domande frequenti">
        <span className={styles.topicsLabel}>Vai all’argomento</span>
        <div className={styles.topicLinks}>
          {groups.map(({ id, title }) => <a key={id} href={`#${id}`}>{title}<span aria-hidden="true">↘</span></a>)}
        </div>
      </nav>

      <div className={styles.groups}>
        {groups.map(({ id, title, description, questions }, index) => (
          <section key={id} id={id} className={styles.group} aria-labelledby={`${id}-titolo`}>
            <div className={styles.groupIntro}>
              <p className={styles.eyebrow}>0{index + 1}</p>
              <h2 id={`${id}-titolo`}>{title}</h2>
              <p>{description}</p>
            </div>
            <div className={styles.questions}>
              {questions.map(({ question, answer }) => (
                <details key={question} className={styles.question}>
                  <summary>
                    <h3>{question}</h3>
                    <span className={styles.toggle} aria-hidden="true" />
                  </summary>
                  <div className={styles.answer}><p>{answer}</p></div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className={styles.contact} aria-labelledby="altre-domande">
        <div>
          <p className={styles.eyebrow}>Ogni progetto ha le sue domande</p>
          <h2 id="altre-domande">Non trovi la tua risposta?</h2>
          <p>Raccontaci di cosa hai bisogno. Partiamo da lì.</p>
        </div>
        <Cta2 link="/contatti" lightSurface>Parliamone</Cta2>
      </section>

      <div className="elfsight-app-b68ae609-c6be-4d9b-9ab6-39ecfb20871e" data-elfsight-app-lazy />
    </div>
  );
}
