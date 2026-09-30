"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CtaOutline2 from "../Cta/CtaOutline2";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/inizia-il-progetto") return null;
  return (
    <footer id="footer-sito" className="footer-theme bg-primary text-white dark:bg-purple dark:text-primary">
      <div className="w-[90%] mx-auto section-space grid md:grid-cols-[1.5fr_1fr] gap-10 items-center">
        <div className="flex flex-col items-start gap-5">
          <p className="text-sm uppercase tracking-widest">Una direzione per le tue idee</p>
          <h2 className="text-3xl md:text-5xl font-bold">Il prossimo passo,<br />lo troviamo insieme.</h2>
          <p className="max-w-xl">Vuoi portare avanti il tuo progetto in autonomia? Il nostro mentoring ti aiuta a fare chiarezza e a scegliere come proseguire.</p>
          <CtaOutline2 link="/mentoring" lightSurface>Scopri il mentoring</CtaOutline2>
        </div>
        <div className="flex flex-col gap-6 md:pl-10">
          <h3 className="text-2xl font-bold">Restiamo in contatto</h3>
          <a className="underline underline-offset-4 break-words" href="mailto:info@mithacreative.it">info@mithacreative.it</a>
          <nav aria-label="Navigazione footer" className="grid grid-cols-2 gap-3">
            {[["/servizi", "Servizi"], ["/chi-siamo", "Chi siamo"], ["/contatti", "Contatti"], ["/faq-domande-frequenti", "Domande frequenti"]].map(([href, label]) => <Link key={href} href={href} className="py-2 hover:underline">{label}</Link>)}
          </nav>
        </div>
      </div>
      <div className="w-[90%] mx-auto border-t border-primary/20 py-6 text-sm">© {new Date().getFullYear()} Mitha Creative</div>
    </footer>
  );
}
