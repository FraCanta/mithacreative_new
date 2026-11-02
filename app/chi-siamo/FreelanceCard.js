"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import styles from "./about.module.css";

const socialProfiles = [
  ["facebook", "Facebook", "mdi:facebook"],
  ["instagram", "Instagram", "mdi:instagram"],
  ["linkedin", "LinkedIn", "mdi:linkedin"],
  ["website", "Sito web", "mdi:web"],
];

export default function FreelanceCard({ person, compact = false, showSocials = true }) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <article className={`${styles.personCard} ${styles[person.accent]}${compact ? ` ${styles.compact}` : ""}${isRevealed ? ` ${styles.isRevealed}` : ""}`}>
      <div className={styles.personImage}>
        <Image className={styles.astronautImage} src={person.image} alt="" fill sizes="(min-width: 900px) 22vw, (min-width: 600px) 44vw, 88vw" />
        <Image className={styles.realImage} src={person.realImage} alt="" fill sizes="(min-width: 900px) 22vw, (min-width: 600px) 44vw, 88vw" />
      </div>
      <div className={styles.personInfo}>
        <h3>{person.name}</h3>
        <p>{person.role}</p>
        {showSocials && (
          <div className={styles.socialLinks} aria-label={`Link social di ${person.name}`}>
              {socialProfiles.filter(([key]) => person.socials?.[key]).map(([key, label, icon]) => (
                <a key={key} className={styles.socialLink} href={person.socials[key]} aria-label={`${label} di ${person.name}`} target="_blank" rel="noopener noreferrer">
                  <Icon icon={icon} width="20" height="20" />
                </a>
              ))}
          </div>
        )}
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
