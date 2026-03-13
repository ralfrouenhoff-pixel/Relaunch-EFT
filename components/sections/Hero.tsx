"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, Calendar, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1920&q=80')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-background/40" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(0,174,239,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary text-sm font-semibold mb-8"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Anmeldung jetzt geöffnet
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-4"
        >
          <span className="block text-white">ERICH FILL</span>
          <span className="block gradient-text">TRIATHLON</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-xl sm:text-2xl font-light text-white/70 mb-10 max-w-2xl mx-auto"
        >
          Schwimmen. Radfahren. Laufen.
          <br />
          <span className="text-white font-medium">Erlebe den Wettkampf deines Lebens.</span>
        </motion.p>

        {/* Event meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2 text-white/60">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-medium">15. Juni 2025</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" />
          <div className="flex items-center gap-2 text-white/60">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-medium">Musterstadt, Deutschland</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/registration"
            className="group flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/40 hover:scale-105"
          >
            Jetzt anmelden
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/courses"
            className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-primary/50 text-white font-semibold text-lg rounded-xl transition-all duration-300 backdrop-blur-sm"
          >
            Strecken ansehen
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
        >
          {[
            { value: "500+", label: "Athleten" },
            { value: "15+", label: "Jahre Event" },
            { value: "3", label: "Distanzen" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-primary">{stat.value}</div>
              <div className="text-white/40 text-sm mt-1 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
