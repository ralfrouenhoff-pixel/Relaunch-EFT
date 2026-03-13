"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section ref={ref} className="relative py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-[-10%] bg-cover bg-center"
        aria-hidden
        role="presentation"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-background/75" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(255,90,31,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(0,174,239,0.10) 0%, transparent 60%)",
        }}
      />

      {/* Top + bottom accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <motion.div style={{ y: textY }} className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left – copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Plätze begrenzt
            </span>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mb-8">
              Bist du bereit
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #FF5A1F, #00AEEF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                für den Start?
              </span>
            </h2>

            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-md">
              Sichere dir deinen Startplatz. Wer zu lange wartet,
              schaut am Wettkampftag vom Rand zu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/registration"
                className="group relative flex items-center justify-center gap-3 px-9 py-5 bg-accent text-white font-black text-lg rounded-2xl transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,90,31,0.5)] hover:scale-[1.03] overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Jetzt anmelden</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/courses"
                className="flex items-center justify-center gap-2 px-9 py-5 border border-white/15 hover:border-white/30 text-white font-semibold text-lg rounded-2xl transition-all hover:bg-white/[0.07]"
              >
                Strecken ansehen
              </Link>
            </div>
          </motion.div>

          {/* Right – info cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {[
              {
                icon: Calendar,
                label: "Wettkampftag",
                value: "15. Juni 2025",
                sub: "Sonntag – Startschuss 07:00 Uhr",
              },
              {
                icon: MapPin,
                label: "Austragungsort",
                value: "Musterstadt, DE",
                sub: "Seeufer Seepark – kostenlose Parkplätze",
              },
              {
                icon: Clock,
                label: "Anmeldeschluss",
                value: "31. Mai 2025",
                sub: "oder bis alle Startplätze vergeben sind",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.1 }}
                className="flex items-center gap-5 p-5 bg-white/[0.05] border border-white/[0.08] hover:border-white/15 rounded-2xl backdrop-blur-sm transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                  <p className="text-white font-bold text-lg">{item.value}</p>
                  <p className="text-white/40 text-sm">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
