"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, AlertCircle, Clock, CreditCard, Users, Waves, Bike, PersonStanding } from "lucide-react";

const tiers = [
  {
    name: "Sprint",
    subtitle: "500m Schwimmen · 20km Rad · 5km Lauf",
    earlyBird: "65 €",
    regular: "79 €",
    late: "89 €",
    features: [
      "Startpaket mit Startnummer",
      "Chip-Zeitnahme",
      "Verpflegung auf dem Kurs",
      "Finisher-Medaille",
      "Urkunde",
    ],
    highlight: false,
    color: "border-primary/30",
    badge: "text-primary bg-primary/10",
    icon: [Waves, Bike, PersonStanding],
  },
  {
    name: "Olympisch",
    subtitle: "1.500m Schwimmen · 40km Rad · 10km Lauf",
    earlyBird: "95 €",
    regular: "115 €",
    late: "129 €",
    features: [
      "Startpaket mit Startnummer",
      "Chip-Zeitnahme",
      "Verpflegung auf dem Kurs",
      "Finisher-Medaille & T-Shirt",
      "Urkunde & Ergebnis-Zertifikat",
      "Zugang zur VIP-Lounge",
    ],
    highlight: true,
    color: "border-accent",
    badge: "text-accent bg-accent/10",
    icon: [Waves, Bike, PersonStanding],
  },
  {
    name: "Staffel",
    subtitle: "Team je eine Disziplin (Olympische Distanz)",
    earlyBird: "130 €",
    regular: "155 €",
    late: "175 €",
    features: [
      "3 Startpakete (ein pro Athlet)",
      "Chip-Zeitnahme für alle",
      "Verpflegung auf dem Kurs",
      "Finisher-Medaillen (3x)",
      "Team-Urkunde",
    ],
    highlight: false,
    color: "border-purple-500/30",
    badge: "text-purple-300 bg-purple-500/10",
    icon: [Users],
  },
];

const phases = [
  { phase: "Early Bird", period: "bis 28. Feb 2025", status: "closed", label: "Abgelaufen" },
  { phase: "Regular", period: "1. März – 30. April 2025", status: "active", label: "Jetzt buchen" },
  { phase: "Last Minute", period: "1. Mai – 31. Mai 2025", status: "upcoming", label: "Bald" },
];

export default function RegistrationClient() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-surface border-b border-border overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(0,174,239,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-sm font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Anmeldung offen
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Sichere deinen Startplatz
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-xl">
              Plätze sind begrenzt. Wähle deine Distanz und melde dich jetzt an.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pricing phases */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          {phases.map((p) => (
            <div
              key={p.phase}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl border ${
                p.status === "active"
                  ? "bg-primary/10 border-primary/40"
                  : p.status === "closed"
                  ? "bg-surface border-border opacity-50"
                  : "bg-surface border-border"
              }`}
            >
              <div className={`w-2.5 h-2.5 rounded-full ${
                p.status === "active" ? "bg-primary animate-pulse" : p.status === "closed" ? "bg-white/20" : "bg-white/40"
              }`} />
              <div>
                <p className="font-bold text-white text-sm">{p.phase}</p>
                <p className="text-white/40 text-xs">{p.period}</p>
              </div>
              <span className={`ml-2 px-2 py-0.5 rounded text-xs font-bold ${
                p.status === "active" ? "bg-primary/20 text-primary" : "bg-white/5 text-white/30"
              }`}>
                {p.label}
              </span>
            </div>
          ))}
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex flex-col p-8 bg-surface border ${tier.color} rounded-2xl ${
                tier.highlight ? "ring-2 ring-accent/40 scale-105" : ""
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-xs font-black uppercase tracking-wider rounded-full">
                  Beliebteste Distanz
                </div>
              )}

              <div className={`inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${tier.badge} mb-4`}>
                {tier.name}
              </div>
              <h3 className="text-3xl font-black text-white mb-1">{tier.name}</h3>
              <p className="text-white/40 text-sm mb-6">{tier.subtitle}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">{tier.regular}</span>
                  <span className="text-white/40 text-sm">Regular</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-sm text-white/40">
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Early Bird war {tier.earlyBird} · Late {tier.late}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/60">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`group flex items-center justify-center gap-2 w-full py-4 font-bold text-lg rounded-xl transition-all duration-300 ${
                  tier.highlight
                    ? "bg-accent hover:bg-accent/90 text-white hover:shadow-xl hover:shadow-accent/30"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                }`}
              >
                Jetzt anmelden
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Info block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="p-6 bg-surface border border-border rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-white">Anmeldeschluss</h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Die Anmeldung schließt am <strong className="text-white">31. Mai 2025</strong> oder wenn alle Startplätze vergeben sind. Nach der Anmeldung erhältst du innerhalb von 24 Stunden eine Bestätigungs-E-Mail.
            </p>
          </div>
          <div className="p-6 bg-surface border border-border rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-accent" />
              <h3 className="font-bold text-white">Stornierung</h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Stornierungen bis <strong className="text-white">14. April 2025</strong>: 70% Rückerstattung. Danach keine Rückerstattung. Startübertragungen auf andere Athleten bis <strong className="text-white">15. Mai 2025</strong> möglich (15 € Gebühr).
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
