# Audit SEO — Mitha Creative

**Data dell’audit:** 1 novembre 2026  
**Perimetro:** repository locale, route dell’App Router, metadata, navigazione, contenuti e asset presenti in `public`. Il sito pubblicato è stato cercato al dominio `mithacreative-new.mitha-creatives.workers.dev`, l’unico dominio web esplicito trovato nel codice.  
**Modalità:** sola lettura; l’unico file creato è questo report. Non sono state inviate richieste ai form né eseguite modifiche al sito.

## 1. Sintesi dello stato attuale

Il progetto è un sito Next.js 14 con App Router, ospitato/configurato per Cloudflare Workers tramite OpenNext (`package.json`, `wrangler.jsonc`). Le pagine principali hanno già title e description specifici; le quattro pagine Mission hanno metadata generati dai dati, le pagine Privacy e Cookie sono esplicitamente `noindex`. Il sito comunica già in modo sostanzialmente chiaro il modello Mitha: quattro professioniste freelance indipendenti che compongono una squadra secondo il progetto, non un organico dipendente (`app/chi-siamo/page.js`, `app/collabora-con-noi/page.js`, `app/components/Footer/Footer.js`).

L’audit rileva tuttavia lacune tecniche che impediscono di considerare pronta la configurazione SEO: nel repository non risultano canonical, `metadataBase`, Open Graph/Twitter, sitemap o robots.txt; l’origine definitiva non è confermata. La home ha un title molto generico e una description che non rispecchia interamente la struttura delle quattro Mission. Alcuni testi della home non sono allineati ai ruoli aggiornati delle quattro freelance. La privacy e i cookie sono bozze e correttamente esclusi dall’indice.

**Stato del sito pubblicato:** non verificabile da questo ambiente. Le richieste al dominio workers.dev hanno fallito con errore di risoluzione DNS (“Host sconosciuto”); anche il browser di ricerca non ha potuto aprirlo. Questo non dimostra che il sito sia irraggiungibile per tutti: significa che non ho potuto controllare HTML pubblicato, status HTTP, redirect, contenuti effettivamente online, robots/sitemap o prestazioni sul campo. `mithacreative.it` compare nel progetto come dominio email (`info@mithacreative.it`), ma il codice non lo conferma come dominio web definitivo. Non va quindi usato per canonical, sitemap o social metadata finché Mitha non conferma l’URL canonico.

**Valutazione sintetica:** base editoriale buona e coerente con un modello freelance, ma priorità alta a definire il dominio canonico e completare i segnali tecnici di crawl; poi allineare title/testi, verificare le bozze legali e misurare performance/accessibilità sul deployment.

## 2. Route verificate

L’inventario deriva dai file `page.js`, `layout.js` e `route.js` dentro `app/`, non da una lista presunta. “Presente” indica che la route è implementata nel codice; lo status HTTP online non è stato verificato.

| Route | Implementazione locale | Indicizzabilità/configurazione rilevata | Nota |
|---|---|---|---|
| `/` | `app/page.js` | Indexabile per default; metadata presenti | Home e presentazione delle Mission. |
| `/servizi` | `app/servizi/page.js` | Indexabile per default; metadata presenti | Hub delle quattro Mission. |
| `/servizi/brand-mission` | `app/servizi/[missione]/page.js` + `missions.js` | Indexabile per default; metadata dinamici | Pagina statica generata da `generateStaticParams()`. |
| `/servizi/digital-mission` | come sopra | Indexabile per default; metadata dinamici | Pagina statica generata. |
| `/servizi/launch-mission` | come sopra | Indexabile per default; metadata dinamici | Pagina statica generata. |
| `/servizi/orbit-check` | come sopra | Indexabile per default; metadata dinamici | Pagina statica generata. |
| `/chi-siamo` | `app/chi-siamo/page.js` | Indexabile per default; metadata presenti | Descrive le quattro professioniste e il modello di squadra. |
| `/collabora-con-noi` | `app/collabora-con-noi/page.js` | Indexabile per default; metadata presenti | Distingue collaborazione su progetti Mitha e supporto a clienti freelance. |
| `/contatti` | `app/contatti/page.js` | Indexabile per default; metadata presenti | Email, contatti, link al form progetto, FAQ e collaborazioni. |
| `/inizia-il-progetto` | `app/inizia-il-progetto/page.js` | Indexabile per default; metadata presenti | Il form può essere raggiunto con query `?mission=...`; sono varianti della stessa pagina e non hanno canonical esplicito. |
| `/faq-domande-frequenti` | `app/faq-domande-frequenti/page.js` | Indexabile per default; metadata presenti | FAQ HTML con `details/summary`; contiene prezzi e tempi da riconfermare. |
| `/sostenibilita` | `app/sostenibilita/page.js` | Indexabile per default; metadata presenti | Verifica dell’hosting e delle scelte sulle immagini; il badge punta al dominio workers.dev. |
| `/privacy` | `app/privacy/page.js` | `noindex, nofollow` | Contenuto marcato esplicitamente come bozza con campi incompleti. |
| `/cookie` | `app/cookie/page.js` | `noindex, nofollow` | Contenuto marcato esplicitamente come bozza. |
| `/unisciti-a-noi` | `app/unisciti-a-noi/page.js` | Redirect applicativo verso `/collabora-con-noi` | `redirect()` non esplicita una destinazione permanente; verificare lo status online. Se è un alias dismesso, valutare un redirect permanente dopo la conferma. |
| `/mentoring` | Nessun `page.*` nell’App Router | Non è una route implementata nel codice corrente | La cartella `app/mentoring` non contiene una pagina. Un eventuale URL storico va controllato sul deployment e reindirizzato solo se esiste davvero. |
| `/api/progetto` | `app/api/progetto/route.js` | Endpoint POST, non pagina SEO | Flusso server-side del form; non inserirlo in sitemap. |
| `/api/collaborazioni` | `app/api/collaborazioni/route.js` | Endpoint POST, non pagina SEO | Flusso server-side del form; non inserirlo in sitemap. |

