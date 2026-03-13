"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Heart, Zap } from "lucide-react";

const highlights = [
  {
    icon: Trophy,
    title: "Weltklasse Event",
    description:
      "Seit über 15 Jahren zieht der Erich Fill Triathlon Athleten aus ganz Deutschland und Europa an. Ein Event mit Tradition und Leidenschaft.",
  },
  {
    icon: Users,
    title: "Starke Gemeinschaft",
    description:
      "Über 500 Athleten, hunderte von Freiwilligen und tausende begeisterte Zuschauer machen dieses Event zu einem unvergesslichen Erlebnis.",
  },
  {
    icon: Heart,
    title: "Für alle Leistungsstufen",
    description:
      "Egal ob Einsteiger beim Sprint oder erfahrener Athlet auf der Olympischen Distanz – hier findet jeder seine Herausforderung.",
  },
  {
    icon: Zap,
    title: "Makellose Organisation",
    description:
      "Von der Anmeldung bis zur Siegerehrung – professionelle Logistik, Zeitnahme und Streckenführung auf höchstem Niveau.",
  },
];

export default function EventHighlights() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Das Event</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
            Mehr als nur ein Rennen
          </h2>
          <p className="mt-4 text-white/50 max-w-2xl mx-auto text-lg">
            Der Erich Fill Triathlon ist ein Erlebnis für Körper, Geist und Seele –
            eingebettet in eine atemberaubende Naturkulisse.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 bg-surface-2 hover:bg-primary/10 border border-border hover:border-primary/40 rounded-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center mb-4 transition-all">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
