"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Cta2 from "../Cta/Cta2";

const crew = {
  alice: {
    name: "Alice Bolla",
    role: "Copywriter & Ads",
    image: "/assets/Alice_Bolla_astronauta.png",
  },
  miranda: {
    name: "Miranda Giaccon",
    role: "UX/UI Designer",
    image: "/assets/Miranda_Giaccon_astronauta.png",
  },
  elisa: {
    name: "Elisa Avantey",
    role: "Graphic Designer",
    image: "/assets/Elisa_Avantey_astronauta.png",
  },
  francesca: {
    name: "Francesca Cantale",
    role: "Web Developer",
    image: "/assets/Francesca_Cantale_astronauta.png",
  },
};

const needs = [
  { id: "website", label: "Nuovo sito", crew: ["miranda", "francesca"], skills: ["UX/UI", "Web Design", "Development"] },
  { id: "brand", label: "Brand identity", crew: ["alice", "elisa"], skills: ["Brand Strategy", "Copywriting", "Graphic Design"] },
  { id: "uxui", label: "UX/UI", crew: ["miranda"], skills: ["UX Research", "UX/UI"] },
  { id: "copy", label: "Copy", crew: ["alice"], skills: ["Copywriting", "Content"] },
  { id: "ads", label: "Advertising", crew: ["alice"], skills: ["Advertising", "Campaign"] },
  { id: "ecommerce", label: "E-commerce", crew: ["miranda", "francesca"], skills: ["UX/UI", "E-commerce", "Development"] },
  { id: "restyling", label: "Restyling", crew: ["miranda", "elisa"], skills: ["UX Review", "UI"] },
  { id: "launch", label: "Lancio", crew: ["alice", "elisa"], skills: ["Copy", "Visual", "Landing Page"] },
];

const crewOrder = ["alice", "miranda", "elisa", "francesca"];

export default function BuildYourCrew() {
  const [selected, setSelected] = useState([]);
  const selectedNeeds = needs.filter((need) => selected.includes(need.id));
  const selectedCrew = useMemo(
    () => [...new Set(selectedNeeds.flatMap((need) => need.crew))],
    [selectedNeeds],
  );
  const selectedSkills = [...new Set(selectedNeeds.flatMap((need) => need.skills))];

  function toggleNeed(id) {
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  return (
    <section id="build-your-crew" className="section-space crew-builder" aria-labelledby="crew-builder-title">
      <div className="content-shell">
        <div className="crew-builder__grid">
          <div className="crew-builder__copy">
            <div className="crew-builder__heading">
              <div>
                <p className="eyebrow">Build your crew</p>
                <h2 id="crew-builder-title" className="section-title"><span>Ogni progetto richiede</span><span>una combinazione diversa.</span><span>Costruiamo la tua.</span></h2>
              </div>
              <p className="section-copy">Mitha è una rete di quattro freelance indipendenti: selezioniamo le competenze necessarie per ogni progetto, così ottieni la crew giusta, senza complicazioni.</p>
            </div>

            <div className="crew-builder__controls">
            <div className="crew-builder__chips" aria-label="Bisogni del progetto">
              {needs.map((need) => (
                <button
                  key={need.id}
                  type="button"
                  className="crew-chip"
                  aria-pressed={selected.includes(need.id)}
                  onClick={() => toggleNeed(need.id)}
                >
                  {need.label}
                  <Icon icon={selected.includes(need.id) ? "lucide:check" : "lucide:plus"} aria-hidden="true" />
                </button>
              ))}
            </div>

            <div className="crew-builder__result" aria-live="polite">
              {selected.length > 0 ? (
                <div key={selected.join("-")} className="crew-builder__result-content">
                  <p className="crew-builder__label">La tua crew potrebbe essere</p>
                  <ul className="crew-builder__people">
                    {crewOrder.filter((id) => selectedCrew.includes(id)).map((id) => (
                      <li key={id}><strong>{crew[id].name}</strong><span>{crew[id].role}</span></li>
                    ))}
                  </ul>
                  <p className="crew-builder__label">Competenze coinvolte</p>
                  <div className="crew-builder__skills" aria-label="Competenze coinvolte">
                    {selectedSkills.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                  <p className="crew-builder__note">La composizione definitiva viene definita insieme dopo aver compreso obiettivi, priorità e complessità del progetto.</p>
                  <div className="crew-builder__actions">
                    <Cta2 link="/inizia-il-progetto" lightSurface>Raccontaci il progetto</Cta2>
                    <button type="button" className="crew-builder__reset" onClick={() => setSelected([])}>Azzera la selezione</button>
                  </div>
                </div>
              ) : (
                <p key="empty" className="crew-builder__empty crew-builder__result-content"><Icon icon="lucide:orbit" aria-hidden="true" /> Seleziona una o più esigenze per comporre la crew.</p>
              )}
            </div>
            </div>
          </div>

          <div className="crew-visual" aria-label="Composizione orbitale della crew" aria-live="polite">
            <div key={selected.join("-") || "empty"} className={`crew-orbit-composition${selected.length ? " has-selection" : ""}`}>
              <div className="crew-orbit-layer crew-orbit-layer--outer">
                <Image src="/assets/orbita_esterna.svg" alt="" fill sizes="(min-width: 768px) 42vw, 92vw" />
                <span className="crew-orbit-satellite crew-orbit-satellite--outer" aria-hidden="true" />
                <span className="crew-orbit-satellite crew-orbit-satellite--outer-secondary" aria-hidden="true" />
              </div>
              <div className="crew-orbit-layer crew-orbit-layer--middle">
                <Image src="/assets/orbita_centrale.svg" alt="" fill sizes="(min-width: 768px) 38vw, 84vw" />
                <span className="crew-orbit-satellite crew-orbit-satellite--middle" aria-hidden="true" />
                <span className="crew-orbit-satellite crew-orbit-satellite--middle-secondary" aria-hidden="true" />
              </div>
              <div className="crew-orbit-layer crew-orbit-layer--inner">
                <Image src="/assets/orbita_interna.svg" alt="" fill sizes="(min-width: 768px) 32vw, 76vw" />
                <span className="crew-orbit-satellite crew-orbit-satellite--inner" aria-hidden="true" />
                <span className="crew-orbit-satellite crew-orbit-satellite--inner-secondary" aria-hidden="true" />
              </div>
              <div className="crew-orbit-core"><Image src="/assets/pianeta_centrale_con_logo.png" alt="Pianeta Mitha" fill sizes="(min-width: 768px) 14vw, 30vw" /></div>
              {crewOrder.map((id, index) => (
                <figure key={id} className={`crew-orbit-member crew-orbit-member--${id} ${selectedCrew.includes(id) ? "is-active" : ""}`}>
                  <Image src={crew[id].image} alt={`${crew[id].name}, ${crew[id].role}`} fill sizes="(min-width: 768px) 13vw, 27vw" />
                  <figcaption><strong>{crew[id].name.split(" ")[0]}</strong><span>{crew[id].role}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