Le route HTML usano la stessa shell con `lang="it"`, collegamento salta-contenuto e landmark `<main>` (`app/layout.js`, `app/components/RouteTransition/RouteTransition.js`). Le route API non sono contenuti da indicizzare. Il repository contiene anche `app/chi-siamo/chi-siamo.jsx`, ma non è una route aggiuntiva: Next crea la pagina da `page.js`.

## 3. Analisi per pagina

| Pagina | Intento e pubblico | Elementi corretti | Problemi o verifiche | Priorità e intervento consigliato |
|---|---|---|---|---|
| Home `/` | Capire chi è Mitha e individuare un punto di partenza per un progetto. Potenziali clienti di brand, digitale e lancio. | H1 visibile, link interni alla hub Servizi, Chi siamo, form progetto e collaborazione; le quattro Mission sono collegate direttamente. Il testo in pagina è renderizzato tramite il componente Home (`app/page.client.js`). | Title `Mitha creative` è generico. Description cita siti, e-commerce e brand identity ma non spiega il modello freelance né le quattro Mission. Il testo “content specialist, designer, illustratrice, sviluppatrice” non coincide con i ruoli correnti (Alice Digital Content Specialist, Miranda UX/UI Designer, Elisa Graphic Designer, Francesca Web Developer); “team multidisciplinare” può sembrare una struttura dipendente senza la precisazione “freelance” nella stessa sezione. CTA “Ready for launch?” è in inglese mentre l’esperienza editoriale è prevalentemente italiana. | **Alta.** Definire title/description intorno a creative collective freelance, Mission e competenze verificabili. Allineare la descrizione della squadra ai quattro ruoli effettivi e mantenere esplicita l’indipendenza professionale. |
| Hub `/servizi` | Orientarsi tra bisogni, servizi e possibili punti di partenza. | Spiega che le Mission orientano e non sono pacchetti rigidi; collega le pagine di dettaglio e la pagina di contatto. Title/description già specifici (`app/servizi/page.js`). | “Mission” è un concetto distintivo ma non universalmente autoesplicativo. L’H1 “Da dove parte il tuo progetto?” è leggibile, ma da solo non identifica l’offerta per chi arriva da una ricerca. | **Media.** Conservare la voce di brand, aggiungendo in title/intro il lessico descrittivo che gli utenti riconoscono: branding, UX/UI, siti/e-commerce, lancio, analisi. |
| Brand Mission | Branding, identità visiva, naming/posizionamento e tono di voce. | Pagina dedicata; spiega quando partire, aree considerate, risultato atteso e competenze di Elisa/Alice; rimandi ad altre Mission e form (`missions.js`, `[missione]/page.js`). | H1/title usano solo “Brand Mission”; la description è generata da bisogno + summary e non nomina “branding” o “identità visiva”. Scope e deliverable sono descritti in modo sintetico; la disponibilità effettiva delle attività specialistiche va confermata. | **Media.** Rendere espliciti branding/identità visiva in title e snippet; verificare che le aree elencate corrispondano ai servizi acquistabili. |
| Digital Mission | UX/UI, progettazione e sviluppo di siti, e-commerce e landing page. | Risultato atteso distingue un prodotto digitale completo dalla sola grafica. Indica esperienza, contenuti e realizzazione; menziona SEO quando pertinente. | Il titolo “Digital Mission” è di marca e la metadata description contiene il bisogno in prima persona, ma non i termini di servizio più cercabili. Evitare di far intendere che ogni progetto includa automaticamente contenuti o SEO. | **Alta.** Nel title e nella description citare UX/UI, siti web ed e-commerce; mantenere chiara la selezione delle attività per progetto. |
| Launch Mission | Pianificare il lancio di un prodotto, servizio o nuova iniziativa. | Parte dall’obiettivo di lancio e non da un elenco fisso di deliverable; specifica che contenuti, advertising, social, shooting ed email sono valutati quando pertinenti e disponibili. | La pagina propone “Un esempio concreto” (nuova linea di cosmetici) senza chiarire nel testo se sia ipotetico o un caso reale. Non va interpretato o marcato come case study senza conferma. Il title non include “lancio”/strategia. | **Media.** Usare “lancio” nel metadata; confermare se l’esempio è illustrativo e, se sì, qualificarlo chiaramente come scenario ipotetico. |
| Orbit Check | Capire perché brand, sito o comunicazione non funzionano e definire le priorità. | Descrive diagnosi e roadmap, contempla UX/accessibilità, SEO/GEO, advertising e analytics quando disponibili; prevede opzioni dopo l’analisi. | “Orbit Check” non chiarisce da solo il contenuto; titolo e snippet possono essere più espliciti. Le promesse dipendono dalla disponibilità di dati del cliente, già riconosciuta nella pagina. | **Alta.** In title/description inserire audit/analisi e priorità per brand, sito e comunicazione. Spiegare che risultati e performance non sono garantiti e dipendono dai dati accessibili. |
| Chi siamo | Verificare identità, competenze, persone e modello di lavoro prima di contattare. | H1 con quattro freelance; presentazione esplicita della rete indipendente, composizione per progetto, profili e missioni; CTA verso servizi, collaborazione e form. Metadata coerenti. | I profili sono sintetici e l’illustrazione della hero ha alt generico. I link personali aiutano l’approfondimento, ma non sostituiscono una biografia professionale verificabile. | **Media.** Mantenere il modello autonomo in tutti i testi; se Mitha lo desidera, chiedere a ciascuna una bio/portfolio autorizzata e descrizione della competenza da pubblicare. |
| Collabora con noi | Freelance che cercano collaborazioni su progetti o supporto per il progetto di un proprio cliente. | La pagina distingue i due percorsi; chiarisce ruoli, cliente, responsabilità, compensi e assenza di assunzione o disponibilità continuativa. CTA al form e metadata pertinenti. | Il modello viene chiamato “squadra”, ma il testo chiarisce bene la composizione progettuale e l’autonomia. Da verificare che le competenze elencate come possibili (Motion, 3D, SEO specialistica, ecc.) siano davvero ricercate e attivabili. | **Media.** Confermare periodicamente le aree; usare i termini “freelance”, “collaborazione tra professionisti” e “progetto” nello snippet. |
| Contatti | Trovare email, modalità di contatto e percorso corretto in base al proprio ruolo. | Email visibile, link al form progetto, collaborazioni e FAQ; indica risposta tipica entro 72 ore e riporta una description utile. | Il testo afferma che Mitha collabora con clienti in tutta Italia e all’estero. È un’informazione già pubblicata nel codice, ma va confermata come attuale. I link social nella pagina non esplicitano `target` e `rel`; non è un difetto di indicizzazione, ma conviene uniformarli ai link esterni del footer. | **Media.** Confermare area servita e tempi di risposta; mantenere NAP/località non compilati finché non ci sono dati ufficiali. |
| Inizia il progetto | Compilare il brief iniziale per una richiesta di lavoro. | Title/description dedicati; spiega processo e tempi e offre email alternativa. Query `mission` precompila l’intento di partenza. | Le varianti con `?mission=` non hanno canonical esplicito. La description parla di “prossimo progetto digitale”, mentre il form copre anche missioni di brand e lancio. Non è necessaria l’indicizzazione di ciascuna variante query. | **Media.** Description più ampia; canonical sulla pagina senza query dopo la conferma del dominio. In sitemap includere solo la pagina pulita. |
| FAQ | Rispondere a domande pre-contatto su servizi, prezzi, tempi e modalità. | Domande in HTML accessibile tramite `details/summary`; sezioni navigabili con ancore; CTA a Contatti. Le risposte sono concrete e leggibili. | Prezzi (€1.500, €2.000, €2.800, consulenza UX/UI da €160) e tempi (4–8 settimane) sono informazioni ad alto rischio di obsolescenza. La risposta su servizi e collaboratrici va riallineata al modello delle quattro freelance indipendenti e alle Mission. È presente un contenitore Elfsight, ma nel repository non compare lo script del widget; lo stato e il caricamento in produzione non sono verificabili. | **Alta.** Confermare importi, cosa includono, IVA, condizioni e tempi prima di promuoverli negli snippet. Allineare la FAQ ai contenuti delle Mission. Verificare il widget e il suo impatto; non aggiungere markup FAQ in modo automatico. |
| Sostenibilità digitale | Capire quali scelte tecniche/di hosting sono dichiarate e cosa prova il badge. | La pagina delimita la portata del badge e dichiara che non certifica l’intero impatto né emissioni zero. | Badge e testo legano la verifica al workers.dev temporaneo; è una possibile incongruenza quando il sito avrà il dominio definitivo. Data/verifica e provider sono dichiarazioni contenute nel codice, non controllate online. | **Media.** Dopo la conferma del dominio, aggiornare badge e verifica; ripetere la verifica della Green Web Foundation e mantenere il limite esplicito della dichiarazione. |
| Privacy e Cookie | Informare sul trattamento dati e sulle tecnologie. | Entrambe `noindex, nofollow`; le pagine segnalano chiaramente di essere bozze, evitando di presentarle come documenti approvati. | Sono incomplete: segnaposto per titolare, contatti, fornitori, tempi di conservazione, basi e tecnologie. Non sono pronte per diventare documenti pubblici definitivi. | **Bloccante prima della rimozione del noindex.** Completare e far approvare i contenuti; non includerli in sitemap finché sono bozze. |

