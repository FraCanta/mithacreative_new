"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Cta2 from "../Cta/Cta2";

const crew = {
  alice: {
    name: "Alice Bolla",
    role: "Copywriter & Ads",
    image: "/assets/astronauta_copy.png",
  },
  miranda: {
    name: "Miranda Giaccon",
    role: "UX/UI Designer",
    image: "/assets/astronauta_ux.png",
  },
  elisa: {
    name: "Elisa Avantey",
    role: "Graphic Designer",
    image: "/assets/astrobranding.webp",
  },
  francesca: {
    name: "Francesca Cantale",
    role: "Web Developer",
    image: "/assets/astronauta_web.webp",
  },
};

const needs = [
  { id: "website", label: "Nuovo sito", crew: ["miranda", "francesca"], skills: ["UX/UI", "Web Design", "Development"] },
  { id: "brand", label: "Brand identity", crew: ["alice", "elisa"], skills: ["Brand Strategy", "Copywriting", "Graphic Design"] },
  { id: "uxui", label: "UX/UI", crew: ["miranda"], skills: ["UX Research", "UX/UI"] },
  { id: "copy", label: "Copy", crew: ["alice"], skills: ["Copywriting", "Content"] },
  { id: "ads", label: "Advertising", crew: ["alice"], skills: ["Advertising", "Campaign"] },
  { id: "ecommerce", label: "E-commerce", crew: ["miranda", "francesca"], skills: ["UX/UI", "E-commerce", "Development"] },
  { id: "restyling", label: "Restyling", crew: ["miranda", "francesca"], skills: ["UX Review", "UI", "Development"] },
  { id: "launch", label: "Lancio", crew: ["alice", "elisa", "francesca"], skills: ["Copy", "Visual", "Landing Page", "Development"] },
];

const crewOrder = ["alice", "miranda", "elisa", "francesca"];

export default function BuildYourCrew() {
  const [selected, setSelected] = useState([]);
  const [hovered, setHovered] = useState(null);

  const previewIds = hovered && !selected.includes(hovered) ? [...selected, hovered] : selected;
  const previewNeeds = needs.filter((need) => previewIds.includes(need.id));
  const activeCrew = useMemo(
    () => [...new Set(previewNeeds.flatMap((need) => need.crew))],
    [previewNeeds],
  );
  const selectedNeeds = needs.filter((need) => selected.includes(need.id));
  const selectedCrew = [...new Set(selectedNeeds.flatMap((need) => need.crew))];
  const selectedSkills = [...new Set(selectedNeeds.flatMap((need) => need.skills))];

  function toggleNeed(id) {
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  return (
    <section id="build-your-crew" className="section-space crew-builder" aria-labelledby="crew-builder-title">
      <div className="content-shell">
        <div className="crew-builder__heading">
          <div>
            <p className="eyebrow">Build your crew</p>
            <h2 id="crew-builder-title" className="section-title"><span>Ogni progetto richiede</span><span>una combinazione diversa.</span><span>Costruiamo la tua.</span></h2>
          </div>
          <p className="section-copy">Non scegli una persona. Parti dal progetto: la crew si costruisce intorno a ciò che serve davvero.</p>
        </div>

        <div className="crew-builder__grid">
          <div className="crew-builder__controls">
            <p className="crew-builder__intro">Seleziona ciò che ti serve e guarda come potrebbe comporsi la crew intorno al progetto.</p>
            <div className="crew-builder__chips" aria-label="Bisogni del progetto">
              {needs.map((need) => (
                <button
                  key={need.id}
                  type="button"
                  className="crew-chip"
                  aria-pressed={selected.includes(need.id)}
                  onClick={() => toggleNeed(need.id)}
                  onMouseEnter={() => setHovered(need.id)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(need.id)}
                  onBlur={() => setHovered(null)}
                >
                  {need.label}
                  <Icon icon={selected.includes(need.id) ? "lucide:check" : "lucide:plus"} aria-hidden="true" />
                </button>
              ))}
            </div>

            <div className="crew-builder__result" aria-live="polite">
              {selected.length > 0 ? (
                <>
                  <p className="crew-builder__label">La tua crew potrebbe essere</p>
                  <ul className="crew-builder__people">
                    {crewOrder.filter((id) => selectedCrew.includes(id)).map((id) => (
                      <li key={id}><strong>{crew[id].name}</strong><span>{crew[id].role}</span></li>
                    ))}
                  </ul>
                  <p className="crew-builder__label">Competenze coinvolte</p>
                  <p className="crew-builder__skills">{selectedSkills.join(" · ")}</p>
                  <p className="crew-builder__note">La composizione definitiva viene definita insieme dopo aver compreso obiettivi, priorità e complessità del progetto.</p>
                  <div className="crew-builder__actions">
                    <Cta2 link="/inizia-il-progetto" lightSurface>Raccontaci il progetto</Cta2>
                    <button type="button" className="crew-builder__reset" onClick={() => setSelected([])}>Azzera la selezione</button>
                  </div>
                </>
              ) : (
                <p className="crew-builder__empty"><Icon icon="lucide:orbit" aria-hidden="true" /> Seleziona una o più esigenze per comporre la crew.</p>
              )}
            </div>
          </div>

          <div className="crew-orbit" data-has-selection={previewIds.length > 0}>
            <svg className="crew-orbit__connections" viewBox="0 0 100 100" aria-hidden="true">
              <line className={activeCrew.includes("alice") ? "is-active" : ""} x1="50" y1="50" x2="23" y2="23" />
              <line className={activeCrew.includes("miranda") ? "is-active" : ""} x1="50" y1="50" x2="77" y2="23" />
              <line className={activeCrew.includes("elisa") ? "is-active" : ""} x1="50" y1="50" x2="23" y2="77" />
              <line className={activeCrew.includes("francesca") ? "is-active" : ""} x1="50" y1="50" x2="77" y2="77" />
            </svg>
            <div className="crew-orbit__core"><span>Mitha</span><small>core</small></div>
            {crewOrder.map((id) => (
              <figure key={id} className={`crew-orbit__member crew-orbit__member--${id} ${activeCrew.includes(id) ? "is-active" : ""}`}>
                <div className="crew-orbit__asset"><Image src={crew[id].image} alt="" fill sizes="(min-width: 1024px) 24vw, 46vw" /></div>
                <figcaption><strong>{crew[id].name.split(" ")[0]}</strong><span>{crew[id].role}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
