"use client";

import React from "react";
import HeroPage from "../components/Hero/HeroPage";
import { opacity } from "./animation";
import { motion } from "framer-motion";
import { slideUp } from "./animation";
import Tabs from "../components/Tabs/Tabs";

function ServiziClient() {
  return (
    <>
      <HeroPage>
        <h1 className="text-4xl lg:text-6xl text-primary dark:text-white">
          Servizi
        </h1>
        <p className="text-sm uppercase lg:text-lg text-primary">
          Scopri i nostri servizi su misura
        </p>
      </HeroPage>
      <motion.section
        variants={slideUp}
        initial="initial"
        animate="enter"
        className="lg:my-20 w-[90%] mx-auto"
      >
        <motion.div
          variants={opacity}
          initial="initial"
          animate="enter"
          className="flex flex-col items-center gap-2 py-6 text-center"
        >
          <h2 className="max-w-5xl text-lg font-regular lg:text-2xl text-primary dark:text-white">
            Quando abbiamo un progetto che ci frulla nella testa non sappiamo
            mai da dove partire, ma è lì che aspetta che diventi realtà. Ma cosa
            devo fare? Qual è il servizio adatto alle mie esigenze?
          </h2>
          <p className="text-lg lg:text-xl text-primary dark:text-white fxl:text-2xl">
            Ecco perchè abbiamo creato i servizi adatti alle tue esigenze.{" "}
            <br />
            Dai un&apos;occhiata alle nostre proposte!
          </p>
        </motion.div>
      </motion.section>
      <section className="flex flex-col items-center h-screen gap-2 py-20 text-center">
        <Tabs />
      </section>
    </>
  );
}

export default ServiziClient;
