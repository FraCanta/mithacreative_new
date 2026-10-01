import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { notFound } from "next/navigation";
import Cta2 from "../../components/Cta/Cta2";
import { missions, missionDetails } from "../missions";
import styles from "./mission.module.css";

const crewProfiles = {
  Alice: { name: "Alice Bolla", role: "Copywriter & Ads", image: "/assets/Alice_Bolla_astronauta.webp", accent: "coral" },
  Miranda: { name: "Miranda Giaccon", role: "UX/UI Designer", image: "/assets/Miranda_Giaccon_astronauta.webp", accent: "lilac" },
  Elisa: { name: "Elisa Avantey", role: "Graphic Designer", image: "/assets/Elisa_Avantey_astronauta.webp", accent: "violet" },
  Francesca: { name: "Francesca Cantale", role: "Web Developer", image: "/assets/Francesca_Cantale_astronauta.webp", accent: "orange" },
};

export function generateStaticParams() {
  return missions.map(({ slug }) => ({ missione: slug }));
}

export function generateMetadata({ params }) {
  const mission = missions.find(({ slug }) => slug === params.missione);
  if (!mission) return {};
  return {
    title: `${mission.title} | Mitha Creative`,
    description: `${mission.need} ${mission.summary}`,
  };
}

export default function MissionPage({ params }) {
  const missionIndex = missions.findIndex(({ slug }) => slug === params.missione);
  if (missionIndex < 0) notFound();
  const mission = missions[missionIndex];
  const detail = missionDetails[mission.slug];

  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="Percorso">
        <ol>
          <li><Link href="/servizi"><Icon icon="lucide:arrow-left" width="16" height="16" aria-hidden="true" />Servizi</Link></li>
          <li aria-current="page">{mission.title}</li>
        </ol>
      </nav>

      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Missione 0{missionIndex + 1} / Mitha Creative</p>
          <h1>{mission.title}</h1>
          <p className={styles.need}>{mission.need}</p>
          <p className={styles.intro}>{detail.intro}</p>
          <Cta2 link="/contatti">Raccontaci il progetto</Cta2>
        </div>
        <div className={styles.heroVisual}>
          <Image src={mission.image} alt="" fill priority sizes="(min-width: 900px) 46vw, 90vw" />
        </div>
      </header>

      <section className={styles.fit} aria-labelledby="quando-sceglierla">
        <p className={styles.eyebrow}>Quando partire da qui</p>
        <h2 id="quando-sceglierla">{detail.fit}</h2>
      </section>

      <section className={styles.capabilities} aria-labelledby="cosa-puo-includere">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>La missione prende forma</p>
          <h2 id="cosa-puo-includere">Cosa può<br /><span>includere.</span></h2>
          <p>Le attività vengono scelte in base al progetto. Queste sono le aree che possiamo valutare insieme.</p>
        </div>
        <div className={styles.groupGrid}>
          {detail.groups.map((group, index) => (
            <div className={styles.group} key={group.title}>
              <p className={styles.groupNumber}>0{index + 1}</p>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      {mission.slug === "launch-mission" && (
        <aside className={styles.example} aria-label="Esempio di Launch Mission">
          <p className={styles.eyebrow}>Un esempio concreto</p>
          <p>Una nuova linea di cosmetici: la domanda iniziale è <em>come portarla sul mercato</em>, non quale singolo servizio acquistare.</p>
        </aside>
      )}

      <section className={styles.outcome} aria-labelledby="risultato-missione">
        <p className={styles.eyebrow}>Il risultato atteso</p>
        <h2 id="risultato-missione">Dove arriviamo.</h2>
        <ol className={styles.milestones}>
          {detail.milestones.map((milestone, index) => <li key={milestone}><span>0{index + 1}</span>{milestone}</li>)}
        </ol>
        <p className={styles.outcomeDescription}>{detail.result}</p>
      </section>

      <section className={styles.crew} aria-labelledby="crew-missione">
        <div className={styles.crewCopy}>
          <p className={styles.eyebrow}>Le persone, secondo il progetto</p>
          <h2 id="crew-missione">Una squadra<br /><span>su misura.</span></h2>
          <p>{detail.crew}</p>
        </div>
        <ul className={styles.crewList} aria-label="Professioniste che possono essere coinvolte">
          {detail.crewMembers.map((key) => {
            const person = crewProfiles[key];
            return <li className={styles[person.accent]} key={key}>
              <div className={styles.personImage}><Image src={person.image} alt="" fill sizes="(min-width: 900px) 12vw, 38vw" /></div>
              <div><strong>{person.name}</strong><span>{person.role}</span></div>
            </li>;
          })}
        </ul>
      </section>

      <section className={styles.next} aria-labelledby="prossima-rotta">
        <div>
          <p className={styles.eyebrow}>Il percorso può continuare</p>
          <h2 id="prossima-rotta">E dopo?</h2>
          <p>{detail.next}</p>
          {mission.slug === "orbit-check" && (
            <ol className={styles.options}>
              <li>Fermarti all’analisi.</li>
              <li>Applicare autonomamente le indicazioni.</li>
              <li>Affidare a Mitha gli interventi attraverso la missione più pertinente.</li>
            </ol>
          )}
        </div>
        <nav className={styles.related} aria-label="Esplora altre missioni">
          {detail.related.map((slug) => {
            const related = missions.find((item) => item.slug === slug);
            return <Link key={slug} href={`/servizi/${slug}`}>{related.title}<span className={styles.relatedArrow} aria-hidden="true"><Icon icon="lucide:arrow-right" width="18" height="18" /></span></Link>;
          })}
        </nav>
      </section>

      <section className={styles.closing} aria-labelledby="parliamo-missione">
        <p className={styles.eyebrow}>La prossima mossa</p>
        <h2 id="parliamo-missione">Raccontaci cosa ti serve.</h2>
        <p>Partiamo dal tuo bisogno e capiamo insieme quale squadra coinvolgere.</p>
        <Cta2 link="/contatti" lightSurface>Raccontaci il progetto</Cta2>
      </section>
    </div>
  );
}
