import React from "react";
import HeroPage from "../components/Hero/HeroPage";
import Link from "next/link";
export const metadata = {
  title: "Mitha creative - Servizi",
  description: "Generated by create next app",
};
function servizi() {
  return (
    <div>
      <HeroPage>
        <h1 className="text-6xl text-primary dark:text-white">Servizi</h1>
        <p className="text-primary uppercase text.2xl">
          Scopri i nostri servizi su misura
        </p>
      </HeroPage>
      <section className="h-screen my-20">
        <div className="flex flex-col items-center gap-2 py-6 text-center">
          <h2 className="max-w-5xl text-xl lg:text-2xl text-primary dark:text-white">
            Quando abbiamo un progetto che ci frulla nella testa non sappiamo
            mai da dove partire, ma è lì che aspetta che diventi realtà. Ma cosa
            devo fare? Qual è il servizio adatto alle mie esigenze?
          </h2>
          <p className="text-base lg:text-xl text-primary dark:text-white fxl:text-2xl">
            Ecco perchè abbiamo creato i servizi adatti alle tue esigenze.{" "}
            <br />
            Dai un&apos;occhiata alle nostre proposte!
          </p>
        </div>
      </section>
    </div>
  );
}

export default servizi;
