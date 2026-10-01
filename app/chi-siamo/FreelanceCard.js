"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import styles from "./about.module.css";

export default function FreelanceCard({ person }) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <article className={`${styles.personCard} ${styles[person.accent]}${isRevealed ? ` ${styles.isRevealed}` : ""}`}>
      <div className={styles.personImage}>
        <Image className={styles.astronautImage} src={person.image} alt="" fill sizes="(min-width: 900px) 22vw, (min-width: 600px) 44vw, 88vw" />
        <Image className={styles.realImage} src={person.realImage} alt="" fill sizes="(min-width: 900px) 22vw, (min-width: 600px) 44vw, 88vw" />
      </div>
      <div className={styles.personInfo}>
        <h3>{person.name}</h3>
        <p>{person.role}</p>
        <div className={styles.socialLinks} aria-label={`Link social di ${person.name}`}>
          <a className={styles.socialLinkDisabled} href="#" aria-label={`Instagram di ${person.name}`} aria-disabled="true" tabIndex={-1}><Icon icon="mdi:instagram" width="20" height="20" /></a>
          <a className={styles.socialLinkDisabled} href="#" aria-label={`LinkedIn di ${person.name}`} aria-disabled="true" tabIndex={-1}><Icon icon="mdi:linkedin" width="20" height="20" /></a>
          <a className={styles.socialLinkDisabled} href="#" aria-label={`Sito web di ${person.name}`} aria-disabled="true" tabIndex={-1}><Icon icon="mdi:web" width="20" height="20" /></a>
        </div>
      </div>
      <button
        type="button"
        className={styles.personToggle}
        aria-label={`${isRevealed ? "Mostra l’astronauta" : "Mostra il volto"} di ${person.name}`}
        aria-pressed={isRevealed}
        onClick={() => setIsRevealed((revealed) => !revealed)}
      />
    </article>
  );
}
