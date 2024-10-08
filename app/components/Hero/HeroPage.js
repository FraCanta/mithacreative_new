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
        className="relative flex flex-col items-center justify-center w-[90%] mx-auto "
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default HeroPage;
