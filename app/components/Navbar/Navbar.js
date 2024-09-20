"use client";

import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/logo.png";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import Cta from "../Cta/Cta";
import Mobile from "../Mobile/Mobile";

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          onClick={() => setTheme("light")}
          title="dark-mode "
          aria-label="dark-mode"
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
          title="dark-mode"
          aria-label="dark-mode"
          onClick={() => setTheme("dark")}
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
  return (
    <nav className="w-[90%] h-[80px] lg:h-[100px] py-8 mx-auto flex items-center justify-between text-primary dark:text-white ">
      <div>
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

      <ul className="items-center justify-center hidden gap-12 text-xl font-regular lg:flex ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Chi siamo</Link>
        </li>
        <li>
          <Link href="/">Servizi</Link>
        </li>
        <li>
          <Link href="/">Portfolio</Link>
        </li>
        <li>
          <Link href="/">Contatti</Link>
        </li>
      </ul>
      <div className="flex items-center gap-10">
        {renderThemeChanger()}

        <div className="hidden lg:block ">
          <Cta link="/">Inizia il progetto</Cta>
        </div>
        <div className="block lg:hidden">
          <Mobile />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
