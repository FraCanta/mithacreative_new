"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function LenisScroll() {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      anchors: { offset: -110, duration: 0.85 },
      stopInertiaOnNavigate: true,
    });
    lenisRef.current = lenis;
    let frame;

    function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    const hash = decodeURIComponent(window.location.hash);

    if (!hash) {
      lenisRef.current?.scrollTo(0, { immediate: true, force: true });
      window.scrollTo(0, 0);
      return;
    }

    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1));
      if (!target) return;

      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, { offset: -110, duration: 0.85, force: true });
      } else {
        target.scrollIntoView({ behavior: "auto", block: "start" });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
