import React from "react";
import ServiziClient from "./page.client";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({
  title: "Servizi creativi per brand e digitale — Mitha Creative",
  description: "Brand Mission, Digital Mission, Launch Mission e Orbit Check: quattro punti di partenza, con attività scelte in base al progetto.",
  path: "/servizi",
});
function Servizi() {
  return (
    <div>
      <ServiziClient />
    </div>
  );
}

export default Servizi;
