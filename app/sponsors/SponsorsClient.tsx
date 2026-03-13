"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Award, Handshake } from "lucide-react";

const tiers = [
  {
    level: "Hauptsponsoren",
    description: "Unsere strategischen Partner, die den Erich Fill Triathlon erst möglich machen.",
    icon: Star,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/30",
    sponsors: [
      { name: "SportShop GmbH", logo: "SS", description: "Offizieller Ausrüster des Events. Sportartikel für Profis und Amateure." },
      { name: "Stadtwerke Musterstadt", logo: "SW", description: "Energie für unsere Stadt und unser Event. Nachhaltig und lokal." },
    ],
  },
  {
    level: "Gold Partner",
    description: "Starke Partner, die das Erlebnis für alle Athleten bereichern.",
    icon: Award,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/30",
    sponsors: [
      { name: "Bikeworld", logo: "BW", description: "Der führende Fahrradhändler der Region. Bike-Check und Mechaniker-Service am Eventgelände." },
      { name: "RunTech", logo: "RT", description: "Professionelle Laufausrüstung und Beratung für ambitionierte Athleten." },
      { name: "Aqua Sports", logo: "AS", description: "Ihr Spezialist für Schwimmausrüstung, Neoprenanzüge und Zubehör." },
    ],
  },
  {
    level: "Silber Partner",
    description: "Wertvolle Unterstützer, die das Event mit Dienstleistungen und Produkten bereichern.",
    icon: Handshake,
    color: "text-white/60",
    bg: "bg-white/5",
    border: "border-white/10",
    sponsors: [
      { name: "Hotel am See", logo: "HS", description: "Offizielles Athleten-Hotel mit Sonderkonditionen für alle Teilnehmer." },
      { name: "Physio Pro", logo: "PP", description: "Physiotherapie und Sportverletzungen. Massage-Zelt am Zielbereich." },
      { name: "Energy Drink Co", logo: "ED", description: "Offizieller Energie-Drink des Events. An allen Verpflegungsstationen." },
      { name: "LocalBank", logo: "LB", description: "Unterstützung regionaler Sportveranstaltungen und Athleten." },
    ],
  },
];

const packages = [
  {
    name: "Gold Paket",
    price: "ab 2.500 €",
    color: "border-yellow-400/40",
    features: [
      "Logo auf der Brust der Startnummern",
      "Premium Bannerplatzierung Zielbereich",
      "3 kostenlose Startplätze",
      "VIP-Lounge Zugang",
      "Social Media Erwähnung (5x)",
    ],
  },
  {
    name: "Silber Paket",
    price: "ab 1.200 €",
    color: "border-white/20",
    features: [
      "Logo auf dem Eventflyer",
      "Bannerplatzierung Strecke",
      "1 kostenloser Startplatz",
      "Website-Logo",
      "Social Media Erwähnung (2x)",
    ],
  },
  {
    name: "Bronze Paket",
    price: "ab 500 €",
    color: "border-orange-700/40",
    features: [
      "Logo auf der Veranstaltungswebsite",
      "Nennnung im Programmheft",
      "Sponsor-Banner am Gelände",
    ],
  },
];

export default function SponsorsClient() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Partner & Sponsoren</span>
            <h1 className="mt-3 text-5xl sm:text-6xl font-black text-white mb-6">Unsere Sponsoren</h1>
            <p className="text-white/50 max-w-2xl mx-auto text-xl">
              Herzlichen Dank an alle Partner, die den Erich Fill Triathlon 2025 unterstützen und dieses Event möglich machen.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {tiers.map((tier, ti) => (
          <motion.div
            key={tier.level}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ti * 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 ${tier.bg} rounded-xl flex items-center justify-center`}>
                <tier.icon className={`w-5 h-5 ${tier.color}`} />
              </div>
              <h2 className={`text-2xl font-black ${tier.color}`}>{tier.level}</h2>
            </div>
            <p className="text-white/40 text-sm mb-8 ml-13">{tier.description}</p>

            <div className={`grid gap-6 ${ti === 0 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
              {tier.sponsors.map((sponsor, si) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: si * 0.08 }}
                  className={`p-6 bg-surface border ${tier.border} hover:border-opacity-70 rounded-2xl transition-all group cursor-pointer`}
                >
                  <div className={`w-16 h-16 ${tier.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <span className={`text-2xl font-black ${tier.color}`}>{sponsor.logo}</span>
                  </div>
                  <h3 className="font-black text-white text-lg mb-2">{sponsor.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{sponsor.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Become a sponsor */}
        <div className="mt-4 pt-16 border-t border-border">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-4">Werden Sie Sponsor</h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg">
              Erreichen Sie eine leidenschaftliche, kaufkräftige Zielgruppe aus Triathleten und Sportbegeisterten.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 bg-surface border ${pkg.color} rounded-2xl`}
              >
                <h3 className="text-xl font-black text-white mb-1">{pkg.name}</h3>
                <p className="text-2xl font-black text-primary mb-4">{pkg.price}</p>
                <ul className="space-y-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/50">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl transition-all hover:shadow-xl hover:shadow-primary/30"
            >
              Sponsoring-Anfrage stellen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
