import React from "react";
import HeroPage from "../components/Hero/HeroPage";
import Image from "next/image";
import Cta2 from "../components/Cta/Cta2";
import { Icon } from "@iconify/react";
import Script from "next/script";
export const metadata = {
  title: "Mitha creative - Mentoring",
  description: "Generated by create next app",
};
function Mentoring() {
  return (
    <div>
      {" "}
      <HeroPage>
        <h1 className="text-4xl md:text-6xl text-primary dark:text-white">
          Mentoring
        </h1>
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
      <section className="grid grid-cols-1 lg:grid-cols-2 my-10 w-[90%] mx-auto   items-center ">
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-1">
            <p className="text-primary dark:text-white uppercase text.2xl">
              Mentoring su misura
            </p>
            <h2 className="text-4xl font-bold md:text-6xl text-primary dark:text-white">
              Cosa possiamo offrirti
            </h2>
          </div>
          <ul className="grid gap-8 md:grid-flow-col md:grid-rows-4">
            <li className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <Icon
                  icon="mdi:star-four-points"
                  width="1rem"
                  height="1rem"
                  className="text-primary dark:text-white"
                />
                <span className="ml-2 text-lg font-bold text-primary dark:text-white">
                  Consulenza su misura
                </span>
              </div>
              <p>
                Cominciamo con una chiacchierata. Voglio conoscere i tuoi sogni,
                le tue competenze attuali e dove vuoi arrivare. Dalle nostre
                chiacchierate, creeremo un piano personalizzato per te.
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <Icon
                  icon="mdi:star-four-points"
                  width="1rem"
                  height="1rem"
                  className="text-primary dark:text-white"
                />
                <span className="ml-2 text-lg font-bold text-primary dark:text-white">
                  Formazione Tecnica
                </span>
              </div>
              <p>
                Se senti che ci siano delle cose tecniche che vuoi affinare,
                sono qui per darti una mano. Offro formazione tecnica
                approfondita per farti diventare un maestro delle ultime
                tendenze nel web design.
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <Icon
                  icon="mdi:star-four-points"
                  width="1rem"
                  height="1rem"
                  className="text-primary dark:text-white"
                />
                <span className="ml-2 text-lg font-bold text-primary dark:text-white">
                  Mentoring Continuo
                </span>
              </div>
              <p>
                Sarò sempre qui per rispondere alle tue domande, condividere
                storie di successo e aiutarti lungo il percorso. L’obiettivo è
                che tu cresca costantemente come professionista.
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <Icon
                  icon="mdi:star-four-points"
                  width="1rem"
                  height="1rem"
                  className="text-primary dark:text-white"
                />
                <span className="ml-2 text-lg font-bold text-primary dark:text-white">
                  Strategie Vincenti
                </span>
              </div>
              <p>
                Imparerai come sviluppare strategie di marketing efficaci per
                promuovere il tuo lavoro, attirare clienti e farti un nome nel
                settore.
              </p>
            </li>
          </ul>
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
      <section className="w-full bg-purple">
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-8 py-20">
          <div className="flex flex-col gap-y-8">
            <h2 className="text-4xl font-bold md:text-6xl text-primary dark:text-white">
              Come funziona
            </h2>
            <p>
              Se desideri un percorso cucito su misura, il primo passo per il
              tuo successo è contattarmi per una chiacchierata iniziale
              gratuita. Durante questa videochiamata, discuteremo delle tue
              esigenze e dei prossimi passi da fare per tracciare il tuo
              percorso verso il successo nel mondo del web design.
            </p>
            <p>
              Se invece vuoi una power session piena di idee, consigli, e tirate
              di orecchie (si, a volte sono necessarie!) allora ti consiglio di
              prenotare subito la consulenza di 1 ora e mezza!
            </p>
            <p>
              Non importa se sei un web designer junior alla ricerca di consigli
              o un professionista che vuole iniziare un percorso da freelance,
              sono qui per te. Investi nel tuo futuro come web designer e
              unisciti a me nella ricerca della tua crescita professionale. 😎
            </p>
          </div>
          <div className="relative w-[400px] md:w-full  md:h-[650px] aspect-square overflow-hidden">
            Link a calendly
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mentoring;
