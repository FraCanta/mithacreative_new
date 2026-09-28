"use client";

import React from "react";
import HeroIntro from "./HeroIntro";
import styles from "./hero-intro.module.css";
import { useHeroIntro } from "./useHeroIntro";
import { motion, useReducedMotion } from "framer-motion";
import Astronauta from "@/public/assets/astrobranding2.webp";
import Image from "next/image";
import Cta2 from "../Cta/Cta2";
import { Icon } from "@iconify/react";

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
      <div className="relative flex flex-col items-center justify-center w-full my-4 lg:my-8 2xla:my-14">
        <h1 ref={titleRef} aria-label="WE MAKE CREATIVE THINGS EVERYDAY" className={`${styles.title} text-primary dark:text-white text-[clamp(4.2rem,10vw,70px)] md:text-[110px] 2xla:text-[138px] font-bold flex flex-col justify-between h-full relative leading-[1.3]`}>
          <span aria-hidden="true" className="flex justify-center w-full gap-x-4 lg:gap-x-48"><span data-hero-word="we">WE</span><span data-hero-word="make">MAKE</span></span>
          <span aria-hidden="true" className="flex justify-center leading-[0.7] lg:gap-x-48">
            <span data-hero-word="cre" className="hidden text-right lg:block">CRE</span><span data-hero-word="ative" className="hidden lg:block">ATIVE</span>
            <span className="flex mb-32 lg:hidden"><span data-hero-word="cre">CRE</span><span data-hero-word="ative">ATIVE</span></span>
          </span>
          <span aria-hidden="true" className="flex flex-wrap justify-center mt-20 lg:mt-0 leading-[1] gap-x-32"><span data-hero-word="things">THINGS</span><span data-hero-word="everyday">EVERYDAY</span></span>
        </h1>
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
              className="rotate-[25deg] overflow-hidden xl:w-[450px] 2xla:w-[600px] 2xl:w-[450px] object-contain"
            />
          </motion.div>
          <motion.div {...detailMotion(1)} className="hero-editorial-note" aria-hidden="true">
            <span>IDEAS</span><span>BRANDS</span><span>PEOPLE</span><span>BEYOND</span>
            <Icon icon="mdi:arrow-bottom-left" width="42" height="42" />
          </motion.div>
        </motion.div>
      </div>
      <div className={`${styles.details} flex justify-center w-full my-8 2xla:my-10`}>
        <motion.div {...detailMotion(0)} className="flex max-w-3xl flex-col items-center text-center">
          <h2 className="max-w-xl mb-3 text-2xl font-bold leading-tight text-primary dark:text-white md:text-3xl">Quattro freelance. Una crew costruita intorno al tuo progetto.</h2>
          <p className="max-w-2xl mb-6 lg:text-lg text-primary/75 dark:text-white/75">Un team multidisciplinare per dare forma alle tue idee: branding, digital, contenuti e strategia. Piccole aziende, brand ambiziosi e startup che vogliono andare lontano.</p>
          <Cta2 link="/inizia-il-progetto">Inizia il progetto</Cta2>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
