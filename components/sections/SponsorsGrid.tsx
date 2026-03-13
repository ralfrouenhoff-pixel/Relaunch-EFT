"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sponsors = {
  title: [
    { name: "SportShop GmbH", logo: "SS" },
    { name: "Stadtwerke Musterstadt", logo: "SW" },
  ],
  gold: [
    { name: "Bikeworld", logo: "BW" },
    { name: "RunTech", logo: "RT" },
    { name: "Aqua Sports", logo: "AS" },
  ],
  silver: [
    { name: "Hotel am See", logo: "HS" },
    { name: "Physio Pro", logo: "PP" },
    { name: "Energy Drink Co", logo: "ED" },
    { name: "LocalBank", logo: "LB" },
  ],
};

export default function SponsorsGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Partner</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
            Unsere Sponsoren
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-lg">
            Herzlichen Dank an alle Partner, die diesen Event möglich machen.
          </p>
        </motion.div>

        {/* Title sponsors */}
        <div className="mb-12">
          <p className="text-center text-white/30 text-xs uppercase tracking-widest mb-6">Hauptsponsoren</p>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors.title.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-center w-48 h-24 bg-surface-2 border border-primary/30 hover:border-primary rounded-2xl transition-all cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-3xl font-black text-primary/60 group-hover:text-primary transition-colors">{s.logo}</div>
                  <div className="text-white/40 text-xs mt-1">{s.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gold sponsors */}
        <div className="mb-10">
          <p className="text-center text-yellow-500/60 text-xs uppercase tracking-widest mb-6">Gold Partner</p>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.gold.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center justify-center w-36 h-20 bg-surface-2 border border-border hover:border-yellow-500/50 rounded-xl transition-all cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-2xl font-black text-white/40 group-hover:text-yellow-500/70 transition-colors">{s.logo}</div>
                  <div className="text-white/30 text-xs mt-1">{s.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Silver sponsors */}
        <div className="mb-12">
          <p className="text-center text-white/30 text-xs uppercase tracking-widest mb-6">Silber Partner</p>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.silver.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center justify-center w-28 h-16 bg-surface-2 border border-border hover:border-white/20 rounded-xl transition-all cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-xl font-black text-white/30 group-hover:text-white/60 transition-colors">{s.logo}</div>
                  <div className="text-white/20 text-xs mt-1">{s.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/sponsors"
            className="inline-block px-6 py-3 border border-primary/30 hover:border-primary text-primary hover:bg-primary/10 font-semibold rounded-xl transition-all"
          >
            Sponsor werden →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
