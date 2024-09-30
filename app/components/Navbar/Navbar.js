"use client";

import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/logo.png";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import Cta from "../Cta/Cta";
import Mobile from "../Mobile/Mobile";
import { usePathname } from "next/navigation"; // Usa usePathname invece di useRouter

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const pathname = usePathname(); // Ottieni l'URL corrente con usePathname

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
    <nav className="w-[90%] h-[80px] lg:h-[100px] py-8 mx-auto flex items-center justify-between text-primary dark:text-white ">
      <div className="flex items-center gap-10">
        <Link href="/" title="Home Page">
          <Image
            src={Logo}
            alt="logo"
            width={80}
            height={80}
            className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]"
          />
        </Link>
      </div>

      <div className="flex items-center gap-10">
        {renderThemeChanger()}

        <div className="hidden lg:block ">
          <Cta link="/inizia-il-progetto">Inizia il progetto</Cta>
        </div>
        <div className="">
          <Mobile />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
