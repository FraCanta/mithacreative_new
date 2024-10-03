import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./anim";
import LinkItem from "./LinkItem/LinkItem";
import Curve from "./Curve/Curve";
import Footer2 from "./Footer2/Footer2";
import Cta2 from "../Cta/Cta2";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Chi siamo",
    href: "/chi-siamo",
  },
  {
    title: "Servizi",
    href: "/servizi",
  },
  {
    title: "Contatti",
    href: "/contatti",
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
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
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <LinkItem
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></LinkItem>
            );
          })}
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
