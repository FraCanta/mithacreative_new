"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const TRANSITION_CLASS = "is-route-changing";

export default function RouteTransition({ children }) {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const safetyTimer = useRef(null);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const startTransition = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = event.target.closest("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin) return;
      if (destination.pathname === window.location.pathname && destination.search === window.location.search) return;

      document.documentElement.classList.add(TRANSITION_CLASS);
      setAnnouncement("Caricamento della nuova pagina");
      window.clearTimeout(safetyTimer.current);
      safetyTimer.current = window.setTimeout(() => {
        document.documentElement.classList.remove(TRANSITION_CLASS);
        setAnnouncement("");
      }, 8000);
    };

    document.addEventListener("click", startTransition);
    return () => {
      document.removeEventListener("click", startTransition);
      window.clearTimeout(safetyTimer.current);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove(TRANSITION_CLASS);
    window.clearTimeout(safetyTimer.current);

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setAnnouncement("Pagina caricata");
    const announcementTimer = window.setTimeout(() => setAnnouncement(""), 700);
    return () => window.clearTimeout(announcementTimer);
  }, [pathname]);

  return (
    <>
      <div className="route-progress" aria-hidden="true" />
      <div className="route-veil" aria-hidden="true" />
      <p className="sr-only" role="status" aria-live="polite">{announcement}</p>
      <main id="contenuto" tabIndex={-1} className="route-content" key={pathname}>
        {children}
      </main>
    </>
  );
}
