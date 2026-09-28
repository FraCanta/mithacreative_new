import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

function Cta2({ children, link, lightSurface = false, ariaLabel, type = "button", disabled = false }) {
  const Component = link ? Link : "button";
  return (
    <Component
      {...(link ? { href: link } : { type, disabled })}
      aria-label={ariaLabel}
      className={`disabled:opacity-50 disabled:cursor-not-allowed relative isolate min-h-12 max-w-max flex items-center gap-4 bg-transparent rounded-[100px] px-4 py-2 border border-primary/60 overflow-hidden group transition-all duration-300 ease-in-out ${lightSurface ? "" : "dark:border-white/60"}`}
    >
      {/* Freccia che appare al hover, a sinistra del testo */}
      <span aria-hidden="true" className={`absolute left-0 flex items-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:left-3 group-hover:opacity-100 ${lightSurface ? "text-white" : "text-white dark:text-primary"}`}>
        <Icon icon="lucide:arrow-right" width="16" height="16" />
      </span>

      {/* Testo che si sposta al hover */}
      <span className={`text-xl transition-all duration-300 ease-in-out group-hover:translate-x-6 text-primary group-hover:text-white ${lightSurface ? "" : "dark:text-white dark:group-hover:text-primary"}`}>
        {children}
      </span>

      {/* Puntino a destra del testo */}
      <div className={`w-2 h-2 shrink-0 transition-all duration-300 ease-in-out rounded-full bg-primary group-hover:opacity-0 group-hover:scale-0 ${lightSurface ? "" : "dark:bg-white"}`}></div>

      {/* Background che appare al hover, riempiendo da sinistra a destra */}
      <div className={`absolute inset-0 bg-primary transition-transform duration-300 ease-in-out scale-x-0 group-hover:scale-x-100 origin-left rounded-[100px] z-[-1] ${lightSurface ? "" : "dark:bg-white"}`}></div>
    </Component>
  );
}

export default Cta2;
