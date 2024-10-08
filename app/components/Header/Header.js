"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "@/public/assets/logo.png";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import Cta from "../Cta/Cta";
import Nav from "../Nav/Nav";
import { usePathname } from "next/navigation"; // Usa usePathname invece di useRouter
import { AnimatePresence } from "framer-motion";
import styles from "./style.module.scss";
import Cta2 from "../Cta/Cta2";

function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  // Funzione per cambiare il tema (chiaro/scuro)
  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          onClick={() => setTheme("light")}
          title="light-mode"
          aria-label="light-mode"
        >
          <Icon
            icon="akar-icons:sun-fill"
            color="#ffff"
            width={30}
            height={30}
          />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme("dark")}
          title="dark-mode"
          aria-label="dark-mode"
        >
          <Icon
            icon="clarity:moon-solid"
            color="#0D161E"
            width={30}
            height={30}
          />
        </button>
      );
    }
  };

  // Nascondi la navbar se ci troviamo in /inizia-il-progetto
  if (pathname === "/inizia-il-progetto") {
    return null; // Non renderizza nulla se l'URL è /inizia-il-progetto
  }

  return (
    <nav className="w-[90%] h-[80px] md:h-[100px] py-8 mx-auto flex items-center justify-between text-primary dark:text-white ">
      <div className="flex items-center gap-10">
        <Link href="/home" title="Home Page">
          <Image
            src={Logo}
            alt="logo"
            width={80}
            height={80}
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
          />
        </Link>
      </div>

      <div className="flex items-center gap-4 lg:gap-10">
        {renderThemeChanger()}

        <div className="hidden lg:block ">
          <Cta2 link="/inizia-il-progetto">Inizia il progetto</Cta2>
        </div>
        <div className={styles.main}>
          <div className={styles.header}>
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className={styles.button}
            >
              <div
                className={`${styles.burger} ${
                  isActive ? styles.burgerActive : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      </div>
    </nav>
  );
}

export default Header;
