"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Cta2 from "./components/Cta/Cta2";
import Hero from "./components/Hero/Hero";
import BuildYourCrew from "./components/BuildYourCrew/BuildYourCrew";

import { missions } from "./servizi/missions";

export default function PageClient() {
  return (
    <>
      <Hero />
      <section
        className="section-space mission-section"
        aria-labelledby="missions-title"
      >
        <div className="content-shell">
          <div className="section-heading mission-heading">
            <div>
              <h2 id="missions-title" className="mission-title">
                Scegli la tua missione
              </h2>
              <p className="section-copy">
                Ogni progetto ha un punto di partenza. Qual è il tuo?
              </p>
            </div>
            <Cta2 link="/servizi">Scopri tutti i servizi</Cta2>
          </div>
          <div className="mission-grid">
            {missions.map(({ title, need, image, slug }) => (
              <Link className="mission-card" key={title} href={`/servizi/${slug}`} aria-label={`Scopri ${title}: ${need}`}>
                <div className="mission-card__image">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                  />
                </div>
                <div className="mission-card__body">
                  <div className="mission-card__copy">
                    <h3>{title}</h3>
                    <p>{need}</p>
                  </div>
                  <span className="mission-arrow" aria-hidden="true">
                    <Icon icon="mdi:arrow-right" width="18" height="18" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <BuildYourCrew />
      <section
        className="section-space team-section"
        aria-labelledby="team-title"
      >
        <div className="content-shell team-layout">
          <div className="team-visual">
            <div className="team-orbit-image">
              <Image
                src="/assets/freelance_orbit.webp"
                alt="Quattro astronauti riuniti attorno a un pianeta viola"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="team-handnote" aria-hidden="true">
              <span>FOUR</span>
              <span>CREATIVES</span>
              <span>ONE</span>
              <span>MISSION</span>
              <Icon icon="mdi:arrow-top-right" width="44" height="44" />
            </div>
          </div>
          <div className="team-copy">
            <p className="eyebrow">Il team</p>
            <h2 id="team-title" className="section-title">
              Quattro specialiste,
              <br />
              una visione condivisa.
            </h2>
            <p className="section-copy">
              Siamo Alice, Miranda, Elisa e Francesca. Designer, sviluppatrici,
              illustratrici, strategist. Ci uniscono la passione per le idee ben
              fatte, la libertà di lavorare in modo flessibile e la voglia di
              collaborare con persone curiose e ambiziose.
            </p>
            <Cta2 link="/chi-siamo">Conosci la squadra</Cta2>
            <div className="team-collaboration"><p><strong>Sei un freelance?</strong><br />La crew può partire anche dal tuo progetto.</p><Link href="/collabora-con-noi">Collabora con Mitha <Icon icon="lucide:arrow-right" aria-hidden="true" /></Link></div>
            <ul className="team-points">
              <li>
                <Icon icon="lucide:sparkles" aria-hidden="true" />
                <span>
                  Esperienza senior
                  <br />e trasversale
                </span>
              </li>
              <li>
                <Icon icon="lucide:users-round" aria-hidden="true" />
                <span>
                  Team su misura
                  <br />
                  per ogni progetto
                </span>
              </li>
              <li>
                <Icon icon="lucide:heart" aria-hidden="true" />
                <span>
                  Approccio umano
                  <br />e diretto
                </span>
              </li>
              <li>
                <Icon icon="lucide:zap" aria-hidden="true" />
                <span>
                  Creatività con
                  <br />
                  obiettivi reali
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="final-cta__visual" aria-hidden="true" />
        <div className="final-cta__content content-shell">
          <p className="eyebrow">Una nuova orbita per le tue idee</p>
          <h2 id="final-cta-title">Ready for launch?</h2>
          <p>
            Parlaci del tuo progetto. Troviamo insieme la soluzione giusta per
            farlo andare lontano.
          </p>
          <Cta2 link="/inizia-il-progetto" lightSurface>
            Inizia il progetto
          </Cta2>
        </div>
      </section>
    </>
  );
}
