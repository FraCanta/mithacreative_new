"use client";

import { useState } from "react";
import Image from "next/image";
import Cta2 from "../Cta/Cta2";
import styles from "../../servizi/services.module.css";

const filters = [
  { id: "all", label: "Tutti i servizi" },
  { id: "graphic", label: "Graphic design" },
  { id: "web", label: "Web design" },
];

const services = [
  { id: "logo-design", title: "Logo & brand identity", category: "graphic", image: "/assets/logo1.webp", description: "Un’identità visiva riconoscibile, dal logo ai colori e agli elementi che raccontano il tuo brand." },
  { id: "packaging", title: "Packaging & label", category: "graphic", image: "/assets/pack1.webp", description: "Confezioni ed etichette pensate per valorizzare i tuoi prodotti e dare continuità alla tua identità." },
  { id: "illustrazioni", title: "Illustrazioni", category: "graphic", image: "/assets/illu4.webp", description: "Immagini e grafiche su misura per dare carattere alla tua comunicazione, online e su carta." },
  { id: "siti-web", title: "Siti web su misura", category: "web", image: "/assets/miao_cover2.jpg", description: "Siti responsive che presentano la tua attività e accompagnano le persone verso le informazioni che cercano." },
  { id: "ecommerce", title: "E-commerce", category: "web", image: "/assets/lescretes.jpg", description: "Un negozio online con un percorso d’acquisto chiaro, dalla scoperta del prodotto al checkout." },
  { id: "blog", title: "Blog & contenuti", category: "web", image: "/assets/anna.jpg", description: "Uno spazio per raccontare il tuo lavoro, organizzare i contenuti e rendere piacevole la lettura." },
];

export default function Tabs() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filtered = services.filter((service) => activeFilter === "all" || service.category === activeFilter);
  return (
    <section aria-label="Esplora i nostri servizi">
      <div className={styles.toolbar}>
        <div className={styles.filters} role="group" aria-label="Filtra i servizi">
          {filters.map((filter) => (
            <button key={filter.id} type="button" aria-pressed={activeFilter === filter.id} aria-controls="elenco-servizi" onClick={() => setActiveFilter(filter.id)} className={styles.filter}>
              {filter.label}
            </button>
          ))}
        </div>
        <p role="status" className={styles.count}>{filtered.length} servizi · Un unico team creativo</p>
      </div>
      <div id="elenco-servizi" className={styles.grid}>
        {filtered.map((service) => (
          <article id={service.id} key={service.id} className={styles.card}>
            <div className={styles.image}>
              <Image src={service.image} alt={`Esempio creativo: ${service.title}`} fill sizes="(min-width: 768px) 53vw, 90vw" />
            </div>
            <div className={styles.content}>
              <p className={styles.category}>{service.category === "graphic" ? "Identità & comunicazione" : "Esperienze digitali"}</p>
              <h2>{service.title}</h2>
              <p className={styles.summary}>{service.description}</p>
              <div className={styles.cardAction}><Cta2 link="/inizia-il-progetto" ariaLabel={`Parliamo del tuo progetto: ${service.title}`}>Parliamo del progetto</Cta2></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}