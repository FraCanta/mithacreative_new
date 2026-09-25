"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Logo from "@/public/assets/logo.png";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import Nav from "../Nav/Nav";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import styles from "./style.module.scss";
import Cta2 from "../Cta/Cta2";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isActive, setIsActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuButton = useRef(null);
  const pathname = usePathname();

  useEffect(() => setIsActive(false), [pathname]);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!isActive) return;
    const trigger = menuButton.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = document.getElementById("menu-principale");
    const background = document.querySelectorAll("#contenuto, #footer-sito, .contact-round");
    background.forEach((element) => element.setAttribute("inert", ""));
    panel?.querySelector("a")?.focus();
    const handleKey = (event) => {
      if (event.key === "Escape") setIsActive(false);
      if (event.key === "Tab") {
        const elements = [menuButton.current, ...panel.querySelectorAll("a, button")].filter(Boolean);
        const index = elements.indexOf(document.activeElement);
        const next = event.shiftKey ? (index <= 0 ? elements.length - 1 : index - 1) : (index + 1) % elements.length;
        event.preventDefault();
        elements[next].focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      background.forEach((element) => element.removeAttribute("inert"));
      document.removeEventListener("keydown", handleKey);
      trigger?.focus();
    };
  }, [isActive]);

  if (pathname === "/inizia-il-progetto") return null;
  return (
    <nav aria-label="Navigazione principale" className="w-[90%] h-[80px] md:h-[100px] py-8 mx-auto flex items-center justify-between text-primary dark:text-white">
      <Link href="/" aria-label="Mitha Creative, homepage"><Image src={Logo} alt="Mitha Creative" width={80} height={80} className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]" /></Link>
      <div className="flex items-center gap-4 lg:gap-10">
        {mounted ? <button type="button" className="p-2 min-h-11 min-w-11" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label={resolvedTheme === "dark" ? "Attiva il tema chiaro" : "Attiva il tema scuro"}><Icon icon={resolvedTheme === "dark" ? "akar-icons:sun-fill" : "clarity:moon-solid"} width={26} height={26} /></button> : <span className="w-11 h-11" aria-hidden="true" />}
        <div className="hidden lg:block"><Cta2 link="/inizia-il-progetto">Inizia il progetto</Cta2></div>
        <div className={styles.header}>
          <button ref={menuButton} type="button" aria-label={isActive ? "Chiudi menu" : "Apri menu"} aria-expanded={isActive} aria-controls="menu-principale" onClick={() => setIsActive(!isActive)} className={styles.button}>
            <span aria-hidden="true" className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`} />
          </button>
        </div>
        <AnimatePresence mode="wait">{isActive && <Nav onNavigate={() => setIsActive(false)} />}</AnimatePresence>
      </div>
    </nav>
  );
}
