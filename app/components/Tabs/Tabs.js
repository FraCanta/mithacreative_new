"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { slideUp } from "@/app/servizi/animation";
import { opacity } from "./animation";

let tabs = [
  { id: "all", label: "Tutti" },
  { id: "graphic", label: "Graphic Design" },
  { id: "web", label: "Web Design" },
];

const cardsData = [
  {
    id: 1,
    title: "Card 1",
    description: "Descrizione per la card 1",
    category: "graphic",
  },
  {
    id: 2,
    title: "Card 2",
    description: "Descrizione per la card 2",
    category: "graphic",
  },
  {
    id: 3,
    title: "Card 3",
    description: "Descrizione per la card 3",
    category: "graphic",
  },
  {
    id: 4,
    title: "Card 4",
    description: "Descrizione per la card 4",
    category: "web",
  },
  {
    id: 5,
    title: "Card 5",
    description: "Descrizione per la card 5",
    category: "web",
  },
  {
    id: 6,
    title: "Card 6",
    description: "Descrizione per la card 6",
    category: "web",
  },
];

function Tabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  // Filtra le card in base al tab attivo
  const filteredCards =
    activeTab === "all"
      ? cardsData
      : cardsData.filter((card) => card.category === activeTab);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="enter"
      className="w-[90%] mx-auto flex flex-col items-center "
    >
      <motion.div
        variants={opacity}
        initial="initial"
        animate="enter"
        className="flex justify-center w-full mb-6 space-x-4"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "dark:text-primary text-white" : ""
            } relative rounded-full px-3 py-1.5 lg:text-lg font-medium dark:text-white text-primary outline-primary transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-primary dark:bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </motion.div>

      <motion.div
        variants={opacity}
        initial="initial"
        animate="enter"
        className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
      >
        {filteredCards.map((card) => (
          <motion.div
            variants={opacity}
            initial="initial"
            animate="enter"
            key={card.id}
            className="overflow-hidden rounded-lg shadow-lg dark:bg-white bg-primary"
          >
            <img
              src="https://via.placeholder.com/300" // Segnaposto immagine
              alt={`Placeholder ${card.id}`}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-white dark:text-primary">
                {card.title}
              </h3>
              <p className="text-white dark:text-primary">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Tabs;
