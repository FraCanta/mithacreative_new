// pages/chi-siamo.jsx
// Next.js Pages Router — Tailwind CSS
// Mitha Creative — "Chi siamo" page

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const team = [
  {
    id: 1,
    name: "Placeholder Name",
    role: "UX Designer",
    tag: "Esperienza utente",
    emoji: "🔭",
    color: "from-violet-500/20 to-fuchsia-500/20",
    border: "border-violet-500/30",
    accent: "text-violet-400",
    badge: "bg-violet-500/10 text-violet-300 border-violet-500/30",
    bio: "Trasformo bisogni complessi in esperienze digitali intuitive. Sono ossessionata dai flussi utente, dai test di usabilità e dall'ascolto silenzioso che precede ogni buona soluzione.",
    skills: ["Research", "Wireframing", "Prototyping", "Usability Testing"],
  },
  {
    id: 2,
    name: "Placeholder Name",
    role: "Developer",
    tag: "Codice & magia",
    emoji: "🚀",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
    accent: "text-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    bio: "Traduco il design in codice pulito, performante e scalabile. Amo costruire interfacce che sembrano semplici ma nascondono mesi di cura tecnica sotto la superficie.",
    skills: ["React / Next.js", "Tailwind CSS", "Node.js", "CMS Integration"],
  },
  {
    id: 3,
    name: "Placeholder Name",
    role: "Graphic Designer",
    tag: "Visione & estetica",
    emoji: "🪐",
    color: "from-rose-500/20 to-orange-500/20",
    border: "border-rose-500/30",
    accent: "text-rose-400",
    badge: "bg-rose-500/10 text-rose-300 border-rose-500/30",
    bio: "Creo identità visive che non si dimenticano. Ogni colore, ogni font, ogni margine è una decisione intenzionale. La coerenza è il mio mantra, la bellezza è il risultato.",
    skills: ["Brand Identity", "Illustrazione 2D", "Packaging", "Motion"],
  },
  {
    id: 4,
    name: "Placeholder Name",
    role: "Copywriter",
    tag: "Parole che convertono",
    emoji: "✨",
    color: "from-amber-500/20 to-yellow-500/20",
    border: "border-amber-500/30",
    accent: "text-amber-400",
    badge: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    bio: "Le parole giuste fanno la differenza tra un sito che si guarda e uno che si compra. Scrivo per le persone prima, per gli algoritmi poi. In quest'ordine, sempre.",
    skills: ["Brand Tone of Voice", "UX Writing", "SEO Copy", "Content Strategy"],
  },
];

