import PageClient from "./page.client";
import { createPageMetadata } from "./lib/seo";

export const metadata = createPageMetadata({
  title: "Mitha Creative — Brand, digitale e lancio di progetti",
  description: "Mitha è una rete di quattro freelance indipendenti. Scegli la missione da cui partire per brand, UX/UI, sito web, e-commerce o lancio.",
  path: "/",
});

export default function Home() {
  return <PageClient />;
}
