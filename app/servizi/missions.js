export const missions = [
  {
    slug: "brand-mission",
    title: "Brand Mission",
    need: "Devo costruire o rimettere a fuoco un’identità.",
    summary: "Per dare a un’attività una direzione riconoscibile, dalle parole ai segni visivi.",
    image: "/assets/brand_mission.webp",
  },
  {
    slug: "digital-mission",
    title: "Digital Mission",
    need: "Devo progettare o rinnovare qualcosa di digitale.",
    summary: "Per trasformare contenuti e funzioni in un sito, uno shop o una pagina che le persone possano usare.",
    image: "/assets/digital_mission.webp",
  },
  {
    slug: "launch-mission",
    title: "Launch Mission",
    need: "Devo portare una nuova idea sul mercato.",
    summary: "Per partire dall’obiettivo di lancio e capire quali attività servono davvero.",
    image: "/assets/launch_mission.webp",
  },
  {
    slug: "orbit-check",
    title: "Orbit Check",
    need: "Ho già qualcosa, ma non capisco cosa non sta funzionando.",
    summary: "Per leggere ciò che esiste, individuare le priorità e decidere cosa migliorare.",
    image: "/assets/orbit_check.webp",
  },
];

export const missionDetails = {
  "brand-mission": {
    intro: "Parti da zero, stai cambiando direzione o la tua immagine non ti rappresenta più? Mettiamo a fuoco ciò che sei e costruiamo un’identità che puoi usare con coerenza.",
    fit: "Quando il brand ha bisogno di una base chiara prima di scegliere come comunicarla.",
    groups: [
      { title: "Direzione", items: ["Naming, posizionamento e strategia di brand", "Tone of voice e parole chiave"] },
      { title: "Identità visiva", items: ["Logo, palette e tipografia", "Immagine coordinata, packaging e linee guida"] },
    ],
    result: "Un sistema di identità completo e utilizzabile, con scelte visive e verbali che lavorano insieme.",
    crew: "Elisa può occuparsi dell’identità visiva; Alice può entrare quando servono naming, tone of voice o contenuti. Sono professioniste indipendenti: la squadra si compone secondo il progetto.",
    crewMembers: ["Elisa", "Alice"],
    milestones: ["Direzione", "Identità", "Sistema"],
    next: "Questa missione definisce l’identità. Sito, e-commerce, social e attivazioni digitali possono essere affrontati in un percorso successivo, a partire da Digital Mission quando serve un prodotto digitale.",
    related: ["digital-mission", "launch-mission", "orbit-check"],
  },
  "digital-mission": {
    intro: "Un sito da creare, uno shop da rinnovare o una landing page da progettare? Lavoriamo sull’esperienza digitale con cui la tua attività comunica e lavora.",
    fit: "Quando il bisogno principale è un prodotto digitale chiaro, accessibile e pronto per essere usato.",
    groups: [
      { title: "Esperienza e contenuti", items: ["UX/UI e architettura dei contenuti", "Testi, contenuti e SEO quando pertinenti"] },
      { title: "Realizzazione", items: ["Siti web, e-commerce e landing page", "Sviluppo, performance e pubblicazione"] },
    ],
    result: "Un prodotto digitale progettato, sviluppato e pubblicato: non soltanto la grafica di un sito.",
    crew: "Miranda può seguire UX/UI, Francesca lo sviluppo e Alice contenuti o SEO. Altre competenze entrano solo se il progetto le richiede.",
    crewMembers: ["Miranda", "Francesca", "Alice"],
    milestones: ["Progettato", "Sviluppato", "Pubblicato"],
    next: "Se manca ancora una direzione di brand, si può partire da Brand Mission. Se il digitale è parte di un lancio più ampio, guarda Launch Mission.",
    related: ["brand-mission", "launch-mission", "orbit-check"],
  },
  "launch-mission": {
    intro: "Hai un nuovo prodotto, servizio o progetto da portare sul mercato, ma non sai ancora quali strumenti servano? Partiamo dall’obiettivo di business e costruiamo la regia del lancio.",
    fit: "Quando la domanda è come far arrivare una nuova idea alle persone, prima ancora di scegliere un singolo servizio.",
    groups: [
      { title: "Definire la direzione", items: ["Obiettivo di lancio, pubblico e messaggio", "Attività e competenze da coinvolgere in base al progetto"] },
      { title: "Attivare il progetto", items: ["Branding, sito, landing page o e-commerce, se necessari", "Contenuti, advertising, social, shooting, email o materiali fisici, quando pertinenti e disponibili"] },
    ],
    result: "Una regia del lancio con le attività necessarie selezionate per il progetto, invece di un elenco fisso di deliverable.",
    crew: "Mitha costruisce la squadra intorno all’obiettivo. Le quattro freelance collaborano dove le loro competenze sono utili; eventuali figure esterne si coinvolgono solo quando necessarie e disponibili.",
    crewMembers: ["Alice", "Miranda", "Elisa", "Francesca"],
    milestones: ["Obiettivo", "Regia", "Lancio"],
    next: "Se hai già individuato come bisogno principale l’identità o il sito, puoi partire da Brand Mission o Digital Mission.",
    related: ["brand-mission", "digital-mission", "orbit-check"],
  },
  "orbit-check": {
    intro: "Hai già un brand, un sito o attività di comunicazione, ma i risultati non sono quelli attesi? Prima di rifare tutto, capiamo dove si trova il problema.",
    fit: "Quando esiste già qualcosa da osservare e servono criteri per decidere il prossimo intervento.",
    groups: [
      { title: "Identità e presenza", items: ["Brand e chiarezza del posizionamento", "Sito, UX e accessibilità", "SEO e visibilità GEO nei sistemi basati su AI"] },
      { title: "Attività e dati", items: ["Contenuti, social e advertising", "Funnel e performance", "Analytics e dati reali, quando disponibili"] },
    ],
    result: "Diagnosi, priorità e roadmap operativa. L’analisi mette in ordine ciò che emerge e indica da dove intervenire.",
    crew: "La squadra viene composta in base alle aree da analizzare. Ogni professionista indipendente contribuisce dove ha competenza pertinente.",
    crewMembers: ["Alice", "Miranda", "Elisa", "Francesca"],
    milestones: ["Diagnosi", "Priorità", "Roadmap operativa"],
    next: "La roadmap ti aiuta a scegliere come proseguire dopo l’analisi.",
    related: ["brand-mission", "digital-mission", "launch-mission"],
  },
};
