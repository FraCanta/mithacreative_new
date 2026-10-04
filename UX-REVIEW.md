# Analisi UX e interventi

## Problemi riscontrati
- Servizi conteneva sei schede segnaposto e immagini esterne non definitive.
- Contatti annunciava un modulo assente; Chi siamo mostrava testi da portfolio e un grande spazio vuoto.
- Il burger era un div cliccabile, senza comando da tastiera. Il footer aveva altezze fisse e nessuna navigazione di servizio.
- I link delle immagini nella home puntavano a # e le etichette erano visibili solo al passaggio del mouse.
- Immagini a larghezza fissa, griglie e titoli potevano causare problemi sui piccoli schermi.
- Il questionario permetteva di avanzare con campi vuoti, alcune opzioni condividevano il medesimo valore e mancava la gestione degli errori di rete.
- La route email usava il formato Pages Router in un progetto App Router e riferimenti al precedente marchio.

## Interventi
Palette, immagini e burger menu conservati. Header e contenuto footer al 90%, senza max-width, come richiesto.
Servizi con schede concrete e filtri; Contatti con questionario ed email diretta; Chi siamo con presentazione e metodo, senza inventare persone o biografie. Bozza chi-siamo.jsx preesistente lasciata intatta.
Footer con contatti e altezze adattive. Link della home collegati alle schede servizi. Lingua italiana, salto al contenuto, focus visibile, supporto CSS alle preferenze di movimento ridotto e cleanup dello scroll.
Questionario: avanzamento realmente disabilitato, etichette accessibili, obiettivi distinti, stato di invio ed errori. Endpoint POST compatibile con App Router, validazione e escaping dei contenuti. Mittente Mitha Creative e destinatario configurabile NODEMAILER_TO (default info@mithacreative.it).

## Prima della pubblicazione
- Verificare NODEMAILER_USER, NODEMAILER_PASS e NODEMAILER_TO e collaudare l'invio in un ambiente email di test. Nessuna email reale inviata durante questi controlli.
- Il riferimento alla Privacy Policy nel questionario è preesistente ma non ha una destinazione: fornire il testo e l'URL reali. Non è stato inventato un documento legale.
- Confermare testi commerciali, prezzi FAQ, statistiche, immagini e dati aziendali.
- Il video e gli effetti animati preesistenti richiedono un audit di accessibilità dedicato: gli interventi non equivalgono a una certificazione WCAG completa.

## Comandi
- npm run lint
- npm run build
- npm run dev -- --port 3100
- Per verifiche isolate in PowerShell: $env:NEXT_DIST_DIR = '.next-review'; npm run build

## File modificati
- `.gitignore`
- `app/api/progetto/route.js`
- `app/chi-siamo/page.js`
- `app/components/ContactRound/ContactRound.js`
- `app/components/Cta/Cta2.js`
- `app/components/Footer/Footer.js`
- `app/components/Header/Header.js`
- `app/components/Hero/Hero.js`
- `app/components/Hero/HeroPage.js`
- `app/components/LenisiScroll/LenisScroll.js`
- `app/components/Nav/Nav.js`
- `app/components/Nav/style.module.scss`
- `app/components/StepsContact/StepsContact.js`
- `app/components/Tabs/Tabs.js`
- `app/contatti/page.js`
- `app/faq-domande-frequenti/page.js`
- `app/globals.css`
- `app/inizia-il-progetto/page.js`
- `app/layout.js`
- `app/page.client.js`
- `app/page.js`
- `app/servizi/page.client.js`
- `app/servizi/page.js`
- `next.config.mjs`

## Esito controlli
Lint senza errori o avvisi. Build produzione completata con NEXT_DIST_DIR=.next-review; la cartella predefinita mostrava artefatti mancanti durante i controlli.
Verificati nel browser: filtri servizi (6 → 3), apertura menu ed Escape, allineamento header/footer al 90%, contatti a 390px, blocco avanzamento con nome vuoto e email non valida. Individuata e contenuta l'immagine ruotata che eccedeva la home mobile.

