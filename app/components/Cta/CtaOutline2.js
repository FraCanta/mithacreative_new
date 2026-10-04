import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

function CtaOutline2({ children, link }) {
  return (
    <Link
      href={link}
      className="relative max-w-max flex items-center gap-4 bg-transparent rounded-[100px] px-6 py-6 md:px-4 md:py-2 border border-white/60 dark:border-primary/60 overflow-hidden group transition-all duration-300 ease-in-out"
    >
      {/* Freccia che appare al hover, a sinistra del testo */}
      <div className="absolute left-0 flex items-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:left-3 group-hover:opacity-100">
        <Icon icon="lucide:arrow-right" width="16" height="16" className="text-white dark:text-primary" aria-hidden="true" />
      </div>

      {/* Testo che si sposta al hover */}
      <p className="text-xl text-white transition-all duration-300 ease-in-out group-hover:translate-x-6 dark:text-primary group-hover:text-white dark:group-hover:text-primary">
        {children}
      </p>

      {/* Puntino a destra del testo */}
      <div className="w-2 h-2 transition-all duration-300 ease-in-out bg-white rounded-full dark:bg-primary group-hover:opacity-0 group-hover:scale-0"></div>

      {/* Background che appare al hover, riempiendo da sinistra a destra */}
      <div className="absolute inset-0 bg-primary dark:bg-white transition-transform duration-300 ease-in-out scale-x-0 group-hover:scale-x-100 origin-left rounded-[100px] z-[-1]"></div>
    </Link>
  );
}

export default CtaOutline2;