## 4. Problemi tecnici per gravità

### Bloccanti o da chiarire prima del lancio SEO

1. **Dominio canonico non determinato.** Il solo hostname web nel repository è quello workers.dev, usato anche dalla pagina Sostenibilità (`app/sostenibilita/page.js`). `mithacreative.it` compare come indirizzo email, non come URL confermato. Senza origine definitiva non si possono impostare canonical assoluti, sitemap corretta o social URL affidabili.
2. **Privacy e Cookie sono bozze.** `robots: { index: false, follow: false }` è impostato in entrambi i metadata; il testo contiene placeholder espliciti. Mantenere l’esclusione fino a completamento e approvazione dei documenti. Questo è un blocco editoriale/di pubblicazione, non un bug SEO da aggirare.
3. **Confronto con produzione e status HTTP non conclusivi.** DNS non risolto dall’ambiente e nessuna risposta utilizzabile dal browser: restano da verificare redirect, status delle route, robots e sitemap online, canonical HTML, versioni/copy effettivamente pubblicati e indicizzazione reale.

### Importanti

1. **Canonical assenti dal codice.** Non sono definiti `metadataBase` o `alternates.canonical`. Oltre a eventuali alias host e slash, la pagina progetto è raggiungibile con query `?mission=...`; indicare una URL preferita evita di trattare queste varianti come pagine distinte.
2. **Sitemap e robots non presenti nella repository.** Non sono stati trovati `public/robots.txt`, `public/sitemap.xml`, `app/robots.*` o `app/sitemap.*`. Non posso dedurre lo status HTTP del deployment; il progetto non documenta però una generazione alternativa. Dopo la scelta del dominio, generare sitemap con le sole URL canoniche indexabili e dichiararne il percorso in robots. Google raccomanda URL assoluti e canonical nella sitemap ([documentazione sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)).
3. **Social preview non configurate.** Non risultano `openGraph`, `twitter` o immagine social condivisa nei metadata. Il favicon è configurato nel layout, ma non sostituisce una preview OG. Definire immagine, titolo e description coerenti dopo avere stabilito dominio e asset approvato.
4. **Home e FAQ contengono disallineamenti.** I ruoli e il lessico sulla home non riflettono pienamente i profili correnti; FAQ, Mission e collaborazioni devono mantenere gli stessi confini e la stessa descrizione del modello freelance.
5. **Alias `/unisciti-a-noi`.** È implementato come redirect generico; lo status/permanenza effettivi non sono misurati. Se URL vecchio da consolidare, preferire un redirect permanente verificato e aggiornare eventuali link interni.
6. **Widget FAQ di terza parte.** Il componente ha il placeholder Elfsight ma la repository non mostra un’integrazione di caricamento del provider. Non si può stabilire se il widget venga iniettato dall’esterno in produzione. Il caricamento terzo-party può incidere su reattività e layout: verificarlo con il widget attivo e disattivo.

