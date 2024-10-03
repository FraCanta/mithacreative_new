import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./anim";
import LinkItem from "./LinkItem/LinkItem";
import Curve from "./Curve/Curve";
import Footer2 from "./Footer2/Footer2";

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
    href: "/",
  },
  {
    title: "Contatti",
    href: "/",
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
        </div>
        <Footer2 />
      </div>
      <Curve />
    </motion.div>
  );
}
