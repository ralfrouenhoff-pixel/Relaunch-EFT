"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Waves, Bike, PersonStanding, Users, ArrowRight, Flame } from "lucide-react";

const formats = [
  {
    id: "sprint",
    number: "01",
    name: "Sprint",
    tagline: "Für Einsteiger & Schnelle",
    accentColor: "#00AEEF",
    glowColor: "rgba(0,174,239,0.2)",
    borderHover: "hover:border-primary/60",
    segments: [
      { icon: Waves, label: "Schwimmen", value: "500 m" },
      { icon: Bike, label: "Radfahren", value: "20 km" },
      { icon: PersonStanding, label: "Laufen", value: "5 km" },
    ],
    description:
      "Der ideale Einstieg. Für alle, die den Triathlon-Sport zum ersten Mal erleben wollen – oder die maximale Geschwindigkeit suchen.",
    price: "65",
    highlight: false,
  },
  {
    id: "olympic",
    number: "02",
    name: "Olympisch",
    tagline: "Die Königsdistanz",
    accentColor: "#FF5A1F",
    glowColor: "rgba(255,90,31,0.25)",
    borderHover: "hover:border-accent/60",
    segments: [
      { icon: Waves, label: "Schwimmen", value: "1.500 m" },
      { icon: Bike, label: "Radfahren", value: "40 km" },
      { icon: PersonStanding, label: "Laufen", value: "10 km" },
    ],
    description:
      "Die klassische Triathlon-Distanz. Für erfahrene Athleten, die ihre Grenzen kennen – und überwinden wollen.",
    price: "95",
    highlight: true,
  },
  {
    id: "relay",
    number: "03",
    name: "Staffel",
    tagline: "Gemeinsam ans Ziel",
    accentColor: "#a855f7",
    glowColor: "rgba(168,85,247,0.2)",
    borderHover: "hover:border-purple-500/60",
    segments: [
      { icon: Waves, label: "Schwimmer", value: "1.500 m" },
      { icon: Bike, label: "Radfahrer", value: "40 km" },
      { icon: PersonStanding, label: "Läufer", value: "10 km" },
    ],
    description:
      "Jeder kämpft auf seiner Strecke – gemeinsam holt ihr das Beste heraus. Ideal für Teams und Firmenläufe.",
    price: "130",
    highlight: false,
  },
];

export default function RaceFormats() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[0.3em] mb-5">
              <span className="w-8 h-px bg-accent" />
              Distanzen 2025
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
              Wähle deine
              <br />Herausforderung.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 max-w-xs text-sm leading-relaxed lg:text-right"
          >
            Drei Distanzen. Eine Leidenschaft.
            Finde die, die dich fordert.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {formats.map((format, i) => (
            <motion.div
              key={format.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex flex-col bg-surface border border-border ${format.borderHover} rounded-2xl overflow-hidden transition-all duration-500 ${
                format.highlight ? "ring-1 ring-accent/30" : ""
              }`}
              style={format.highlight ? { boxShadow: `0 0 60px ${format.glowColor}` } : {}}
              whileHover={{ boxShadow: `0 0 60px ${format.glowColor}` }}
            >
              {/* Popular badge */}
              {format.highlight && (
                <div
                  className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white"
                  style={{ background: format.accentColor }}
                >
                  <Flame className="w-3 h-3" />
                  Beliebt
                </div>
              )}

              {/* Number + header */}
              <div className="p-7 pb-0">
                <div
                  className="text-[5rem] font-black leading-none opacity-[0.06] select-none mb-2 transition-all duration-500 group-hover:opacity-[0.12]"
                  style={{ color: format.accentColor }}
                >
                  {format.number}
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: format.accentColor }}
                >
                  {format.tagline}
                </span>
                <h3 className="text-2xl font-black text-white mt-1 mb-6">{format.name} Distanz</h3>

                {/* Discipline bars */}
                <div className="space-y-3 mb-6">
                  {format.segments.map((seg, si) => (
                    <div key={seg.label} className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: `${format.accentColor}18` }}
                      >
                        <seg.icon className="w-4 h-4" style={{ color: format.accentColor }} />
                      </div>
                      <div className="flex-1 flex items-center justify-between">
                        <span className="text-white/50 text-sm">{seg.label}</span>
                        <span className="font-black text-white text-sm">{seg.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-border mb-6" />

                <p className="text-white/40 text-sm leading-relaxed mb-8">{format.description}</p>
              </div>

              {/* Footer */}
              <div className="mt-auto px-7 pb-7 flex items-center justify-between">
                <div>
                  <span className="text-white/30 text-xs block mb-0.5">ab</span>
                  <span className="text-3xl font-black text-white">{format.price} €</span>
                </div>
                <Link
                  href="/registration"
                  className="group/btn flex items-center gap-2 px-5 py-3 text-sm font-bold text-white rounded-xl transition-all duration-300"
                  style={{
                    background: `${format.accentColor}22`,
                    border: `1px solid ${format.accentColor}33`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = format.accentColor;
                    (e.currentTarget as HTMLElement).style.borderColor = format.accentColor;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `${format.accentColor}22`;
                    (e.currentTarget as HTMLElement).style.borderColor = `${format.accentColor}33`;
                  }}
                >
                  Anmelden
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Bottom accent line */}
              <div
                className="h-[3px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${format.accentColor}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Relay note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 flex items-center justify-center gap-2 text-white/25 text-sm"
        >
          <Users className="w-4 h-4" />
          <span>Staffelteams bestehen aus 3 Athleten – je eine Disziplin</span>
        </motion.div>
      </div>
    </section>
  );
}
