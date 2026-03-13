"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Waves, Bike, PersonStanding, Users, ArrowRight } from "lucide-react";

const formats = [
  {
    id: "sprint",
    name: "Sprint",
    subtitle: "Für Einsteiger & Schnelle",
    color: "from-blue-500/20 to-primary/10",
    borderColor: "border-primary/30 hover:border-primary",
    badge: "bg-primary/20 text-primary",
    segments: [
      { icon: Waves, label: "Schwimmen", value: "500 m" },
      { icon: Bike, label: "Radfahren", value: "20 km" },
      { icon: PersonStanding, label: "Laufen", value: "5 km" },
    ],
    description:
      "Der ideale Einstieg in die Welt des Triathlons. Für Newcomer und alle, die es einmal wissen wollen.",
    price: "ab 65 €",
    highlight: false,
  },
  {
    id: "olympic",
    name: "Olympisch",
    subtitle: "Die klassische Königsdistanz",
    color: "from-accent/20 to-orange-500/10",
    borderColor: "border-accent/50 hover:border-accent",
    badge: "bg-accent/20 text-accent",
    segments: [
      { icon: Waves, label: "Schwimmen", value: "1.500 m" },
      { icon: Bike, label: "Radfahren", value: "40 km" },
      { icon: PersonStanding, label: "Laufen", value: "10 km" },
    ],
    description:
      "Die Königsdistanz des Triathlons. Für erfahrene Athleten, die ihre Grenzen neu definieren wollen.",
    price: "ab 95 €",
    highlight: true,
  },
  {
    id: "relay",
    name: "Staffel",
    subtitle: "Gemeinsam ans Ziel",
    color: "from-purple-500/20 to-pink-500/10",
    borderColor: "border-purple-500/30 hover:border-purple-500",
    badge: "bg-purple-500/20 text-purple-300",
    segments: [
      { icon: Waves, label: "Schwimmer", value: "1.500 m" },
      { icon: Bike, label: "Radfahrer", value: "40 km" },
      { icon: PersonStanding, label: "Läufer", value: "10 km" },
    ],
    description:
      "Kämpfe mit deinem Team. Jeder gibt alles auf seiner Disziplin – gemeinsam ans Ziel.",
    price: "ab 130 € (Team)",
    highlight: false,
  },
];

export default function RaceFormats() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest">Distanzen</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
            Wähle deine Herausforderung
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-lg">
            Drei Distanzen. Eine Leidenschaft. Finde die Distanz, die dich fordert.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {formats.map((format, i) => (
            <motion.div
              key={format.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex flex-col p-8 bg-gradient-to-br ${format.color} border ${format.borderColor} rounded-2xl transition-all duration-300 ${
                format.highlight ? "ring-2 ring-accent/50 scale-105" : ""
              }`}
            >
              {format.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Beliebteste Wahl
                </div>
              )}

              <div className="mb-2">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${format.badge}`}>
                  {format.name}
                </span>
              </div>
              <h3 className="text-2xl font-black text-white mb-1">{format.name} Distanz</h3>
              <p className="text-white/50 text-sm mb-6">{format.subtitle}</p>

              {/* Segments */}
              <div className="space-y-3 mb-6">
                {format.segments.map((seg) => (
                  <div key={seg.label} className="flex items-center justify-between py-2 border-b border-white/10">
                    <div className="flex items-center gap-3 text-white/70">
                      <seg.icon className="w-4 h-4 text-white/40" />
                      <span className="text-sm">{seg.label}</span>
                    </div>
                    <span className="font-bold text-white">{seg.value}</span>
                  </div>
                ))}
              </div>

              <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                {format.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-white">{format.price}</span>
                <Link
                  href="/registration"
                  className="flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-lg transition-all"
                >
                  Anmelden
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Staffel note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 flex items-center justify-center gap-2 text-white/30 text-sm"
        >
          <Users className="w-4 h-4" />
          <span>Staffelteams bestehen aus 3 Athleten (je eine Disziplin)</span>
        </motion.div>
      </div>
    </section>
  );
}
