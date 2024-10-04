import Link from "next/link";
import React from "react";

function Cta2({ children, link }) {
  return (
    <Link
      href={link}
      className="relative max-w-max flex items-center gap-4 bg-transparent rounded-[100px] px-4 py-2 border dark:border-white/60 border-primary/60 overflow-hidden group transition-all duration-300 ease-in-out"
    >
      {/* Freccia che appare al hover, a sinistra del testo */}
      <div className="absolute left-0 flex items-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:left-3 group-hover:opacity-100">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="fill-white dark:fill-primary"
        >
          <path d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0V9Z" />
        </svg>
      </div>

      {/* Testo che si sposta al hover */}
      <p className="text-xl transition-all duration-300 ease-in-out group-hover:translate-x-6 text-primary dark:text-white group-hover:text-white dark:group-hover:text-primary">
        {children}
      </p>

      {/* Puntino a destra del testo */}
      <div className="w-2 h-2 transition-all duration-300 ease-in-out rounded-full dark:bg-white bg-primary group-hover:opacity-0 group-hover:scale-0"></div>

      {/* Background che appare al hover, riempiendo da sinistra a destra */}
      <div className="absolute inset-0 bg-primary dark:bg-white transition-transform duration-300 ease-in-out scale-x-0 group-hover:scale-x-100 origin-left rounded-[100px] z-[-1]"></div>
    </Link>
  );
}

export default Cta2;
