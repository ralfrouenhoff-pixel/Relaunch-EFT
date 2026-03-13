"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Package, ArrowLeftRight, Bike, Clock, Car, ClipboardList,
  ShieldCheck, AlertTriangle, ChevronDown, ArrowRight,
} from "lucide-react";

// ─── Athlete Info Data ───────────────────────────────────────────────────────

const infoSections = [
  {
    id: "checkin",
    icon: Package,
    title: "Check-in & Starterpaket",
    accentColor: "#00AEEF",
    items: [
      { label: "Fr, 13. Juni", value: "14:00 – 19:00 Uhr – Starterpaket-Ausgabe" },
      { label: "Sa, 14. Juni", value: "09:00 – 18:00 Uhr – Starterpaket-Ausgabe" },
      { label: "Inhalt", value: "Startnummern, Transponder-Chip, Schwimmkappe, Starterbeutel" },
      { label: "Mitbringen", value: "Gültiger Lichtbildausweis + Bestätigungs-E-Mail" },
    ],
  },
  {
    id: "transition",
    icon: ArrowLeftRight,
    title: "Wechselzone (T1 & T2)",
    accentColor: "#3b82f6",
    items: [
      { label: "Öffnung", value: "Sa 12:00–18:00 Uhr und So ab 05:30 Uhr" },
      { label: "Schließung", value: "So 06:30 Uhr – danach kein Zutritt mehr" },
      { label: "Stellplätze", value: "Zugewiesen nach Startnummer" },
      { label: "Erlaubt", value: "Rad, Helm, Rad- & Laufschuhe, Riemen, Brille, Verpflegung" },
      { label: "Verboten", value: "Taschen, Koffer, externe Personen in der Zone" },
    ],
  },
  {
    id: "equipment",
    icon: Bike,
    title: "Ausrüstungsregeln",
    accentColor: "#FF5A1F",
    items: [
      { label: "Helm", value: "Pflicht ab dem Moment, wenn das Rad aus dem Rack genommen wird – CE/CPSC zertifiziert" },
      { label: "Rad", value: "Renn-, Triathlon- & Mountainbikes erlaubt – kein E-Bike" },
      { label: "Neopren", value: "Empfohlen < 22°C · Pflicht < 18°C · Verboten > 24°C" },
      { label: "Musik", value: "Kopfhörer auf dem Kurs verboten" },
      { label: "Startnummer", value: "Auf dem Lauf auf der Vorderseite sichtbar tragen" },
    ],
  },
  {
    id: "timelimits",
    icon: Clock,
    title: "Zeitlimits",
    accentColor: "#a855f7",
    items: [
      { label: "Sprint gesamt", value: "2 Stunden 30 Minuten" },
      { label: "Olympisch gesamt", value: "4 Stunden 30 Minuten" },
      { label: "Schwimmen", value: "Sprint: 20 min / Olympisch: 35 min" },
      { label: "Bei Überschreitung", value: "DNF – Athlet wird von der Strecke genommen" },
    ],
  },
  {
    id: "parking",
    icon: Car,
    title: "Anreise & Parken",
    accentColor: "#22c55e",
    items: [
      { label: "Parkplatz P1", value: "Seeparkplatz Süd – 500 Plätze, kostenlos, direkt am Gelände" },
      { label: "Parkplatz P2", value: "Schule am Berg – 300 Plätze, Shuttle alle 15 min" },
      { label: "ÖPNV", value: "Linie 7 bis Haltestelle \"Seepark\" – 10 min vom Hauptbahnhof" },
      { label: "Öffnung", value: "Wettkampftag ab 05:00 Uhr" },
    ],
  },
  {
    id: "rules",
    icon: ClipboardList,
    title: "Rennregeln",
    accentColor: "#f59e0b",
    items: [
      { label: "Drafting", value: "Verboten – 10m Mindestabstand zum Vordermann einhalten" },
      { label: "Überholen", value: "Nur links mit Ankündigung \"Vorbei\"" },
      { label: "Abfall", value: "Entsorgung nur an Verpflegungsstationen" },
      { label: "Fairness", value: "Gegenseitiger Respekt und Sportsmanship sind Pflicht" },
      { label: "Disqualifikation", value: "Unsportliches Verhalten, Drafting, externe Verpflegung" },
    ],
  },
];

// ─── FAQ Data ─────────────────────────────────────────────────────────────────