const values = [
  { icon: "💫", label: "Cura per i dettagli", desc: "Ogni pixel ha un perché." },
  { icon: "🌍", label: "Impatto reale", desc: "Lavoriamo per chi costruisce qualcosa che conta." },
  { icon: "🤝", label: "Collaborazione", desc: "Il tuo progetto è il nostro progetto." },
  { icon: "🔥", label: "Crescita continua", desc: "Nessuna soluzione uguale. Mai." },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function TeamCard({ member, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`
        relative group rounded-2xl border ${member.border}
        bg-gradient-to-br ${member.color}
        backdrop-blur-sm p-6 flex flex-col gap-5
        transition-all duration-500 cursor-default
        hover:scale-[1.02] hover:shadow-2xl
      `}
      style={{
        animationDelay: `${index * 120}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Numero ordinale */}
      <span className="absolute top-5 right-6 text-xs font-mono text-white/20 select-none">
        0{index + 1}
      </span>

      {/* Avatar placeholder */}
      <div className="relative w-20 h-20">
        <div
          className={`
            w-20 h-20 rounded-full bg-white/5 border ${member.border}
            flex items-center justify-center text-3xl
            transition-transform duration-300 group-hover:scale-110
          `}
        >
          {member.emoji}
        </div>
        {/* Glow pulse */}
        <div
          className={`
            absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40
            transition-opacity duration-500 bg-gradient-to-br ${member.color}
          `}
        />
      </div>

      {/* Identity */}
      <div className="flex flex-col gap-1">
        <span
          className={`
            inline-block self-start text-xs font-medium px-2.5 py-0.5 rounded-full
            border ${member.badge}
          `}
        >
          {member.tag}
        </span>
        <h3 className="text-white text-xl font-bold tracking-tight mt-1">
          {member.name}
        </h3>
        <p className={`text-sm font-semibold ${member.accent}`}>{member.role}</p>
      </div>

      {/* Bio */}
      <p className="text-white/60 text-sm leading-relaxed">{member.bio}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-white/10">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ChiSiamo() {
  return (
    <>
      <Head>
        <title>Chi siamo — Mitha Creative</title>
        <meta
          name="description"
          content="Siamo un team di designer, sviluppatrici, grafiche e copywriter unite dalla passione per il design e la comunicazione digitale."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Chi siamo — Mitha Creative" />
        <meta
          property="og:description"
          content="Scopri il team creativo di Mitha: UX design, sviluppo web, grafica e copywriting in un'unica squadra."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen bg-[#080810] text-white overflow-x-hidden">

        {/* ── Sfondo stellato via radial gradients ─────────────────────────── */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(139,92,246,0.08)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(6,182,212,0.06)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(251,191,36,0.03)_0%,transparent_70%)]" />
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "200px 200px",
            }}
          />
        </div>

        <div className="relative z-10">

          {/* ── NAV ──────────────────────────────────────────────────────────── */}
          <nav className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/5">
            <Link href="/" className="block">
              {/* Sostituire con il componente Image e il logo reale */}
              <span className="text-white font-bold text-lg tracking-tight">
                mitha<span className="text-violet-400">.</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
              <Link href="/servizi" className="hover:text-white transition-colors">Servizi</Link>
              <Link href="/chi-siamo" className="text-white font-medium">Chi siamo</Link>
              <Link href="/contatti" className="hover:text-white transition-colors">Contatti</Link>
            </div>

            <Link
              href="/inizia-il-progetto"
              className="
                text-sm font-medium px-5 py-2 rounded-full
                bg-white text-black hover:bg-white/90
                transition-all duration-200 hover:scale-105
              "
            >
              Inizia il progetto
            </Link>
          </nav>

          {/* ── HERO ─────────────────────────────────────────────────────────── */}
          <section className="px-6 md:px-12 pt-20 pb-16 max-w-5xl mx-auto">
            <div className="flex flex-col gap-6">
              {/* Label */}
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-violet-400">
                Il nostro team
              </span>

              {/* Titolo */}
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
                <span className="block text-white">Siamo</span>
                <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  Mitha Creative.
                </span>
              </h1>

              {/* Intro */}
              <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
                Siamo una squadra di donne appassionate di design, codice e comunicazione.
                Lavoriamo con liberi professionisti, artigiani e piccole imprese per trasformare
                idee in esperienze digitali che lasciano il segno.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-8 mt-4 pt-6 border-t border-white/10">
                {[
                  { n: "40+", label: "Progetti completati" },
                  { n: "10+", label: "Anni di esperienza" },
                  { n: "20+", label: "Recensioni Google" },
                ].map(({ n, label }) => (
                  <div key={label} className="flex flex-col">
                    <span className="text-3xl font-black text-white">{n}</span>
                    <span className="text-sm text-white/40">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── TEAM GRID ─────────────────────────────────────────────────────── */}
          <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
            <div className="flex flex-col gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Le persone dietro ogni progetto
              </h2>
              <p className="text-white/50 text-base max-w-xl">
                Quattro profili diversi, una visione comune: creare qualcosa che funziona davvero.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {team.map((member, index) => (
                <TeamCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </section>

          {/* ── VALORI ───────────────────────────────────────────────────────── */}
          <section className="px-6 md:px-12 py-16 border-t border-white/5">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col gap-2 mb-12">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-fuchsia-400">
                  Come lavoriamo
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  I valori che guidano ogni scelta
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {values.map(({ icon, label, desc }) => (
                  <div
                    key={label}
                    className="
                      flex flex-col gap-3 p-5
                      rounded-2xl border border-white/8
                      bg-white/[0.02] hover:bg-white/[0.05]
                      transition-all duration-300 hover:border-white/15
                    "
                  >
                    <span className="text-3xl">{icon}</span>
                    <h3 className="text-white font-semibold text-sm">{label}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ──────────────────────────────────────────────────────────── */}
          <section className="px-6 md:px-12 py-24">
            <div className="max-w-5xl mx-auto">
              <div
                className="
                  relative rounded-3xl border border-white/10
                  bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-cyan-500/10
                  p-10 md:p-16 text-center overflow-hidden
                "
              >
                {/* Glow sfondo */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12)_0%,transparent_70%)] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center gap-6">
                  <span className="text-4xl">🚀</span>
                  <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                    Pronta a lavorare con noi?
                  </h2>
                  <p className="text-white/50 text-lg max-w-xl leading-relaxed">
                    Raccontaci il tuo progetto. Iniziamo con una chiacchierata, senza impegno.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center mt-2">
                    <Link
                      href="/inizia-il-progetto"
                      className="
                        px-7 py-3 rounded-full bg-white text-black
                        font-semibold text-sm
                        hover:bg-white/90 transition-all duration-200 hover:scale-105
                      "
                    >
                      Inizia il progetto
                    </Link>
                    <Link
                      href="/servizi"
                      className="
                        px-7 py-3 rounded-full border border-white/20 text-white
                        font-semibold text-sm
                        hover:border-white/40 hover:bg-white/5
                        transition-all duration-200
                      "
                    >
                      Scopri i servizi
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── FOOTER minimal ───────────────────────────────────────────────── */}
          <footer className="px-6 md:px-12 py-8 border-t border-white/5">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-white/30 text-sm">
                © {new Date().getFullYear()} Mitha Creative. Tutti i diritti riservati.
              </span>
              <div className="flex gap-6 text-sm text-white/30">
                <Link href="/contatti" className="hover:text-white/60 transition-colors">
                  Contatti
                </Link>
              </div>
            </div>
          </footer>

        </div>
      </main>
    </>
  );
}
