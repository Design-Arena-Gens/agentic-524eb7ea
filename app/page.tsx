"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  faqs,
  features,
  metrics,
  process,
  testimonials
} from "@/lib/data";
import { cn } from "@/lib/utils";

const heroGradient =
  "before:absolute before:inset-0 before:-z-10 before:bg-mesh-gradient before:opacity-70 before:blur-3xl";

type FormState = "idle" | "loading" | "success" | "error";

export default function Page() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  const statCols = useMemo(() => {
    const mid = Math.ceil(metrics.length / 2);
    return [metrics.slice(0, mid), metrics.slice(mid)];
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "loading") return;

    const form = new FormData(e.currentTarget);
    setState("loading");
    setMessage("");

    try {
      const res = await fetch("/api/consultazione", {
        method: "POST",
        body: form
      });

      if (!res.ok) {
        throw new Error("Richiesta non riuscita");
      }

      setState("success");
      setMessage(
        "Richiesta inviata. Ti ricontatteremo entro 24 ore per programmare la consulenza."
      );
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setState("error");
      setMessage(
        "Si è verificato un problema. Riprova tra qualche minuto o contattaci su hello@lineaavant.com."
      );
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="relative overflow-hidden">
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-50 blur-3xl",
            "bg-[radial-gradient(circle_at_top_right,_rgba(122,62,255,0.6),_transparent_55%)]"
          )}
        />
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
          <span className="font-display text-2xl font-semibold tracking-tight text-white">
            Linea Avant
          </span>
          <div className="hidden items-center gap-10 text-sm text-white/70 md:flex">
            <a href="#servizi" className="hover:text-white">
              Soluzioni
            </a>
            <a href="#metodo" className="hover:text-white">
              Metodo
            </a>
            <a href="#casi" className="hover:text-white">
              Casi Studio
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </div>
          <a
            href="#consulenza"
            className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:border-white/60 hover:bg-white/10"
          >
            Prenota consulenza
          </a>
        </nav>

        <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-12 md:flex-row md:items-center md:gap-16 md:pb-24 md:pt-24">
          <div className="relative flex-1">
            <div className="-mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60">
              <span className="h-2 w-2 rounded-full bg-accent" />
              orchestriamo AI su misura
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={cn(
                "mt-8 font-display text-4xl font-semibold text-white md:text-6xl",
                heroGradient,
                "relative"
              )}
            >
              L&apos;agenzia AI che trasforma la tua azienda in una macchina
              predittiva.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="mt-6 max-w-xl text-lg text-white/70"
            >
              Dal design dell&apos;esperienza alla messa in produzione: creiamo
              sistemi AI end-to-end che accelerano vendite, marketing,
              operations e customer care. Il tutto con governance, metriche e
              performance misurabili.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
            >
              <a
                href="#consulenza"
                className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary/80"
              >
                Ricevi la tua blueprint AI
              </a>
              <a
                href="#casi"
                className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:text-white"
              >
                Scopri i case study
              </a>
            </motion.div>
            <div className="mt-14 grid max-w-2xl grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:grid-cols-4">
              {metrics.map((metric, idx) => (
                <div key={metric.label} className="space-y-1">
                  <p className="font-display text-2xl text-white">
                    {metric.value}
                  </p>
                  <p className="text-xs text-white/60">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="relative flex-1 overflow-hidden rounded-[32px] border border-white/5 bg-base-subtle/60 p-8 shadow-2xl shadow-primary/10 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(122,62,255,0.25),transparent_40%),radial_gradient(circle_at_80%_0%,rgba(26,229,255,0.3),transparent_45%)] opacity-70" />
            <div className="relative space-y-6 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                dashboard di controllo
              </p>
              <h2 className="font-display text-2xl">
                Visione in tempo reale su performance, pipeline e satisfaction.
              </h2>
              <p className="text-white/70">
                Ogni soluzione viene consegnata con pannelli personalizzati,
                automazioni documentate e modelli allenati sui tuoi dati chiave.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-accent">
                    marketing
                  </p>
                  <p className="mt-2 font-display text-xl text-white">
                    +188% lead
                  </p>
                  <p className="text-xs text-white/60">
                    Campagne generative ottimizzate in real time.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-accent">
                    operations
                  </p>
                  <p className="mt-2 font-display text-xl text-white">
                    -44% costi
                  </p>
                  <p className="text-xs text-white/60">
                    Automazioni supply chain e demand forecasting.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-primary/10 p-4">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-accent">
                  customer experience
                </p>
                <p className="mt-3 font-display text-lg">
                  Il 72% delle conversazioni è gestito da agenti AI voice&chat.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </header>

      <main className="flex-1">
        <section
          id="servizi"
          className="mx-auto w-full max-w-6xl px-6 pb-24 pt-20 md:pb-32"
        >
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-3xl text-white md:text-4xl">
                Soluzioni AI modulari, integrate e misurabili.
              </h2>
              <p className="mt-4 max-w-xl text-base text-white/70">
                Ogni modulo è progettato per connettersi ai tuoi sistemi,
                sfruttare i tuoi dati e generare impatto misurabile entro 90
                giorni.
              </p>
            </div>
            <a
              href="#consulenza"
              className="rounded-full border border-white/20 px-6 py-2 text-sm font-medium text-white/80 transition hover:border-white/50 hover:text-white"
            >
              Richiedi una roadmap personalizzata
            </a>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/20 backdrop-blur-xl"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/0 via-white/[0.03] to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="text-sm uppercase tracking-[0.15em] text-accent">
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-2xl text-white">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm text-white/70">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="metodo"
          className="relative border-y border-white/10 bg-base-subtle/80 py-24"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(122,62,255,0.15),_transparent_60%)]" />
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">
                  metodo proprietario
                </p>
                <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
                  Dall&apos;idea al go-live in sprint mirati e misurabili.
                </h2>
              </div>
              <p className="max-w-lg text-base text-white/70">
                Una metodologia forgiata su oltre 50 progetti AI enterprise.
                Workshop intensivi, discovery guidata dai dati, prototipi
                interattivi e MLOps integrato.
              </p>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-4">
              {process.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <span className="text-sm font-semibold uppercase tracking-[0.15em] text-white/60">
                    Step {idx + 1}
                  </span>
                  <h3 className="font-display text-2xl text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/70">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="casi"
          className="mx-auto w-full max-w-6xl px-6 pb-24 pt-24 md:pb-32"
        >
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">
                risultati reali
              </p>
              <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
                Case study che hanno ridefinito KPI e profitto.
              </h2>
            </div>
            <p className="max-w-xl text-base text-white/70">
              Collaboriamo con team visionari in retail, healthcare, finance,
              hospitality e manifattura per trasformare customer journey,
              operation e marketing.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Nexia Medical",
                result: "+72% richieste gestite da AI",
                summary:
                  "Creazione di un assistente clinico 24/7 integrato con EHR e protocolli di triage personalizzati."
              },
              {
                name: "Evolux Fashion",
                result: "+188% lead qualificati",
                summary:
                  "Marketing generativo per otto mercati, personalizzando storytelling e promozioni basate su comportamento."
              },
              {
                name: "Armoni Living",
                result: "6.4x ROI annuale",
                summary:
                  "Suite di automazioni supply chain e previsioni domanda integrate con ERP e logistica."
              }
            ].map((item, idx) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/50">
                  <span>{item.name}</span>
                  <span>enterprise</span>
                </div>
                <p className="mt-5 font-display text-2xl text-white">
                  {item.result}
                </p>
                <p className="mt-4 text-sm text-white/70">{item.summary}</p>
                <div className="mt-6 flex items-center gap-2 text-xs text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  rollout in 6 settimane
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="relative border-y border-white/10 bg-base-subtle/70 py-24">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">
                  testimonianze
                </p>
                <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
                  I nostri clienti parlano di partnership, non di fornitori.
                </h2>
                <div className="mt-10 space-y-8">
                  {testimonials.map((testimonial, idx) => (
                    <motion.blockquote
                      key={testimonial.author}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-white"
                    >
                      <p className="text-lg text-white/80">
                        “{testimonial.quote}”
                      </p>
                      <footer className="mt-4 text-sm text-white/60">
                        {testimonial.author} — {testimonial.role}
                      </footer>
                    </motion.blockquote>
                  ))}
                </div>
              </div>
              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/30">
                <h3 className="font-display text-2xl text-white">
                  Kit di accelerazione incluso
                </h3>
                <ul className="mt-6 space-y-4 text-sm text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    Accesso a dashboard personalizzate e report settimanali.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    Sessioni di training operative per team commerciali e CX.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    Libreria di prompt, automazioni e playbook pronti all&apos;uso.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    Supporto premium nei primi 90 giorni post-lancio.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto w-full max-w-6xl px-6 pb-24 pt-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">
                domande frequenti
              </p>
              <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
                Tutto ciò che devi sapere prima della consulenza.
              </h2>
              <p className="mt-4 text-base text-white/70">
                Non vendiamo pacchetti preconfezionati: ogni progetto è creato
                sui tuoi obiettivi. Ecco le domande che riceviamo più spesso.
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.07, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="font-display text-xl text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm text-white/70">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="consulenza"
          className="relative overflow-hidden border-y border-white/10 bg-primary/5 py-24"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.1),_transparent_55%)]" />
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">
                consulenza strategica gratuita
              </p>
              <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
                Prenota ora la tua sessione con un AI strategist senior.
              </h2>
              <p className="mt-5 text-base text-white/70">
                In 30 minuti identificheremo assieme: opportunità immediate,
                priorità tecniche e business case. Riceverai una blueprint con
                roadmap, stack suggerito e KPI attesi.
              </p>
              <div className="mt-8 grid gap-4 text-sm text-white/70 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-display text-lg text-white">
                    Focus operativo
                  </p>
                  <p className="mt-2 text-xs">
                    Analizziamo flussi interni, ruoli e strumenti per capire
                    dove l&apos;AI può sbloccare valore immediato.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-display text-lg text-white">
                    Strategia su misura
                  </p>
                  <p className="mt-2 text-xs">
                    Scenari di ROI, impatto su marketing, CX e operation con
                    milestone precise.
                  </p>
                </div>
              </div>
            </div>
            <motion.form
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="relative rounded-[32px] border border-white/10 bg-base p-8 shadow-2xl shadow-primary/20"
            >
              <h3 className="font-display text-2xl text-white">
                Prenota la tua consulenza gratuita
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Raccontaci in breve la tua azienda: ti ricontattiamo entro 24
                ore.
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Nome e cognome
                  </label>
                  <input
                    name="name"
                    required
                    placeholder="Es. Martina Bianchi"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Email aziendale
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="nome@azienda.it"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Ruolo
                  </label>
                  <input
                    name="role"
                    required
                    placeholder="Es. COO, Responsabile Innovazione"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Settore & dimensioni
                  </label>
                  <input
                    name="company"
                    required
                    placeholder="Es. Retail, 120 dipendenti"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Obiettivi principali
                  </label>
                  <textarea
                    name="goals"
                    rows={4}
                    required
                    placeholder="Descrivi sfide e obiettivi: automazione, marketing, customer care..."
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={state === "loading"}
                className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/80 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {state === "loading"
                  ? "Invio in corso..."
                  : "Blocca il tuo slot strategico"}
              </button>
              {message && (
                <p
                  className={cn(
                    "mt-4 text-sm",
                    state === "success" ? "text-accent" : "text-red-400"
                  )}
                  aria-live="polite"
                >
                  {message}
                </p>
              )}
              <p className="mt-4 text-[0.7rem] text-white/40">
                Nessun spam. Firmeremo un NDA quando necessario.
              </p>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-base/80 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-display text-xl text-white">Linea Avant</span>
            <p className="mt-2 text-sm text-white/60">
              Sistemi AI custom per aziende che vogliono guidare il futuro.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
            <a href="#servizi" className="hover:text-white">
              Soluzioni
            </a>
            <a href="#metodo" className="hover:text-white">
              Metodo
            </a>
            <a href="#casi" className="hover:text-white">
              Case study
            </a>
            <a href="#consulenza" className="hover:text-white">
              Consulenza
            </a>
          </div>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Linea Avant. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  );
}
