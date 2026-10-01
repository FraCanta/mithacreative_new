import Image from "next/image";
import Cta2 from "../Cta/Cta2";
import { missions } from "../../servizi/missions";
import styles from "../../servizi/services.module.css";

const orbit = missions[3];

function MissionCopy({ mission, number }) {
  return (
    <div className={styles.missionCopy}>
      <p className={styles.missionNumber}>0{number} / {mission.title}</p>
      <h3>{mission.need}</h3>
      <p>{mission.summary}</p>
      <Cta2 link={`/servizi/${mission.slug}`}>Esplora {mission.title}</Cta2>
    </div>
  );
}

export default function Tabs() {
  return (
    <section id="missioni" className={styles.missions} aria-labelledby="missioni-title">
      <div className={styles.sectionHeading}>
        <p className={styles.eyebrow}>Scegli il punto di partenza</p>
        <h2 id="missioni-title">Qual è la tua<br /><span>missione?</span></h2>
      </div>

      <div className={styles.missionLayout}>
        {missions.slice(0, 3).map((mission, index) => (
          <article className={styles.missionCard} key={mission.slug}>
            <div className={styles.missionVisual}>
              <Image src={mission.image} alt="" fill sizes="(min-width: 900px) 30vw, 90vw" />
            </div>
            <MissionCopy mission={mission} number={index + 1} />
          </article>
        ))}
      </div>

      <article className={styles.orbitMission}>
        <div className={styles.orbitVisual}>
          <Image src={orbit.image} alt="" fill sizes="(min-width: 900px) 40vw, 90vw" />
        </div>
        <div className={styles.orbitCopy}>
          <p className={styles.missionNumber}>04 / {orbit.title}</p>
          <h3>{orbit.need}</h3>
          <p>{orbit.summary}</p>
          <Cta2 link={`/servizi/${orbit.slug}`} ariaLabel={`Esplora ${orbit.title}`} lightSurface>Esplora {orbit.title}</Cta2>
        </div>
      </article>
    </section>
  );
}
