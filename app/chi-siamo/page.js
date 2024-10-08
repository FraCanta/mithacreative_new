import React from "react";
import HeroPage from "../components/Hero/HeroPage";
import Link from "next/link";
export const metadata = {
  title: "Mitha creative - Chi siamo",
  description: "Generated by create next app",
};
function chiSiamo() {
  return (
    <div>
      <HeroPage>
        <h1 className="text-6xl text-primary dark:text-white">Chi siamo</h1>
        <p className="text-primary uppercase text.2xl">
          ecco il nostro team creativo
        </p>
      </HeroPage>
      <section className="h-screen my-20">
        <div className="flex flex-col items-center gap-2 py-10 text-center">
          <h2 className="text-xl lg:text-3xl text-primary dark:text-white">
            Alcuni progetti di sviluppo siti web, blog ed e-commerce
          </h2>
          <p className="text-base lg:text-xl text-primary dark:text-white fxl:text-2xl">
            Hai bisogno di aiuto per creare il sito per la tua attività?{" "}
            <Link
              href="/contatti"
              className="font-bold underline underline-offset-2"
            >
              Contattaci
            </Link>{" "}
            e raccontami il tuo progetto!
          </p>
        </div>
      </section>
    </div>
  );
}

export default chiSiamo;
