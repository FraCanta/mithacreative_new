import React from "react";
import HeroPage from "../components/Hero/HeroPage";
import Image from "next/image";
import Cta2 from "../components/Cta/Cta2";
export const metadata = {
  title: "Mitha creative - Mentoring",
  description: "Generated by create next app",
};
function Mentoring() {
  return (
    <div>
      {" "}
      <HeroPage>
        <h1 className="text-6xl text-primary dark:text-white">Mentoring</h1>
        <p className="text-primary uppercase text.2xl">un supporto per tutt@</p>
      </HeroPage>
      <section className="my-10 w-[90%] mx-auto">
        <div className="flex flex-col items-center max-w-6xl gap-6 py-10 mx-auto text-center">
          <h2 className="text-xl lg:text-3xl text-primary dark:text-white">
            Se sei un@ freelance, artigian@ e liber@ professionist@ alla ricerca
            di orientamento, chiarezza e supporto per riuscire ad emergere nel
            mondo digitale, siamo qui per aiutarti.
          </h2>
          <p className="text-base lg:text-xl text-primary dark:text-white fxl:text-2xl">
            Sappiamo quanto è difficile emergere nel proprio settore,
            soprattutto quando si è all&apos;inizio. Ecco perchè abbiamo pensato
            di darti una mano creando questo servizio 1 to 1, dove ti daremo gli
            strumenti per poter portare avanti il tuo progetto.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 my-10 w-[90%] mx-auto   items-center gap-y-6 lg:gap-x-8">
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-1">
            <p className="text-primary uppercase text.2xl">
              Mentoring su misura
            </p>
            <h2 className="text-4xl font-bold md:text-6xl text-primary dark:text-white">
              Cosa possiamo offrirti
            </h2>
          </div>
        </div>
        <div className="relative w-[400px] md:w-full  md:h-[650px] aspect-square overflow-hidden">
          <Image
            src="/assets/lancio.webp"
            alt="mitha creative team"
            fill
            className="object-contain "
          />
        </div>
      </section>
    </div>
  );
}

export default Mentoring;
