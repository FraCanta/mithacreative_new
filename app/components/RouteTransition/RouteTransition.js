"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const TRANSITION_CLASS = "is-route-changing";

export default function RouteTransition({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const isFirstRender = useRef(true);
  const safetyTimer = useRef(null);
  const prefetchedRoutes = useRef(new Set());
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const getInternalDestination = (event) => {
      const link = event.target.closest?.("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return null;

      const destination = new URL(link.href, window.location.href);
      return destination.origin === window.location.origin ? destination : null;
    };

    const prefetchDestination = (event) => {
      const destination = getInternalDestination(event);
      if (!destination || destination.pathname === window.location.pathname) return;

      const route = `${destination.pathname}${destination.search}`;
      if (prefetchedRoutes.current.has(route)) return;
      prefetchedRoutes.current.add(route);
      router.prefetch(route);
    };

    const startTransition = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const destination = getInternalDestination(event);
      if (!destination) return;
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
    document.addEventListener("pointerover", prefetchDestination, { passive: true });
    document.addEventListener("focusin", prefetchDestination);
    return () => {
      document.removeEventListener("click", startTransition);
      document.removeEventListener("pointerover", prefetchDestination);
      document.removeEventListener("focusin", prefetchDestination);
      window.clearTimeout(safetyTimer.current);
    };
  }, [router]);

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
