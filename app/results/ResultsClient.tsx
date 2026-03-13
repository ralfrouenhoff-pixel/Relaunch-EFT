"use client";

import { motion } from "framer-motion";
import { Trophy, Clock, Medal, Search } from "lucide-react";

const pastResults = [
  {
    year: "2024",
    winners: {
      sprint: { male: "Max Müller", time: "0:58:23" },
      olympic: { male: "Thomas Braun", time: "1:57:44" },
    },
    participants: 487,
    finishers: 461,
  },
  {
    year: "2023",
    winners: {
      sprint: { male: "Stefan Hoffmann", time: "1:01:12" },
      olympic: { male: "Markus Schmidt", time: "2:02:18" },
    },
    participants: 512,
    finishers: 488,
  },
];

export default function ResultsClient() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Ergebnisse</span>
            <h1 className="mt-3 text-5xl sm:text-6xl font-black text-white mb-6">
              Resultate
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-xl">
              Offizielle Ergebnisse aller Editionen des Erich Fill Triathlons.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* 2025 Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-12 bg-surface border border-primary/30 rounded-2xl text-center"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl font-black text-white mb-4">Erich Fill Triathlon 2025</h2>
          <p className="text-white/50 text-lg mb-2">15. Juni 2025</p>
          <p className="text-white/40 max-w-md mx-auto mb-8">
            Die Ergebnisse werden unmittelbar nach dem Wettkampf hier veröffentlicht.
            Live-Timing ist am Wettkampftag über den untenstehenden Link verfügbar.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-xl text-primary font-semibold">
            <Clock className="w-4 h-4" />
            Live-Timing am 15. Juni 2025 verfügbar
          </div>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-black text-white mb-6">Athlet suchen</h2>
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
            <input
              type="text"
              placeholder="Name, Startnummer oder Team..."
              className="w-full pl-12 pr-4 py-4 bg-surface border border-border hover:border-primary/40 focus:border-primary rounded-xl text-white placeholder-white/30 outline-none transition-all"
            />
          </div>
        </motion.div>

        {/* Past results */}
        <h2 className="text-2xl font-black text-white mb-6">Vergangene Jahre</h2>
        <div className="space-y-6">
          {pastResults.map((result, i) => (
            <motion.div
              key={result.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-surface border border-border hover:border-primary/30 rounded-2xl transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
                <h3 className="text-2xl font-black text-white">Edition {result.year}</h3>
                <div className="flex gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-black text-primary">{result.participants}</p>
                    <p className="text-white/40 text-xs uppercase tracking-wider">Starter</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-black text-green-400">{result.finishers}</p>
                    <p className="text-white/40 text-xs uppercase tracking-wider">Finisher</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-surface-2 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Medal className="w-4 h-4 text-primary" />
                    <span className="text-primary text-sm font-bold uppercase tracking-wider">Sprint Sieger</span>
                  </div>
                  <p className="font-bold text-white">{result.winners.sprint.male}</p>
                  <p className="text-white/40 text-sm mt-1">{result.winners.sprint.time}</p>
                </div>
                <div className="p-4 bg-surface-2 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy className="w-4 h-4 text-accent" />
                    <span className="text-accent text-sm font-bold uppercase tracking-wider">Olympisch Sieger</span>
                  </div>
                  <p className="font-bold text-white">{result.winners.olympic.male}</p>
                  <p className="text-white/40 text-sm mt-1">{result.winners.olympic.time}</p>
                </div>
              </div>

              <div className="mt-4 flex gap-4">
                <button className="text-primary hover:text-white text-sm font-semibold transition-colors">
                  Vollständige Ergebnisliste →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
