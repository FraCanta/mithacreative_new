"use client";

import React from "react";
import HeroIntro from "./HeroIntro";
import styles from "./hero-intro.module.css";
import { useHeroIntro } from "./useHeroIntro";
import { motion, useReducedMotion } from "framer-motion";
import Astronauta from "@/public/assets/astrobranding2.webp";
import Image from "next/image";

function Hero() {
  const reduceMotion = useReducedMotion();
  const { phase, flights, sourceRef, titleRef, finish } = useHeroIntro();
  const active = phase !== "done";
  const imageVisible = ["image", "details", "menu", "done"].includes(phase);
  const detailsVisible = ["details", "menu", "done"].includes(phase);
  const detailMotion = (index) => ({
    initial: false,
    animate: { opacity: detailsVisible ? 1 : 0, y: detailsVisible ? 0 : 16 },
    transition: {
      duration: active ? 0.45 : 0,
      delay: phase === "details" ? index * 0.18 : 0,
    },
  });
  return (
    <div className="mitha-hero relative flex flex-col items-center justify-center w-[90%] mx-auto lg:min-h-[calc(90vh_-_100px)] min-h-[calc(90vh_-_80px)] 2xla:min-h-[calc(100vh_-_100px)]">
      <HeroIntro
        phase={phase}
        flights={flights}
        sourceRef={sourceRef}
        onTravelComplete={finish.travel}
      />
      {/* Sezione con il testo e l'immagine */}
      <div className="relative flex flex-col items-center justify-center w-full my-4 lg:my-8 2xla:my-14">
        <h1
          ref={titleRef}
          aria-label="WE MAKE CREATIVE THINGS EVERYDAY"
          className={`${styles.title} text-primary dark:text-white text-[clamp(4.2rem,10vw,70px)] md:text-[110px] 2xla:text-[138px] font-bold flex flex-col justify-between h-full relative leading-[1.3]`}
        >
          <span
            aria-hidden="true"
            className="flex justify-center w-full gap-x-4 lg:gap-x-48"
          >
            <span data-hero-word="we">WE</span>
            <span data-hero-word="make">MAKE</span>
          </span>
          <span
            aria-hidden="true"
            className="flex justify-center leading-[0.7] lg:gap-x-48"
          >
            <span data-hero-word="cre" className="hidden text-right lg:block">
              CRE
            </span>
            <span data-hero-word="ative" className="hidden lg:block">
              ATIVE
            </span>
            <span className="flex mb-32 lg:hidden">
              <span data-hero-word="cre">CRE</span>
              <span data-hero-word="ative">ATIVE</span>
            </span>
          </span>

          <span
            aria-hidden="true"
            className="flex flex-wrap justify-center mt-20 lg:mt-0 leading-[1] gap-x-32"
          >
            {" "}
            <span data-hero-word="things">THINGS</span>
            <span data-hero-word="everyday">EVERYDAY</span>
          </span>
        </h1>

        {/* Immagine posizionata assolutamente sopra l'H1 */}
        <motion.div
          initial={false}
          animate={{ opacity: imageVisible ? 1 : 0 }}
          transition={{ duration: active ? 0.6 : 0 }}
          className={`${styles.image} absolute z-10 flex items-center justify-center w-full h-full overflow-hidden -translate-y-1/2 lg:-left-12 top-1/2 lg:overflow-visible`}
        >
          <motion.div
            className="flex justify-center w-full max-w-[600px]"
            animate={
              imageVisible && !reduceMotion ? { y: [0, -12, 0] } : { y: 0 }
            }
            transition={
              imageVisible && !reduceMotion
                ? { duration: 5, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0 }
            }
          >
            <Image
              priority
              src={Astronauta}
              width={600}
              height={600}
              alt="Astronauta"
              className="rotate-[25deg] overflow-hidden xl:w-[450px] 2xla:w-[600px]  2xl:w-[450px] object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Sezione separata con paragrafo e bottone */}
      <div
        className={`${styles.details} grid justify-between w-full grid-cols-1 my-8 gap-y-10 lg:gap-10 2xla:my-10 lg:grid-cols-3`}
      >
        <motion.div {...detailMotion(0)} className="flex flex-col">
          {/* Paragrafo */}
          <p className="max-w-2xl mb-6 lg:text-lg 2xl:text-lg text-primary dark:text-white">
            Supportiamo liberi professionisti, artigiani, piccole aziende e
            startup a definire chiaramente i loro obiettivi attraverso lo
            sviluppo di identità visive e siti web responsive.
          </p>
        </motion.div>
        <div></div>

        {/* Dati di completamento progetti */}
        <div className="flex justify-end">
          <motion.div
            {...detailMotion(1)}
            className="flex flex-col w-full gap-2 lg:gap-4 text-primary dark:text-white"
          >
            <h2 className="font-bold text-7xl">40+</h2>
            <p className="text-sm xl:text-lg text-primary/80 dark:text-white/80">
              Progetti creativi
            </p>
          </motion.div>
          <motion.div
            {...detailMotion(2)}
            className="flex flex-col w-full gap-2 lg:gap-4 text-primary dark:text-white"
          >
            <h2 className="font-bold text-7xl">10+</h2>
            <p className="text-sm xl:text-lg text-primary/80 dark:text-white/80">
              Anni di esperienza
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
