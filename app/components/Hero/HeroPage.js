"use client";

import React from "react";
import { opacity, slideUp } from "../../servizi/animation";
import { motion } from "framer-motion";
const HeroPage = ({ children }) => {
  return (
    <motion.div variants={slideUp} initial="initial" animate="enter">
      <motion.div
        variants={opacity}
        initial="initial"
        animate="enter"
        className="content-shell relative flex flex-col gap-4 items-center justify-center py-12 md:py-20 text-center text-primary dark:text-white"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default HeroPage;
