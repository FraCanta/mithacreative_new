"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Cta from "../Cta/Cta";
const Mobile = () => {
  const [open, setOpen] = useState(false);
  const [accordionOneOpen, setAccordionOneOpen] = useState(false);
  const [accordionTwoOpen, setAccordionTwoOpen] = useState(false);

  const svgVariants = {
    closed: {
      path: "M4 6h16M4 12h16M4 18h16",
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
    open: {
      path: "M6 18L18 6M6 6l12 12",
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
    setAccordionOneOpen(false);
    setAccordionTwoOpen(false);
  };

  const accordionVariants = {
    closed: { height: 0, opacity: 0, transition: { duration: 0.5 } },
    open: { height: "auto", opacity: 1, transition: { duration: 0.5 } },
  };

  const toggleAccordionOne = () => {
    setAccordionOneOpen(!accordionOneOpen);
  };

  const toggleAccordionTwo = () => {
    setAccordionTwoOpen(!accordionTwoOpen);
  };

  return (
    <div className="flex items-center">
      <motion.div id="close" onClick={handleOpen}>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 md:w-10 md:h-10"
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={open ? svgVariants.open.path : svgVariants.closed.path}
            variants={svgVariants}
          />
        </svg> */}
        <p className="text-xl font-bold">MENU</p>
      </motion.div>

      {/* Conditionally render the menu with AnimatePresence */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-[80px] z-20 overflow-x-hidden left-0 right-0 dark:bg-primary bg-white overflow-y-auto h-screen w-full dark:text-white text-primary flex flex-col pt-6  pb-24"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 30,
            }}
          >
            <ul className="flex flex-col gap-8 text-2xl font-regular w-[90%] mx-auto">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Chi siamo</Link>
              </li>
              <li>
                <Link href="/">Servizi</Link>
              </li>
              <li>
                <Link href="/">Portfolio</Link>
              </li>
              <li>
                <Link href="/">Contatti</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Mobile;
