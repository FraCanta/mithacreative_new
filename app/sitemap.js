import { missions } from "./servizi/missions";
import { isSearchIndexingEnabled, siteUrl } from "./lib/seo";

export default function sitemap() {
  if (!isSearchIndexingEnabled || !siteUrl) return [];

  const staticPaths = [
    "/",
    "/servizi",
    "/chi-siamo",
    "/collabora-con-noi",
    "/contatti",
    "/inizia-il-progetto",
    "/faq-domande-frequenti",
    "/sostenibilita",
  ];
  const missionPaths = missions.map(({ slug }) => `/servizi/${slug}`);

  return [...staticPaths, ...missionPaths].map((path) => ({
    url: new URL(path, `${siteUrl}/`).toString(),
  }));
}
