"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";

export function useHeroIntro() {
  const [phase, setPhase] = useState("pending");
  const [flights, setFlights] = useState([]);
  const sourceRef = useRef(null);
  const titleRef = useRef(null);
  const eligible = useRef(null);
  const complete = useCallback(() => {
    document.documentElement.removeAttribute("data-mitha-intro");
    setPhase("done");
  }, []);
  const travel = useCallback(() => setPhase("image"), []);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (eligible.current === null) eligible.current = root.hasAttribute("data-mitha-intro") && !preference.matches;
    if (!eligible.current) {
      complete();
      return;
    }
    root.dataset.mithaIntro = "compact";
    setPhase("compact");
    try { localStorage.setItem("mitha-intro-seen", "1"); } catch { /* Il sito funziona anche senza storage. */ }
    const onKey = (event) => {
      if (event.key === "Escape" || event.key === "Tab") complete();
    };
    const onPreference = () => { if (preference.matches) complete(); };
    const preventScroll = (event) => { if (root.hasAttribute("data-mitha-intro")) event.preventDefault(); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", complete);
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    preference.addEventListener("change", onPreference);
    const safety = window.setTimeout(complete, 6000);
    return () => {
      root.removeAttribute("data-mitha-intro");
      window.clearTimeout(safety);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", complete);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      preference.removeEventListener("change", onPreference);
    };
  }, [complete]);

  useLayoutEffect(() => {
    if (phase === "pending" || phase === "done") return;
    document.documentElement.dataset.mithaIntro = phase;
    let timer;
    if (phase === "compact") {
      timer = window.setTimeout(() => {
        const sources = [...(sourceRef.current?.querySelectorAll("[data-intro-word]") || [])];
        const targets = [...(titleRef.current?.querySelectorAll("[data-hero-word]") || [])];
        const positions = sources.map((source) => {
          const target = targets.find((item) => item.dataset.heroWord === source.dataset.introWord && item.getBoundingClientRect().width > 0);
          if (!target) return null;
          const from = source.getBoundingClientRect();
          const to = target.getBoundingClientRect();
          const font = getComputedStyle(target);
          return { id: source.dataset.introWord, text: source.textContent, left: to.left, top: to.top, width: to.width, height: to.height, fontSize: font.fontSize, fontFamily: font.fontFamily, lineHeight: font.lineHeight, x: from.left - to.left, y: from.top - to.top, scaleX: from.width / to.width, scaleY: from.height / to.height };
        });
        if (positions.length !== 6 || positions.some((item) => !item)) { complete(); return; }
        setFlights(positions);
        setPhase("travel");
      }, 700);
    } else if (phase === "image") {
      timer = window.setTimeout(() => setPhase("details"), 700);
    } else if (phase === "details") {
      timer = window.setTimeout(() => setPhase("menu"), 950);
    } else if (phase === "menu") {
      timer = window.setTimeout(complete, 450);
    }
    return () => window.clearTimeout(timer);
  }, [phase, complete]);

  return { phase, flights, sourceRef, titleRef, finish: { complete, travel } };
}
