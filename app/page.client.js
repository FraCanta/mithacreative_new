"use client";

import Marquee from "./components/Marquee/marquee";
import Image from "next/image";
import { Icon } from "@iconify/react";
import LenisScroll from "./components/LenisiScroll/LenisScroll";
import CtaOutline from "./components/Cta/CtaOutline";
import Cta2 from "./components/Cta/Cta2";
import Hero from "./components/Hero/Hero";

export default function PageClient() {
  return (
    <>
      <LenisScroll />
      <Hero />
      <Marquee />
      <section className="grid grid-cols-1 lg:grid-cols-2 my-10 w-[90%] mx-auto  md:py-20 items-center gap-y-6 lg:gap-x-8">
        <div className="relative w-[300px] md:w-full  md:h-[550px] aspect-square">
          <Image
            src="/assets/astronautaweb2.webp"
            alt="astronauta web"
            fill
            className="object-contain rotate-[-25deg]"
          />
        </div>
        <div className="flex flex-col gap-y-8">
          <h2 className="text-4xl font-bold md:text-5xl text-primary dark:text-white">
            Web design & Brand Identity
          </h2>
          <p className="text-primary dark:text-white">
            Creiamo siti web che non solo catturano l&apos;attenzione visiva, ma
            riflettono anche l&apos;identità unica <br />
            ed esclusiva del tuo brand.
          </p>
          <p className="text-primary/75 dark:text-white/75">
            Dal design accattivante alla costruzione di un&apos;identità visiva
            distintiva, ci assicuriamo che il tuo marchio parli direttamente al
            cuore dei tuoi clienti. Attraverso soluzioni su misura, il nostro
            approccio si concentra su esperienze digitali intuitive e brand
            strategy che lasciano un impatto duraturo.
          </p>
          <ul className="grid gap-4 md:grid-flow-col md:grid-rows-3">
            <li className="flex items-center gap-1">
              <Icon
                icon="mdi:star-four-points"
                width="1rem"
                height="1rem"
                className="text-primary dark:text-white"
              />
              <span className="ml-2">Design responsive e moderno</span>
            </li>
            <li className="flex items-center gap-1">
              <Icon
                icon="mdi:star-four-points"
                width="1rem"
                height="1rem"
                className="text-primary dark:text-white"
              />
              <span className="ml-2">Esperienza utente ottimizzata</span>
            </li>
            <li className="flex items-center gap-1">
              <Icon
                icon="mdi:star-four-points"
                width="1rem"
                height="1rem"
                className="text-primary dark:text-white"
              />
              <span className="ml-2">Strategia di brand personalizzata</span>
            </li>
            <li className="flex items-center gap-1">
              <Icon
                icon="mdi:star-four-points"
                width="1rem"
                height="1rem"
                className="text-primary dark:text-white"
              />
              <span className="ml-2">
                Servizi grafici professionali e ad hoc
              </span>
            </li>
            <li className="flex items-center gap-1">
              <Icon
                icon="mdi:star-four-points"
                width="1rem"
                height="1rem"
                className="text-primary dark:text-white"
              />
              <span className="ml-2">
                Flessibilità e personalizzazione totale
              </span>
            </li>
            <li className="flex items-center gap-1">
              <Icon
                icon="mdi:star-four-points"
                width="1rem"
                height="1rem"
                className="text-primary dark:text-white"
              />
              <span className="ml-2">Assistenza dedicata post-lancio</span>
            </li>
          </ul>
          <Cta2 link="/servizi">Scopri di più</Cta2>
        </div>
      </section>
      <section className="w-[90%] mx-auto flex flex-col gap-6">
        <div className="flex justify-center w-full lg:text-center">
          <h2 className="text-4xl font-bold md:text-5xl text-primary dark:text-white">
            Il nostro metodo creativo <br /> per fornirti soluzioni spaziali
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-full lg:h-[500px] gap-4 min-h-auto">
          <div className="rounded-[20px] bg-purple/35 dark:bg-white p-6 flex flex-col h-full justify-between">
            <div className="text-2xl font-bold text-primary">01</div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-primary">Ricerca</h3>
              <p className="text-primary/80 leading-[1.3]">
                Analizziamo il mercato, i trend <br />e le esigenze specifiche
                del tuo business.
              </p>
            </div>
          </div>
          <div className="rounded-[20px] bg-purple/35 dark:bg-white p-6 flex flex-col h-full justify-between">
            <div className="text-2xl font-bold text-primary">02</div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-primary">
                Pianificazione e Sketch
              </h3>
              <p className="text-primary/80 leading-[1.3]">
                Definiamo le linee guida del progetto per fornirti un design
                accattivante e performante.
              </p>
            </div>
          </div>
          <div className="rounded-[20px] bg-purple/35 dark:bg-white p-6 flex flex-col h-full justify-between">
            <div className="text-2xl font-bold text-primary">03</div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-primary">
                Personalizzazione
              </h3>
              <p className="text-primary/80 leading-[1.3]">
                Adattiamo ogni dettaglio del design per rendere la tua identità
                aziendale unica e coerente.
              </p>
            </div>
          </div>
          <div className="rounded-[20px] bg-purple/35 dark:bg-white p-6 flex flex-col h-full justify-between">
            <div className="text-2xl font-bold text-primary">04</div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-primary">Test Utente</h3>
              <p className="text-primary/80 leading-[1.3]">
                Conduciamo vari test per garantire un&apos;esperienza utente
                ottimale e funzionale.
              </p>
            </div>
          </div>
          <div className="rounded-[20px] bg-purple/35 dark:bg-white p-6 flex flex-col h-full justify-between">
            <div className="text-2xl font-bold text-primary">05</div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-primary">Post Lancio</h3>
              <p className="text-primary/80 leading-[1.3]">
                Il nostro lavoro non finisce qui! <br />
                Ti offriamo assistenza anche successivamente.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6 my-10 bg-primary dark:bg-white">
        <div className="flex flex-wrap items-end w-[90%] mx-auto h-auto justify-between pt-20 pb-10 gap-y-6">
          <h2 className="text-4xl font-bold text-white md:text-5xl dark:text-primary">
            Dai un’occhiata ai <br /> nostri servizi creativi
          </h2>
          <CtaOutline link="/servizi">Scopri di più</CtaOutline>
        </div>
        <section className="grid gap-6 w-[90%] mx-auto mb-20">
          {/* Riga 1: Colonna stretta sinistra */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            <div className="relative col-span-12 md:col-span-4 h-[300px]  lg:h-[500px] group">
              <Image
                src="/assets/logo1.webp"
                alt=""
                fill
                className="object-cover w-full h-full rounded-[20px]"
              />
              <a
                href="#"
                className="absolute px-3 py-1 text-2xl text-white transition-opacity duration-300 rounded-[20px] opacity-0 bg-primary bottom-4 left-4 bg-opacity-70 group-hover:opacity-100"
              >
                Logo Design
              </a>
            </div>

            <div className="col-span-12 md:col-span-8 h-[300px] w-full relative lg:h-[500px] group">
              <Image
                src="/assets/miao_cover2.jpg"
                alt=""
                fill
                className="object-cover w-full h-full rounded-[20px]"
              />
              <a
                href="#"
                className="absolute px-3 py-1 text-2xl text-white transition-opacity duration-300 rounded-[20px] opacity-0 bg-primary bottom-4 left-4 bg-opacity-70 group-hover:opacity-100"
              >
                Sito custom
              </a>
            </div>
          </div>

          {/* Riga 2: Colonna stretta destra */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            <div className="col-span-12 md:col-span-8 w-full h-[300px] lg:h-[500px] relative group">
              <Image
                src="/assets/lescretes.jpg"
                alt=""
                fill
                className="object-cover w-full h-full rounded-[20px]"
              />
              <a
                href="#"
                className="absolute px-3 py-1 text-2xl text-white transition-opacity duration-300 rounded-[20px] opacity-0 bg-primary bottom-4 left-4 bg-opacity-70 group-hover:opacity-100"
              >
                E-commerce
              </a>
            </div>
            <div className="relative col-span-12 md:col-span-4 h-[300px]  lg:h-[500px] group">
              <Image
                src="/assets/pack1.webp"
                alt=""
                fill
                className="object-cover w-full h-full rounded-[20px]"
              />
              <a
                href="#"
                className="absolute px-3 py-1 text-2xl text-white transition-opacity duration-300 rounded-[20px] opacity-0 bg-primary bottom-4 left-4 bg-opacity-70 group-hover:opacity-100"
              >
                Package & Label
              </a>
            </div>
          </div>

          {/* Riga 3: Colonna stretta sinistra */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            <div className="relative col-span-12 md:col-span-4 h-[300px] lg:h-[500px] group">
              <Image
                src="/assets/illu4.webp"
                alt=""
                fill
                className="object-cover w-full h-full rounded-[20px]"
              />
              <a
                href="#"
                className="absolute px-3 py-1 text-2xl text-white transition-opacity duration-300 rounded-[20px] opacity-0 bg-primary bottom-4 left-4 bg-opacity-70 group-hover:opacity-100"
              >
                Illustrazioni
              </a>
            </div>

            <div className="col-span-12 md:col-span-8 h-[300px] lg:h-[500px] w-full relative group">
              <Image
                src="/assets/anna.jpg"
                alt=""
                fill
                className="object-cover w-full h-full rounded-[20px]"
              />
              <a
                href="#"
                className="absolute px-3 py-1 text-2xl text-white transition-opacity duration-300 rounded-[20px] opacity-0 bg-primary bottom-4 left-4 bg-opacity-70 group-hover:opacity-100"
              >
                Costruzione Blog
              </a>
            </div>
          </div>
        </section>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 my-8 w-[90%] mx-auto   items-center gap-y-6 lg:gap-x-8">
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-1">
            <p className="text-2xl text-primary/80 dark:text-white">
              Le idee vincenti sono il risultato del nostro
            </p>
            <h2 className="text-4xl font-bold md:text-6xl text-primary dark:text-white">
              Team unito ed esperto
            </h2>
          </div>

          <p className="text-primary/75 dark:text-white/75">
            Siamo una squadra di designer e sviluppatrici appassionate, unite
            dalla voglia di trasformare idee innovative in soluzioni creative.
            Ogni progetto è per noi una nuova opportunità di crescita e sfida,
            lavoriamo insieme per offrire risultati performanti, combinando
            creatività, tecnica e attenzione ai dettagli.
          </p>

          <Cta2 link="/chi-siamo">Scopri chi siamo</Cta2>
        </div>
        <div className="relative w-full  md:h-[650px] aspect-square overflow-hidden">
          <Image
            src="/assets/mitha.webp"
            alt="mitha creative team"
            fill
            className="object-contain rotate-[-15deg]"
          />
        </div>
      </section>
    </>
  );
}
