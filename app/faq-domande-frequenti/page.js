"use client";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import Cta2 from "../components/Cta/Cta2";

function faqDomandeFrequenti() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center  min-h-[calc(30vh_-_70px)] md:min-h-[calc(50vh_-_70px)] fxl:min-h-[calc(40vh_-_100px)]">
        <div className="w-[90%] mx-auto text-center">
          <h1 className="pb-2 text-4xl lg:text-7xl text-pink">
            FAQs - <br /> Domande frequenti
          </h1>
          <p className="text-base uppercase lg:text-xl font-flamenco text-pink fxl:text-2xl">
            Sei nel posto dove nessuna domanda è sbagliata o stupida
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto h-[0.03rem] bg-pink/30"></div>
      <div className="w-[90%] mx-auto my-10 lg:my-20 text-pink">
        <AccordionCustomIcon />
      </div>
      <div className="w-[90%] mx-auto text-center flex flex-col gap-6 justify-center items-center mb-10">
        <h2 className="text-3xl lg:text-4xl text-pink">Hai altre domande?</h2>
        <Cta2 link="/contatti">Mandaci una email</Cta2>
      </div>
      <div className="h-auto px-5 mt-6 mb-20 overflow-x-hidden">
        <div
          className="elfsight-app-b68ae609-c6be-4d9b-9ab6-39ecfb20871e"
          data-elfsight-app-lazy
        ></div>
      </div>
    </>
  );
}

export default faqDomandeFrequenti;

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomIcon() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Quali servizi offri?
        </AccordionHeader>
        <AccordionBody className="!text-lg !fxl:text-2xl">
          Mi occupo di creazione di siti web responsive, e-commerce e
          consulenze. Ma posso fornire, tramite mie collaboratrici, anche:
          branding, creazione loghi, identità visive, copywriting e social
          media.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Quanto costa la creazione di un sito web?
        </AccordionHeader>
        <AccordionBody className="!text-lg !fxl:text-2xl">
          Come puoi immaginare, è difficile dare una risposta univoca a questa
          domanda, ma posso darti qualche referenza: i prezzi partono da €1.500
          per un sito web personalizzato one page e €2.000 per un sito web
          vetrina.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Qual è il costo per la creazione di un e-commerce?
        </AccordionHeader>
        <AccordionBody className="!text-lg !fxl:text-2xl">
          Anche in questo caso partiamo da un prezzo base di €2.800, che può
          variare in base alle funzionalità richieste.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Posso richiedere una consulenza di UX / UI?
        </AccordionHeader>
        <AccordionBody className="!text-lg">
          Sì, le consulenze partono da €160 per sessione.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Qual’è il processo di lavoro?
        </AccordionHeader>
        <AccordionBody className="!text-lg !fxl:text-2xl">
          Inizia con un briefing, seguito da ricerca, design, sviluppo e lancio.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Fai manutenzione di siti esistenti, non creati da te?
        </AccordionHeader>
        <AccordionBody className="!text-lg !fxl:text-2xl">
          Dipende, valuto ogni caso singolarmente!
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Quanto tempo impieghi per realizzare un sito web vetrina?
        </AccordionHeader>
        <AccordionBody className="!text-lg !fxl:text-2xl">
          Dipende dal progetto, solitamente dalle 4 ai 8 settimane.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(8)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Fai SEO e ottimizzazione per motori di ricerca?
        </AccordionHeader>
        <AccordionBody className="!text-lg !fxl:text-2xl">
          Non sono una SEO strategist, ma sicuramente ho qualcun@ che lo farà
          per te!
        </AccordionBody>
      </Accordion>
    </>
  );
}
