"use client";
import { usePathname } from "next/navigation";
import CtaOutline from "../Cta/CtaOutline";
import CtaOutline2 from "../Cta/CtaOutline2";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/inizia-il-progetto") {
    return null;
  }
  return (
    <div
      className="relative h-[600px] bg-primary dark:bg-white"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+600px)] -top-[100vh]">
        <div className="h-[700px] sticky top-[calc(100vh-600px)] flex items-center justify-center">
          <div className="relative flex items-center justify-center text-white dark:text-primary">
            <h3 className="text-[70px] md:text-[200px] lg:text-[300px] text-primary dark:text-white leading-[0.8] uppercase text-shadow-light dark:text-shadow-dark">
              Mentoring
            </h3>

            {/* Posizionamento assoluto per h2, p e Cta2 */}
            <div className="absolute inset-0 flex flex-col md:items-center justify-center w-full w-[90%] min-h-full px-4 mx-auto gap-4">
              <h2 className="text-3xl text-white md:text-center sm:text-4xl md:text-5xl dark:text-primary">
                Ti senti disorientat@ nell&apos;affrontare autonomamente il tuo
                progetto?
              </h2>
              <p className="text-lg text-white md:text-center dark:text-primary">
                Ti offriamo un percorso personalizzato di mentoring per aiutarti
                a trovare le migliori soluzioni. Scopri cosa possiamo fare per
                te.
              </p>
              <CtaOutline2 link="/mentoring">Scopri i dettagli</CtaOutline2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
