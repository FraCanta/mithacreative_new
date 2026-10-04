import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./anim";
import LinkItem from "./LinkItem/LinkItem";
import Curve from "./Curve/Curve";
import Footer2 from "./Footer2/Footer2";
import Cta2 from "../Cta/Cta2";
import Link from "next/link";
import { missions } from "../../servizi/missions";

const navItems = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "Servizi",
    href: "/servizi",
  },
  {
    title: "Chi siamo",
    href: "/chi-siamo",
  },
  {
    title: "Collabora con noi",
    href: "/collabora-con-noi",
  },
  {
    title: "Domande frequenti",
    href: "/faq-domande-frequenti",
  },
  {
    title: "Contatti",
    href: "/contatti",
  },
];

export default function Nav({ onNavigate }) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div id="menu-principale" onClick={(event) => { if (event.target.closest("a")) onNavigate(); }}
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Esplora Mitha</p>
          </div>
          {navItems.map((data, index) => (
            <div className={data.href === "/servizi" ? styles.servicesGroup : undefined} key={data.href}>
              <LinkItem
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href || (data.href === "/servizi" && pathname.startsWith("/servizi/"))}
                setSelectedIndicator={setSelectedIndicator}
              />
              {data.href === "/servizi" && (
                <nav className={styles.serviceSubnav} aria-label="Missioni">
                  {missions.map((mission, missionIndex) => (
                    <Link
                      key={mission.slug}
                      href={`/servizi/${mission.slug}`}
                      aria-current={pathname === `/servizi/${mission.slug}` ? "page" : undefined}
                      onMouseEnter={() => setSelectedIndicator("/servizi")}
                    >
                      <span aria-hidden="true">{String(missionIndex + 1).padStart(2, "0")}</span>
                      {mission.title}
                    </Link>
                  ))}
                </nav>
              )}
            </div>
          ))}
          <div className="block mt-2 lg:hidden">
            <Cta2 link="/inizia-il-progetto">Inizia il progetto</Cta2>
          </div>
        </div>
        <Footer2 />
      </div>
      <Curve />
    </motion.div>
  );
}