## Revisione successiva: Servizi e Chi siamo
- Servizi: conservati filtri e sei schede; nuova disposizione asimmetrica, immagini più grandi, introduzione compatta e invito al contatto. Rimossi dalla sola introduzione i wrapper Framer Motion per mostrare subito i contenuti.
- Chi siamo: presentazione dello studio, illustrazione esistente e approccio creativo in tre principi; nessun profilo personale segnaposto.
- Barra di scorrimento del documento nascosta su richiesta, senza bloccare lo scroll.
- File: app/servizi/page.client.js, app/servizi/services.module.css, app/components/Tabs/Tabs.js, app/chi-siamo/page.js, app/chi-siamo/about.module.css, app/globals.css.
- Verifiche: npm run lint superato; controlli browser a 390 e 1440 px, filtri 6/3, assenza di overflow orizzontale, ancora approccio e temi chiaro/scuro. Build produzione non ripetuta per questa revisione visiva.
- Anteprima attiva: http://127.0.0.1:3100. Da rivedere manualmente: preferenze estetiche e testi finali.

## Uniformità dei pulsanti
- CTA: riutilizzato Cta2 in Servizi, Chi siamo e Contatti; conservati pillola, puntino e animazione originale. Aggiunta opzione lightSurface per mantenere contrasto sulle superfici viola anche con tema scuro; comportamento predefinito della home invariato.
- File di questa revisione: app/components/Cta/Cta2.js, app/components/Tabs/Tabs.js, app/servizi/page.client.js, app/servizi/services.module.css, app/chi-siamo/page.js, app/chi-siamo/about.module.css, app/contatti/page.js.
- Nessun comando aggiuntivo necessario per l'anteprima attiva. Da validare manualmente: testi e preferenze estetiche finali.

## FAQ e Contatti
- FAQ: otto domande mantenute, raggruppate in Servizi, Costi e Tempi e collaborazione; prezzi e tempi originali conservati. Accordion nativo details/summary al posto del componente Material Tailwind, senza rimuovere la dipendenza dal progetto. Nessun JavaScript aggiunto per l'apertura. Metadata dedicati e collegamenti agli argomenti. Hook Elfsight preesistente conservato.
- Contatti: email in evidenza, tempi di risposta, collegamenti social già presenti nel sito, riquadro per accedere al questionario e suggerimenti per il primo messaggio. Nessun nuovo modulo o invio automatico.
- Larghezza al 90%, tema chiaro/scuro e CTA Cta2 della home conservati.
- File: app/faq-domande-frequenti/page.js, app/faq-domande-frequenti/faq.module.css, app/contatti/page.js, app/contatti/contact.module.css.
- Verifiche: lint superato; desktop 1440px e mobile 390px senza overflow; apertura con Invio e chiusura con Spazio; navigazione Contatti → questionario e Contatti → FAQ confermata; indirizzo mailto verificato senza inviare email.
- Verifica manuale: confermare che prezzi, tempistiche e indirizzi aziendali già presenti siano ancora attuali.
- Build produzione FAQ/Contatti completata con NEXT_DIST_DIR=.next-review: JavaScript iniziale FAQ 94,3 kB (build precedente circa 236 kB); Contatti 94,3 kB. Anteprima produzione sulla porta 3100.

## Anteprima modulo unico e bozza privacy
- Sostituito il questionario a passaggi con un modulo unico. Conservati i nove obiettivi, aggiunti budget 1.500–3.000 euro e ‘Non so ancora’; textarea, label, messaggi di errore, stato di invio, blocco doppio invio e conferma finale.
- Cta2 ora supporta anche un vero button, mantenendo l’aspetto dei link della home; markup interno adattato con span per validità semantica.
- Creata /privacy come bozza noindex, con campi da completare per titolare, conservazione, fornitori e trasferimenti. L’utente ha scelto di fornire questi dati successivamente. Riferimenti ufficiali riportati nella bozza.
- L’invio è disattivato nell’anteprima finché manca un’informativa definitiva. Dopo averla completata, impostare PROJECT_PRIVACY_URL con l’URL definitivo (ad esempio /privacy), rimuovere l’avviso di bozza e aggiornare i metadata della privacy. Verificare anche la configurazione SMTP prima del collaudo di invio.
- File: app/inizia-il-progetto/page.js, app/inizia-il-progetto/project.module.css, app/components/StepsContact/StepsContact.js, app/components/Cta/Cta2.js, app/privacy/page.js, app/privacy/privacy.module.css.
- Lint superato; selezione multipla dei servizi, opzione budget ‘Non so ancora’ e invio disabilitato verificati nel browser. Nessuna email inviata. Verificato overflow a 390px: assente.
- Build produzione del nuovo modulo e della bozza privacy superata (12 route). Per riavviare questa anteprima in PowerShell: $env:NEXT_DIST_DIR = '.next-review'; npm run start -- --port 3100.
