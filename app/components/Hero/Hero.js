import React from "react";
import Astronauta from "@/public/assets/astrobranding2.webp";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center w-[90%] mx-auto lg:min-h-[calc(90vh_-_100px)] min-h-[calc(90vh_-_80px)] 2xla:min-h-[calc(100vh_-_100px)]">
      {/* Sezione con il testo e l'immagine */}
      <div className="relative flex flex-col items-center justify-center w-full my-4 lg:my-8 2xla:my-14">
        <h1 className="text-primary dark:text-white text-[70px] md:text-[110px] 2xla:text-[138px] font-bold flex flex-col justify-between h-full relative leading-[1.3]">
          <div className="flex justify-center w-full gap-x-4 lg:gap-x-48">
            <span>WE</span>
            <span>MAKE</span>
          </div>
          <div className="flex justify-center leading-[0.7] gap-x-48">
            <span className="hidden text-right lg:block">CRE</span>
            <span className="hidden lg:block">ATIVE</span>
            <span className="block mb-32 lg:hidden">CREATIVE</span>
          </div>

          <div className="flex flex-wrap justify-center mt-20 lg:mt-0 leading-[1] gap-x-32">
            {" "}
            <span>THINGS</span>
            <span>EVERYDAY</span>
          </div>
        </h1>

        {/* Immagine posizionata assolutamente sopra l'H1 */}
        <div className="absolute z-10 flex items-center justify-center w-full h-full overflow-hidden -translate-y-1/2 lg:-left-12 top-1/2 lg:overflow-visible">
          <Image
            src={Astronauta}
            width={600}
            height={600}
            alt="Astronauta"
            className="rotate-[25deg] overflow-hidden xl:w-[450px] 2xla:w-[600px]  2xl:w-[450px] object-contain"
          />
        </div>
      </div>

      {/* Sezione separata con paragrafo e bottone */}
      <div className="grid justify-between w-full grid-cols-1 my-8 gap-y-10 lg:gap-10 2xla:my-10 lg:grid-cols-3">
        <div className="flex flex-col">
          {/* Paragrafo */}
          <p className="max-w-2xl mb-6 lg:text-lg 2xl:text-lg text-primary dark:text-white">
            Supportiamo liberi professionisti, artigiani, piccole aziende e
            startup a definire chiaramente i loro obiettivi attraverso lo
            sviluppo di identità visive e siti web responsive.
          </p>
        </div>
        <div></div>

        {/* Dati di completamento progetti */}
        <div className="flex justify-end">
          <div className="flex flex-col w-full gap-2 lg:gap-4 text-primary dark:text-white">
            <h2 className="font-bold text-7xl">40+</h2>
            <p className="text-sm xl:text-lg text-primary/80 dark:text-white/80">
              Progetti creativi
            </p>
          </div>
          <div className="flex flex-col w-full gap-2 lg:gap-4 text-primary dark:text-white">
            <h2 className="font-bold text-7xl">10+</h2>
            <p className="text-sm xl:text-lg text-primary/80 dark:text-white/80">
              Anni di esperienza
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
