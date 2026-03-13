"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, Calendar, MapPin } from "lucide-react";

const EVENT_DATE = new Date("2025-06-15T07:00:00");

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = EVENT_DATE.getTime() - now.getTime();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center">
        <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm" />
        <motion.span
          key={value}
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative text-2xl sm:text-3xl font-black text-white tabular-nums"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </div>
      <span className="text-white/30 text-xs uppercase tracking-widest mt-2">{label}</span>
    </div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 160]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const countdown = useCountdown();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-[-10%] bg-cover bg-center bg-no-repeat"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
      </motion.div>

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(11,15,25,0.2) 0%, rgba(11,15,25,0.55) 50%, rgba(11,15,25,1) 100%)",
        }}
      />

      {/* Diagonal accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, transparent, #00AEEF 30%, #FF5A1F 70%, transparent)" }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-semibold mb-10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Anmeldung jetzt geöffnet
            <span className="w-px h-3 bg-primary/30" />
            <span className="text-white/50 font-normal">15. Juni 2025</span>
          </motion.div>

          {/* Main headline */}
          <div className="overflow-hidden mb-2">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base font-bold uppercase tracking-[0.4em] text-white/40 mb-4"
            >
              Schwimmen · Radfahren · Laufen
            </motion.p>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,12vw,9rem)] font-black leading-[0.9] tracking-[-0.02em] text-white uppercase"
            >
              Erich Fill
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,12vw,9rem)] font-black leading-[0.9] tracking-[-0.02em] uppercase"
              style={{
                background: "linear-gradient(135deg, #00AEEF 0%, #FF5A1F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Triathlon
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/50 max-w-lg mb-10 leading-relaxed"
          >
            Erlebe den Wettkampf deines Lebens – in einer der schönsten Naturkulissen Deutschlands.
          </motion.p>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mb-12"
          >
            <p className="text-white/30 text-xs uppercase tracking-widest text-center mb-4">
              Countdown bis zum Start
            </p>
            <div className="flex items-center gap-3 sm:gap-5">
              <CountdownUnit value={countdown.days} label="Tage" />
              <span className="text-white/20 text-2xl font-light pb-6">:</span>
              <CountdownUnit value={countdown.hours} label="Std" />
              <span className="text-white/20 text-2xl font-light pb-6">:</span>
              <CountdownUnit value={countdown.minutes} label="Min" />
              <span className="text-white/20 text-2xl font-light pb-6">:</span>
              <CountdownUnit value={countdown.seconds} label="Sek" />
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <Link
              href="/registration"
              className="group relative flex items-center gap-3 px-8 py-4 bg-accent text-white font-black text-lg rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,90,31,0.5)] hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Jetzt anmelden</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/course"
              className="flex items-center gap-2 px-8 py-4 bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 hover:border-white/30 text-white font-semibold text-lg rounded-2xl transition-all duration-300 backdrop-blur-sm"
            >
              Strecken ansehen
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center gap-0 divide-x divide-white/10 border border-white/10 rounded-2xl bg-white/[0.04] backdrop-blur-sm overflow-hidden"
          >
            {[
              { value: "500+", label: "Athleten" },
              { value: "15+", label: "Jahre" },
              { value: "3", label: "Distanzen" },
              { value: "∞", label: "Momente" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 sm:px-8 py-4 text-center">
                <div className="text-xl sm:text-2xl font-black text-primary">{stat.value}</div>
                <div className="text-white/30 text-xs uppercase tracking-wider mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Location strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 sm:px-12 py-4 bg-background/60 backdrop-blur-md border-t border-white/5"
      >
        <div className="flex items-center gap-6 text-sm text-white/40">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>15. Juni 2025</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Musterstadt, Deutschland</span>
          </div>
        </div>
        <motion.button
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 text-white/30 text-xs uppercase tracking-widest hover:text-white/60 transition-colors"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </section>
  );
}
