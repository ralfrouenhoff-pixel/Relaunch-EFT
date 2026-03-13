"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Users, Heart, Zap } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Athleten" },
  { value: 15, suffix: "+", label: "Jahre Event" },
  { value: 3, suffix: "", label: "Distanzen" },
  { value: 98, suffix: "%", label: "Finisher-Quote" },
];

const highlights = [
  {
    icon: Trophy,
    title: "Weltklasse Event",
    description:
      "Seit über 15 Jahren zieht der Erich Fill Triathlon Athleten aus ganz Deutschland und Europa an.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: Users,
    title: "Starke Gemeinschaft",
    description:
      "Über 500 Athleten, hunderte Freiwillige und tausende begeisterte Zuschauer.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Für alle Niveaus",
    description:
      "Vom Sprint-Einsteiger bis zum Olympischen Profi – jeder findet seine Herausforderung.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Zap,
    title: "Top Organisation",
    description:
      "Professionelle Logistik, Chip-Zeitnahme und Streckenführung auf höchstem Niveau.",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useAnimatedCount(inView ? target : 0, target);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function useAnimatedCount(from: number, to: number): [number, (n: number) => void] {
  const [count, setCount] = useCountState(from);
  useEffect(() => {
    if (from === 0 && to === 0) return;
    let start: number | null = null;
    const duration = 1400;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(from + eased * (to - from)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [from, to]);
  return [count, setCount];
}

// Tiny hook helpers to avoid lint issues
import { useState, useEffect } from "react";
function useCountState(initial: number): [number, (n: number) => void] {
  return useState(initial);
}

export default function EventHighlights() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-surface overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.03]"
        style={{
          background: "radial-gradient(ellipse at right center, #00AEEF, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Editorial header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-5">
              <span className="w-8 h-px bg-primary" />
              Das Event
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
              Mehr als
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #00AEEF, #FF5A1F)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                nur ein Rennen.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/50 text-lg leading-relaxed lg:mb-2"
          >
            Der Erich Fill Triathlon ist ein Erlebnis für Körper, Geist und Seele –
            eingebettet in eine atemberaubende Naturkulisse, die dich immer wiederkommen lässt.
          </motion.p>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden mb-20"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-surface-2 px-8 py-7 flex flex-col gap-1"
            >
              <span className="text-4xl sm:text-5xl font-black text-white">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-white/30 text-sm uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 bg-surface-2 border border-border hover:border-white/20 rounded-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${item.bg}`}
                style={{ filter: "blur(40px)", transform: "scale(1.5)" }}
              />

              <div className={`relative w-11 h-11 ${item.bg} rounded-xl flex items-center justify-center mb-5`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <h3 className="relative font-bold text-white text-base mb-2">{item.title}</h3>
              <p className="relative text-white/40 text-sm leading-relaxed">{item.description}</p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity`}
                style={{ background: `linear-gradient(90deg, transparent, currentColor, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
