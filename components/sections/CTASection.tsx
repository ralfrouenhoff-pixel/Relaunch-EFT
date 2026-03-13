"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />

      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-sm font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Jetzt anmelden
            </span>

            <h2 className="text-5xl sm:text-6xl font-black text-white leading-none mb-6">
              Bist du bereit
              <br />
              <span className="gradient-text">für den Start?</span>
            </h2>

            <p className="text-white/60 text-xl leading-relaxed mb-8">
              Sichere dir jetzt deinen Startplatz. Die Plätze sind begrenzt –
              wer zu lange wartet, schaut vom Rand zu.
            </p>

            <div className="flex flex-wrap gap-6 mb-10 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>15. Juni 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Musterstadt, Deutschland</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/registration"
                className="group flex items-center justify-center gap-2 px-10 py-5 bg-accent hover:bg-accent/90 text-white font-black text-xl rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/40 hover:scale-105"
              >
                Jetzt anmelden
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/courses"
                className="flex items-center justify-center gap-2 px-10 py-5 border border-white/20 hover:border-primary text-white font-semibold text-xl rounded-xl transition-all hover:bg-primary/10"
              >
                Strecken ansehen
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