const faqs = [
  {
    category: "Anmeldung",
    items: [
      {
        q: "Wie melde ich mich an?",
        a: "Die Anmeldung erfolgt ausschließlich online über unsere Registrierungsseite. Wähle deine Distanz, fülle das Formular aus und schließe die Zahlung ab. Du erhältst eine Bestätigungs-E-Mail.",
      },
      {
        q: "Kann ich meine Anmeldung stornieren oder übertragen?",
        a: "Stornierungen bis 60 Tage vor dem Event werden zu 70% erstattet. Anmeldungen können bis 30 Tage vorher auf eine andere Person übertragen werden (Gebühr: 15 €).",
      },
      {
        q: "Gibt es ein Mindestalter?",
        a: "Das Mindestalter für die Sprint-Distanz beträgt 16 Jahre, für die Olympische Distanz 18 Jahre.",
      },
    ],
  },
  {
    category: "Wettkampftag",
    items: [
      {
        q: "Was muss ich zum Wettkampf mitbringen?",
        a: "Du benötigst deinen Starterbeutel (Startnummer, Chip-Transponder, Schwimmkappe), dein Fahrrad mit Helm und deine Laufschuhe.",
      },
      {
        q: "Wann und wo ist die Starterpaket-Ausgabe?",
        a: "Die Ausgabe findet am Freitag (14–19 Uhr) und Samstag (09–18 Uhr) im Veranstaltungszelt am See statt. Am Wettkampftag selbst gibt es keine Ausgabe.",
      },
      {
        q: "Gibt es Verpflegung auf der Strecke?",
        a: "Ja, auf der Rad- und Laufstrecke sind Verpflegungsstationen mit Wasser, Elektrolytgetränken und Gels eingerichtet.",
      },
    ],
  },
  {
    category: "Ausrüstung & Regeln",
    items: [
      {
        q: "Welche Ausrüstung ist erlaubt?",
        a: "Neoprenanzüge sind bei unter 22°C empfohlen und unter 18°C Pflicht. Zeitfahrräder und Triathlonräder sind erlaubt. Alle Helme müssen den aktuellen Sicherheitsstandards entsprechen.",
      },
      {
        q: "Gibt es Zeitlimits?",
        a: "Sprint: 2,5 Stunden. Olympisch: 4,5 Stunden – ab dem individuellen Startschuss. Athleten, die das Limit überschreiten, werden von der Strecke genommen.",
      },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function InfoCard({ section, index }: { section: typeof infoSections[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="p-6 bg-surface border border-border rounded-2xl hover:border-white/15 transition-all group"
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${section.accentColor}18` }}
        >
          <section.icon className="w-5 h-5" style={{ color: section.accentColor }} />
        </div>
        <h2 className="font-black text-white text-lg">{section.title}</h2>
      </div>
      <div className="space-y-0">
        {section.items.map((item, i) => (
          <div
            key={i}
            className="flex gap-3 py-3 border-b border-border/50 last:border-0"
          >
            <span
              className="shrink-0 w-28 text-xs font-bold uppercase tracking-wide pt-0.5"
              style={{ color: section.accentColor }}
            >
              {item.label}
            </span>
            <span className="text-white/55 text-sm leading-relaxed">{item.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className={`border rounded-xl overflow-hidden transition-all duration-200 ${
        open ? "border-primary/40 bg-primary/[0.04]" : "border-border bg-surface hover:border-white/15"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
      >
        <span className={`font-semibold text-sm ${open ? "text-primary" : "text-white"}`}>{q}</span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180 text-primary" : "text-white/30"
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <p className="px-5 pb-5 text-white/50 text-sm leading-relaxed border-t border-border/40 pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InfoClient() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-border overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-5">
              <span className="w-8 h-px bg-primary" />
              Race Guide 2025
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight">
                Athleten
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #00AEEF, #FF5A1F)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Information.
                </span>
              </h1>
              <p className="text-white/40 max-w-xs text-base leading-relaxed lg:text-right lg:mb-1">
                Alles, was du wissen musst –
                von der Wechselzone bis zum Parkplatz.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Alert banner */}
      <div className="bg-accent/[0.08] border-b border-accent/25 px-4 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2.5 text-accent text-sm font-medium">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          Pflicht-Briefing: Samstag, 14. Juni · 16:00 Uhr · Bühne Seepark – Teilnahme ist Startvoraussetzung
        </div>
      </div>

      {/* Info cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-white/30 text-xs font-bold uppercase tracking-widest">Wichtige Infos</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {infoSections.map((section, i) => (
            <InfoCard key={section.id} section={section} index={i} />
          ))}
        </div>

        {/* Safety card – full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 bg-surface border border-border rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-green-400" />
            </div>
            <h2 className="font-black text-white text-lg">Medizinische Versorgung & Sicherheit</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Sanitätsdienst", body: "Professioneller Rettungsdienst ist auf dem gesamten Kurs und am Veranstaltungsgelände präsent." },
              { title: "Rettungsschwimmer", body: "Mehrere Rettungsboote und Rettungsschwimmer sichern den Schwimmkurs lückenlos ab." },
              { title: "Notfallnummer", body: "Event-Notfall: 0800-EFT-2025. Im Ernstfall immer zuerst 112 rufen." },
            ].map((item) => (
              <div key={item.title}>
                <p className="font-bold text-white text-sm mb-1.5">{item.title}</p>
                <p className="text-white/40 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FAQ */}
      <div className="border-t border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-white/30 text-xs font-bold uppercase tracking-widest">FAQ</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {faqs.map((group) => (
              <div key={group.category}>
                <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-4">
                  {group.category}
                </h3>
                <div className="space-y-2">
                  {group.items.map((item, i) => (
                    <FAQItem key={i} q={item.q} a={item.a} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-bold text-white">Noch Fragen?</p>
            <p className="text-white/40 text-sm">Unser Team hilft dir gerne weiter.</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="mailto:info@erichfilltriathlon.de"
              className="px-5 py-2.5 border border-border hover:border-white/30 text-white/60 hover:text-white font-semibold text-sm rounded-xl transition-all"
            >
              Kontakt
            </Link>
            <Link
              href="/registration"
              className="flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent/90 text-white font-bold text-sm rounded-xl transition-all hover:shadow-[0_0_20px_rgba(255,90,31,0.35)]"
            >
              Jetzt anmelden
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
