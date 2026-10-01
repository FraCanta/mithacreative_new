"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CtaOutline2 from "../Cta/CtaOutline2";

const navigation = [
  ["/", "Home"],
  ["/chi-siamo", "Chi siamo"],
  ["/unisciti-a-noi", "Unisciti a noi"],
  ["/servizi", "Servizi"],
  ["/contatti", "Contatti"],
  ["/mentoring", "Mentoring"],
  ["/faq-domande-frequenti", "FAQ"],
];

import { missions } from "../../servizi/missions";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/inizia-il-progetto") return null;

  return (
    <footer id="footer-sito" className="footer-theme bg-primary text-white dark:bg-purple dark:text-primary">
      <div className="footer-inner w-[90%] mx-auto">
        <div className="footer-brand">
          <Link href="/" aria-label="Mitha Creative, homepage" className="footer-logo">
            <Image src="/assets/logo.png" alt="Mitha Creative" width={80} height={80} />
          </Link>
          <p className="footer-kicker">WE MAKE CREATIVE THINGS EVERYDAY</p>
          <p className="footer-description">Mitha è un collective di quattro freelance indipendenti: competenze diverse che si uniscono intorno a ciò che ogni progetto richiede.</p>
          <div className="footer-cta"><CtaOutline2 link="/contatti">Parliamo del tuo progetto</CtaOutline2></div>
        </div>

        <div className="footer-columns">
          <nav aria-labelledby="footer-nav-title">
            <h2 id="footer-nav-title">Navigazione</h2>
            <ul>
              {navigation.map(([href, label]) => <li key={href}><Link href={href}>{label}</Link></li>)}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services-title">
            <h2 id="footer-services-title">Servizi</h2>
            <ul>
              {missions.map((mission) => <li key={mission.slug}><Link href={`/servizi/${mission.slug}`}>{mission.title}</Link></li>)}
            </ul>
          </nav>

          <div className="footer-contact">
            <h2>Contatti</h2>
            <a href="mailto:info@mithacreative.it">info@mithacreative.it</a>
            <div className="footer-socials" aria-label="Profili social Mitha">
              <a href="https://www.instagram.com/mitha.creative/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=61551739027892" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom w-[90%] mx-auto">
        <span>© {new Date().getFullYear()} Mitha Creative</span>
        <nav aria-label="Informazioni sul sito">
          <Link href="/privacy">Privacy</Link>
          <Link href="/cookie">Cookie</Link>
          <Link href="/sostenibilita" className="sustainability-link">Il nostro impegno per un web più sostenibile</Link>
        </nav>
      </div>
    </footer>
  );
}
