"use client";

import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marquee/marquee";
import Head from "next/head";
import { useEffect } from "react";
import Lenis from "lenis";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Cta from "./components/Cta/Cta";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Head>
        <title>Mitha creative</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Hero />
      <Marquee />
      <section className="grid grid-cols-1 lg:grid-cols-2 my-10 w-[90%] mx-auto  lg:py-20 items-center gap-y-6 lg:gap-x-8">
        <div className="relative w-[350px] lg:w-full  lg:h-[550px] aspect-square">
          <Image
            src="/assets/astronautaweb2.webp"
            alt="astronauta web"
            fill
            className="object-contain rotate-[-25deg]"
          />
        </div>
        <div className="flex flex-col gap-y-8">
          <h2 className="text-4xl font-bold lg:text-5xl text-primary dark:text-white">
            Web design & Brand Identity
          </h2>
          <p className="text-primary dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p className="text-primary/75 dark:text-white/75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <ul className="grid gap-4 lg:grid-flow-col lg:grid-rows-3">
            <li className="flex items-center gap-1">
              <Icon
                icon="mdi:star-four-points"
                width="1rem"
                height="1rem"
                className="text-primary dark:text-white"
              />
              <span className="ml-2">Lorem ipsum dolor sit amet</span>
            </li>
            <li className="flex items-center gap-1">
              <Icon
                icon="mdi:star-four-points"
                width="1rem"
                height="1rem"
                className="text-primary dark:text-white"
              />
              <span className="ml-2">Lorem ipsum dolor sit amet</span>
            </li>
            <li className="flex items-center gap-1">
              <Icon
                icon="mdi:star-four-points"
                width="1rem"
                height="1rem"
                className="text-primary dark:text-white"
              />
              <span className="ml-2">Lorem ipsum dolor sit amet</span>
            </li>
            <li className="flex items-center gap-1">
              <Icon
                icon="mdi:star-four-points"
                width="1rem"
                height="1rem"
                className="text-primary dark:text-white"
              />
              <span className="ml-2">Lorem ipsum dolor sit amet</span>
            </li>
            <li className="flex items-center gap-1">
              <Icon
                icon="mdi:star-four-points"
                width="1rem"
                height="1rem"
                className="text-primary dark:text-white"
              />
              <span className="ml-2">Lorem ipsum dolor sit amet</span>
            </li>
            <li className="flex items-center gap-1">
              <Icon
                icon="mdi:star-four-points"
                width="1rem"
                height="1rem"
                className="text-primary dark:text-white"
              />
              <span className="ml-2">Lorem ipsum dolor sit amet</span>
            </li>
          </ul>
          <Cta link="/">Get started</Cta>
        </div>
      </section>
      <section className="w-[90%] mx-auto flex flex-col gap-6 min-h-screen">
        <div className="flex justify-center w-full lg:text-center">
          <h2 className="text-4xl font-bold lg:text-5xl text-primary dark:text-white">
            Features are more helpful <br /> to create creative shapes as well
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 w-full h-[500px] gap-4">
          <div className="rounded-[20px] bg-primary dark:bg-purple relative">
            <Image
              src="/assets/stars.svg"
              fill
              className="object-cover w-full h-full "
              alt=""
            />
          </div>
          <div className="rounded-[20px] bg-purple/35 dark:bg-white p-6 flex flex-col h-full justify-between">
            <div className="text-2xl font-bold text-primary">01</div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-primary">Research</h3>
              <p className="text-primary/80 leading-[1.3]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="rounded-[20px] bg-purple/35 dark:bg-white p-6 flex flex-col h-full justify-between">
            <div className="text-2xl font-bold text-primary">02</div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-primary">Plan & Sketch</h3>
              <p className="text-primary/80 leading-[1.3]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>{" "}
          <div className="rounded-[20px] bg-purple/35 dark:bg-white p-6 flex flex-col h-full justify-between">
            <div className="text-2xl font-bold text-primary">03</div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-primary">Customize</h3>
              <p className="text-primary/80 leading-[1.3]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>{" "}
          <div className="rounded-[20px] bg-purple/35 dark:bg-white p-6 flex flex-col h-full justify-between">
            <div className="text-2xl font-bold text-primary">04</div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-primary">User Testing</h3>
              <p className="text-primary/80 leading-[1.3]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>{" "}
        </div>
      </section>
      <section className="h-screen my-20 bg-primary dark:bg-white"></section>
      <section className="h-screen my-20 "></section>
    </>
  );
}