### Miglioramenti

1. **Gerarchia semantica.** Le pagine verificate hanno H1 e sezioni H2/H3 coerenti; la shell fornisce `lang="it"`, skip link e `<main>`. Non emerge un errore strutturale bloccante dal sorgente. Dopo deployment controllare heading generati, contenuto senza JavaScript, link accessibili e contrasto con un crawler/browser.
2. **Immagini e peso.** `next.config.mjs` imposta `images.unoptimized: true`, quindi Next/Image non esegue la trasformazione automatica a runtime. Sono presenti immagini WebP e dimensioni esplicite su molte immagini principali, ma gli asset sono ancora sostanziosi: `collaborazioni_hero.png` circa 1,45 MB; `servizi_hero.webp` circa 715 KB; immagini delle Mission circa 424–547 KB. `public/assets` contiene 79 file per circa 43,3 MB complessivi, inclusi PNG legacy fino a circa 4,2 MB; il totale della cartella non equivale ai byte scaricati per visita. Priorità alle immagini above-the-fold, mantenendo qualità, proporzioni e alt appropriati. Le immagini sotto la piega dovrebbero rimanere lazy; misurare la rete effettiva sul deploy.
3. **Alt text.** Le illustrazioni decorative delle card hanno `alt=""`, scelta corretta se titolo e copy vicini ne portano il significato. Alcuni alt sono generici (“Astronauta”, “Illustrazione Mitha…”); renderli descrittivi solo se l’immagine aggiunge informazione non già espressa dal testo. Il badge Green Web Foundation ha un alt informativo.
4. **Dati strutturati.** Nessun JSON-LD/Schema.org è presente. Dopo conferma del nome e dell’URL, può essere utile `Organization`/`WebSite` con sole informazioni documentate; breadcrumb strutturati sulle quattro Mission sono una possibilità. Non usare `LocalBusiness` senza sede/area e idoneità confermate. I dati strutturati devono riflettere testo visibile e non garantiscono rich result ([linee guida Google](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)).
5. **Core Web Vitals non misurabili dal repository.** Non sono disponibili dati CrUX/Search Console/PageSpeed del dominio, né un sito di produzione raggiungibile. Non assegno quindi punteggi o stato “buono/cattivo”. Verificare LCP, INP e CLS al 75° percentile, separati mobile/desktop; i riferimenti correnti indicano LCP ≤2,5 s, INP ≤200 ms e CLS ≤0,1 ([Web Vitals](https://web.dev/articles/vitals?hl=it)). Le animazioni della home e i componenti client sono aree da misurare, non problemi di performance dimostrati.

## 5. Mappa contenuti e intenti/query

Le formulazioni sotto derivano dai servizi e dai testi verificati nel codice. Sono **ipotesi di intent/query**, non parole chiave con volume o difficoltà misurati: non sono stati forniti Search Console, analytics, campagne, dati di keyword research o SERP geolocalizzate.

| Area | Contenuto effettivo verificato | Intento/query da presidiare (ipotesi) | Conferme o ricerca necessarie |
|---|---|---|---|
| Identità e branding | Brand Mission: naming, posizionamento, tone of voice, logo, palette, tipografia, immagine coordinata, packaging, linee guida. | branding; identità visiva; logo e immagine coordinata; naming e tono di voce. | Confermare che tutti i deliverable sono effettivamente offerti e quali sono specialistici/condizionati. Keyword research per Italia e settore/linguaggio dei clienti. |
| Digitale | UX/UI, architettura contenuti, siti, e-commerce, landing page, sviluppo, performance, pubblicazione; contenuti/SEO quando pertinenti. | realizzazione sito web; web design; UX/UI; sviluppo e-commerce; landing page; rinnovare sito. | Chiarire piattaforme/tecnologie e limiti che si desidera dichiarare; niente piattaforme dedotte dal codice. |
| Lancio | Regia basata su obiettivo; attività di branding, sito, contenuti, advertising, social, shooting, email o materiali fisici quando utili e disponibili. | lancio nuovo prodotto/servizio; strategia di lancio; comunicazione lancio. | Confermare ambiti geografici/settori e qualificare l’esempio cosmetico come ipotetico o caso documentato. |
| Analisi | Orbit Check: diagnosi di brand/presenza, sito/UX/accessibilità, SEO/GEO, comunicazione e dati disponibili; priorità e roadmap. | audit sito web; analisi UX; verifica SEO; capire perché un sito non converte; roadmap digitale. | Specificare metodo, deliverable e dati necessari senza promettere risultati non controllabili. Confronto SERP da fare. |
| Collaborazioni | Rete indipendente; professionisti autonomi; collaborazione su progetti Mitha o supporto a un cliente già acquisito dal freelance. | collaborazione freelance; squadra freelance per progetto; partner freelance web/branding; supporto a progetto cliente. | Confermare disponibilità e figure ricercate in ogni periodo. Non descrivere come assunzione, agenzia tradizionale o team dipendente. |
| Persone | Quattro profili con ruoli correnti: Alice Bolla, Digital Content Specialist; Miranda Giaccon, UX/UI Designer; Elisa Avantey, Graphic Designer; Francesca Cantale, Web Developer. | nomi professioniste + discipline; portfolio e competenze individuali. | Bio, esperienza, qualifiche, portfolio e consenso pubblicazione devono provenire dalle persone. Non inferire seniority o risultati. |
| Costi e tempi | FAQ riporta prezzi iniziali e 4–8 settimane per sito vetrina; form spiega risposta entro 72 ore lavorative. | costo sito web; costo e-commerce; tempi realizzazione sito; consulenza UX/UI. | Ricerca query + conferma formale di importi, IVA, inclusioni, condizioni, validità e variabilità. |
| Geografia | Contatti afferma che Mitha lavora con clienti in tutta Italia e anche all’estero; non è indicato un indirizzo pubblico. | servizi freelance in Italia; consulenza/progetto da remoto, se confermato. | Confermare che l’affermazione è attuale e chiarire se il lavoro è remoto, ibrido o anche in presenza. Non creare pagine città/LocalBusiness senza copertura reale e contenuto utile. |

### Chiarezza per motori generativi (GEO/LLM)

**Punti forti verificati:** la pagina Chi siamo definisce Mitha come rete di quattro professioniste indipendenti; le Mission sono quattro, hanno slug e descrizioni stabili; le pagine Mission esplicitano quando partire, aree possibili, risultato e persone coinvolgibili. La pagina collaborazioni dichiara in modo insolitamente chiaro autonomia, responsabilità, compensi e assenza di rapporto di lavoro. Questi passaggi rendono più facile estrarre risposte senza dedurre che Mitha sia un’agenzia con dipendenti.

**Ambiguità da correggere nei contenuti:** la home reintroduce “team”, “team multidisciplinare” e un elenco di ruoli non allineato alla pagina Chi siamo; la FAQ parla di “nostre collaboratrici” per alcune discipline. Mission è una metafora di marca: ogni occorrenza dovrebbe essere accompagnata almeno una volta dalla descrizione concreta del bisogno/servizio. Prezzi, tempi e disponibilità vanno datati/riconfermati. Il contenuto attuale è già HTML semantico e non richiede un file “AI” per essere comprensibile. Dati strutturati sono un supporto ai contenuti verificabili, non un loro sostituto.

## 6. Proposte di title e meta description

Proposte editoriali da confermare; **non sono state applicate**. Le descrizioni sono basate solo sul codice attuale. L’URL canonico non è incluso e va aggiunto solo dopo conferma del dominio web definitivo.

| Route | Title proposto | Meta description proposta |
|---|---|---|
| `/` | Mitha Creative — Brand, digitale e lancio di progetti | Mitha è una rete di quattro freelance indipendenti. Scegli la missione da cui partire per brand, UX/UI, sito web, e-commerce o lancio. |
| `/servizi` | Servizi creativi per brand e digitale — Mitha | Brand Mission, Digital Mission, Launch Mission e Orbit Check: quattro punti di partenza, con attività scelte in base al progetto. |
| `/servizi/brand-mission` | Brand Mission: branding e identità visiva — Mitha | Definisci naming, posizionamento, tono di voce e identità visiva. La Brand Mission costruisce una direzione riconoscibile per il tuo brand. |
| `/servizi/digital-mission` | Digital Mission: UX/UI, siti ed e-commerce — Mitha | Progettiamo e sviluppiamo siti web, e-commerce e landing page. UX/UI, contenuti e sviluppo si definiscono in base alle esigenze del progetto. |
| `/servizi/launch-mission` | Launch Mission: pianificare il lancio — Mitha | Parti dall’obiettivo e individua le attività utili per portare una nuova idea sul mercato, coinvolgendo le competenze necessarie. |
| `/servizi/orbit-check` | Orbit Check: analisi e priorità digitali — Mitha | Analizziamo brand, sito e comunicazione già esistenti per individuare criticità, priorità e possibili prossimi interventi. |
| `/chi-siamo` | Chi siamo: quattro freelance indipendenti — Mitha | Alice, Miranda, Elisa e Francesca: competenze autonome che si uniscono intorno alle necessità di ogni progetto, con Mitha come punto di contatto. |
| `/collabora-con-noi` | Collaborare da freelance con Mitha Creative | Sei freelance o hai un cliente che richiede più competenze? Scopri come costruiamo collaborazioni autonome e squadre su misura per progetto. |
| `/contatti` | Contatti Mitha Creative — Parliamo del tuo progetto | Scrivi a Mitha o raccontaci il progetto. Ti aiutiamo a capire da quale Mission partire e come coinvolgere le competenze adatte. |
| `/inizia-il-progetto` | Inizia un progetto con Mitha Creative | Raccontaci obiettivi, contesto e punto di partenza. Valutiamo insieme le competenze utili e il prossimo passo per il tuo progetto. |
| `/faq-domande-frequenti` | FAQ Mitha — Servizi, costi e tempi | Risposte su Mission, servizi, costi indicativi, tempistiche e modalità di collaborazione. Verifica le condizioni aggiornate prima di inviare la richiesta. |
| `/sostenibilita` | Sostenibilità digitale — Scelte Mitha | Scopri cosa verifica il badge Green Web Foundation e quali interventi Mitha dichiara su hosting e peso delle immagini, con i limiti della verifica. |

Per `/privacy` e `/cookie` non propongo snippet indicizzabili: devono restare `noindex` finché le bozze non vengono completate e approvate. Per `/unisciti-a-noi` non serve un title se è un redirect permanente verso la pagina Collaborazioni.

## 7. SEO locale e autorevolezza

- Il codice dichiara disponibilità a lavorare in tutta Italia e all’estero, ma non fornisce una sede o un indirizzo (`app/contatti/page.js`). Prima di usare segnali “local business”, chiedere se esiste una sede visitabile, in quale città, se si ricevono clienti e quale area viene effettivamente servita.
- Non aggiungere città, indirizzi, orari, telefono, recensioni, clienti, numeri di progetto, risultati o qualifiche non presenti e confermati. Non emerge dal repository una base per inventare una scheda Google Business Profile o markup `LocalBusiness`.
- L’autorevolezza può essere rafforzata con profili professionali e portfolio collegati alle singole persone, descrizioni delle responsabilità, casi di lavoro documentati e autorizzati, e fonti/crediti quando pertinenti. Servono materiali e approvazione delle freelance; non sono ricavabili dal solo codice.
- Prima di attività off-site, confermare nome pubblico uniforme, URL definitivo, email/contatto, profili social ufficiali e titolarità del marchio. Email con dominio `mithacreative.it` non prova da sola la titolarità o la pubblicazione del sito su quel dominio.

## 8. Roadmap di implementazione

### Fase 1 — decisioni e verifiche di proprietà

**Dipendenze Mitha:** confermare URL web canonico (protocollo, host, www/non-www); confermare che il deploy workers.dev non sia più la versione pubblica desiderata; verificare la pagina live e la configurazione Cloudflare. Confermare anche area servita e validità di prezzi/tempi.

### Fase 2 — controlli live e indicizzazione

Da un ambiente con DNS e accesso al deployment: controllare status HTTP, redirect host/slash, HTML servito, accesso Googlebot, `/robots.txt`, `/sitemap.xml`, canonical, query del form e route obsolete. Verificare Search Console e indicizzazione dopo aver verificato la proprietà del dominio. Non includere API, noindex o redirect nella sitemap.

### Fase 3 — segnali tecnici

Con dominio approvato: definire `metadataBase`, canonical per le pagine HTML, `robots` e sitemap automatizzati dalle route effettive; mantenere noindex per privacy/cookie finché bozze. Aggiungere Open Graph/Twitter con asset approvato e alt/preview adatti. Stabilire redirect permanente solo per alias storici confermati. Eventuali dati `Organization`/`WebSite` e breadcrumb devono usare dati reali e corrispondere ai contenuti visibili.

### Fase 4 — revisione editoriale

Allineare home e FAQ a ruoli e lessico attuali; rendere espliciti i concetti di freelance indipendenti, Mission e servizi concreti. Confermare prezzi, IVA, condizioni, disponibilità, tempi di risposta e l’esempio di Launch Mission. Usare le proposte di title/description come base di revisione.

### Fase 5 — immagini, accessibilità e performance

Ottimizzare in locale gli asset realmente caricati, in particolare hero PNG e immagini prioritarie, senza dipendere da trasformazioni di un provider. Verificare formati, dimensioni sorgente/render, `sizes`, alt, caricamento lazy e dimensioni trasferite. Controllare il widget Elfsight e le risorse YouTube esterne. Fare test mobile e desktop con Lighthouse/PageSpeed e dati reali CrUX/Search Console per Core Web Vitals; misurare anche tastiera, focus, lettore di schermo e JavaScript.

### Fase 6 — documenti e monitoraggio

Mitha deve fornire/approvare titolare e contatti privacy, fornitori realmente usati, finalità, tempi di conservazione e strumenti/cookie attivi. Solo a quel punto rimuovere `noindex` se desiderato. Dopo il lancio monitorare query, impressioni, CTR, pagine indicizzate, errori e Core Web Vitals.

## 9. Cinque priorità operative

1. **Confermare il dominio web definitivo e raggiungere l’ambiente di produzione** — dipende da Mitha/hosting; senza questo non è possibile verificare crawl, status, canonical o misure reali.
2. **Completare e approvare Privacy e Cookie** — dipende da Mitha e dai fornitori; mantenerle `noindex` finché sono bozze.
3. **Configurare canonical, robots, sitemap e social metadata sull’origine confermata** — dipende dal dominio definitivo e dalla lista URL di produzione.
4. **Allineare home e FAQ al modello delle quattro freelance e ai ruoli correnti** — parte è verificabile nel codice; confermare prezzi, tempistiche, offerta advertising/SEO e esempio cosmetico prima di aggiornare le affermazioni.
5. **Misurare e alleggerire le immagini caricate davvero, iniziando dalla hero Collaborazioni** — peso degli asset verificato localmente; beneficio reale da quantificare sul deployment con misure mobile/desktop.

### Informazioni richieste a Mitha

- URL canonico definitivo e preferenza host (`www` o senza `www`).
- Conferma di città/sede, area geografica e modalità di servizio remoto/in presenza.
- Prezzi, IVA, inclusioni e condizioni attuali; tempi dei progetti e promessa di risposta.
- Conferma dell’esempio cosmetico come scenario ipotetico o case study autorizzato.
- Conferma di servizi effettivamente disponibili (in particolare advertising, SEO, piattaforme e competenze esterne) e delle figure ricercate.
- Dati e approvazione necessari per le informative, asset social preview e bio/portfolio autorizzati.

### Fonti tecniche consultate

- Repository locale: `package.json`, `wrangler.jsonc`, `next.config.mjs`, `app/**/page.js`, `app/layout.js`, `app/servizi/missions.js`, `app/components/**`, `public/assets/**`.
- Google Search Central, [creazione e invio delle sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
- Google Search Central, [linee guida generali sui dati strutturati](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).
- web.dev, [Web Vitals e soglie Core Web Vitals](https://web.dev/articles/vitals?hl=it).

## 10. Esito dell’implementazione della roadmap

Questa sezione aggiorna l’audit iniziale dopo il controllo del codice corrente. Le note precedenti descrivono la baseline esaminata il 1 novembre 2026; gli interventi qui elencati sono stati applicati alla repository locale e non pubblicati.

### Interventi eseguiti

- Centralizzata la configurazione SEO in `app/lib/seo.js`. `SITE_URL` accetta solo un’origine HTTPS valida e rifiuta host locali e di preview (`*.workers.dev`, `*.pages.dev`, `*.vercel.app`). `SEO_INDEXING_ENABLED=true` è richiesto insieme all’origine valida per produrre canonical e segnali d’indicizzazione. Non è stato inserito un dominio predefinito.
- Aggiunti `app/robots.js` e `app/sitemap.js`. Quando la configurazione manca o l’indicizzazione è disabilitata, le pagine emettono `noindex, nofollow`, robots permette il crawl necessario a leggere il `noindex` e non pubblica una sitemap di URL. Con la configurazione attiva la sitemap include le 12 route pubbliche statiche, escludendo Privacy/Cookie, alias, API e varianti con query.
- Aggiornati title e description per home, Servizi, quattro Mission, Chi siamo, Collaborazioni, Contatti, form progetto, FAQ e Sostenibilità. Open Graph e Twitter riportano titolo/descrizione specifici; URL canonico e immagine social assoluti vengono emessi solo con indicizzazione abilitata e dominio configurato. Si riusa l’asset esistente `/assets/servizi_hero.webp` per la preview social, senza aggiungere illustrazioni.
- Mantenuto `noindex, nofollow` permanente per Privacy e Cookie, che restano bozze. Nessun canonical/sitemap viene prodotto per queste pagine.
- Allineati il testo della home e la FAQ al modello di quattro freelance indipendenti: Alice Bolla (copywriting e advertising), Miranda Giaccon (UX/UI), Elisa Avantey (graphic design), Francesca Cantale (web development). Nel selettore della home la scelta SEO assegnata ad Alice è stata corretta in Advertising; la pagina Digital distingue copywriting/contenuti da eventuali attività SEO da valutare per progetto.
- Il form progetto non usa più `useSearchParams()` per leggere la preselezione, che provocava un fallback client sull’intero documento statico. La Mission iniziale viene letta dopo l’hydration; query e payload del form restano invariati. L’HTML generato contiene ora l’H1 server-side.
- Reso descrittivo l’alt della hero Chi siamo; astronauta della hero home e immagine del pulsante contatti hanno alt vuoto perché decorative/ridondanti rispetto all’etichetta accessibile. Alt decorativi delle card restano vuoti.
- Convertita la hero Collaborazioni in WebP a dimensioni e proporzioni invariate: 1.453.108 → 390.566 byte (−73%). Il componente usa il nuovo asset locale; il PNG originale è conservato. I WebP esistenti di hero/mission sono già compressi: una ricompressione di prova a qualità 85 riduceva i file solo dell’1–2%, quindi non sono stati sostituiti.
- Verificati i collegamenti interni esistenti: footer/menu collegano FAQ, Servizi e Mission; le pagine Mission collegano Mission correlate e form; FAQ e Contatti portano a Contatti/form. Non sono stati aggiunti link duplicati che avrebbero alterato i layout.

### File modificati

- Metadata e contenuti: `app/page.js`, `app/page.client.js`, `app/servizi/page.js`, `app/servizi/[missione]/page.js`, `app/servizi/missions.js`, `app/chi-siamo/page.js`, `app/collabora-con-noi/page.js`, `app/contatti/page.js`, `app/inizia-il-progetto/page.js`, `app/faq-domande-frequenti/page.js`, `app/sostenibilita/page.js`, `app/privacy/page.js`, `app/cookie/page.js`.
- Layout/alternative accessibili: `app/layout.js`, `app/components/StepsContact/StepsContact.js`, `app/components/Hero/Hero.js`, `app/components/ContactRound/ContactRound.js`, `app/components/BuildYourCrew/BuildYourCrew.js`.
- Nuovi helper/route SEO: `app/lib/seo.js`, `app/robots.js`, `app/sitemap.js`.
- Asset: `public/assets/collaborazioni_hero.webp` (il PNG originale è rimasto intatto).
- Report: `docs/seo-audit-mitha.md`.

`app/inizia-il-progetto/layout.js` non ha modifiche di contenuto: l’hash del file coincide con `HEAD`; Git può segnalarne solo il cambio di stat/mtime locale.

### Verifiche effettuate

- `yarn lint`: superato, nessun warning o errore.
- `yarn build`: superato sul sorgente finale, con `SEO_INDEXING_ENABLED=false` e directory di output temporanea locale. Le 22 pagine statiche sono state generate; le route delle Mission risultano tutte presenti.
- HTML statico del build preview: 11 route principali controllate, ciascuna con un solo H1, title, description e Open Graph specifici; `noindex, nofollow`; nessun canonical; sitemap vuota e robots senza sitemap dichiarata. Privacy e Cookie sono `noindex` anche indipendentemente dall’ambiente.
- HTML del test di configurazione produzione: eseguito un build locale separato con hostname riservato `seo-check.example.invalid`, non salvato nel codice e mai contattato/pubblicato. Canonical e `og:url` corrispondono alle route; immagini social sono URL HTTPS assoluti; sitemap contiene 12 URL; robots la dichiara. I file generati di test sono stati rimossi.
- `git diff --check`: superato.

### Elementi lasciati in sospeso

- **Dominio definitivo:** Mitha deve fornire l’origine HTTPS canonica e impostare al momento della build di produzione `SITE_URL=https://<dominio-confermato>` e `SEO_INDEXING_ENABLED=true`. In tutte le preview la variabile deve rimanere `false`/non impostata; senza configurazione il codice blocca l’indicizzazione. Non configurare workers.dev o l’hostname di test come fallback.
- **Sito online e Core Web Vitals:** il dominio workers.dev non è stato raggiungibile/risolto da questo ambiente nell’audit. Non sono quindi verificati status HTTP, redirect, HTML effettivo del deployment, Search Console, PageSpeed o dati CrUX. Servono URL definitivo e accesso al sito pubblicato.
- **Dati strutturati:** non aggiunti. Canonical stabile e informazioni pubbliche confermate sono prerequisiti per `Organization`/`WebSite` e breadcrumb assoluti. Non viene aggiunto `LocalBusiness` né dedotta una sede.
- **Bozze Privacy/Cookie:** restano noindex fino a completamento e approvazione dei dati legali e dei fornitori effettivi.
- **Prezzi, tempi, area geografica e Launch example:** non modificati, perché richiedono conferma Mitha. Da confermare importi/IVA/inclusioni, tempi, validità dell’affermazione Italia/estero e se l’esempio cosmetico sia ipotetico o un caso reale.
- **Alias e contenuti esterni:** `/unisciti-a-noi` continua a reindirizzare alla pagina Collaborazioni; lo status HTTP e l’eventuale permanenza non sono verificati. Il placeholder Elfsight in FAQ non mostra lo script nel repository: l’eventuale iniezione in produzione va controllata sul dominio reale.
