"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/course", label: "Strecke" },
  { href: "/schedule", label: "Zeitplan" },
  { href: "/info", label: "Info" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const toggleMobile = () => {
    const next = !mobileOpen;
    setMobileOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-primary rounded-lg rotate-3 opacity-30 group-hover:rotate-6 transition-transform duration-300" />
                <div className="relative w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white fill-white" />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-[15px] tracking-tight text-white">
                  Erich Fill
                </span>
                <span className="font-bold text-[11px] tracking-widest text-primary uppercase">
                  Triathlon
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center" aria-label="Hauptnavigation">
              {/* Nav links */}
              <div className="flex items-center gap-1 mr-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isActive(link.href)
                        ? "text-white"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {isActive(link.href) && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-white/[0.08] rounded-lg"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                ))}
              </div>

              {/* Register CTA */}
              <Link
                href="/registration"
                className={`group flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  pathname === "/registration"
                    ? "bg-accent text-white shadow-[0_0_24px_rgba(255,90,31,0.4)]"
                    : "bg-accent hover:bg-accent/90 text-white hover:shadow-[0_0_24px_rgba(255,90,31,0.35)]"
                }`}
              >
                Anmelden
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </nav>

            {/* Mobile: Register pill + hamburger */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link
                href="/registration"
                className="flex items-center gap-1.5 px-4 py-2 bg-accent text-white font-bold text-sm rounded-lg"
              >
                Anmelden
              </Link>
              <button
                onClick={toggleMobile}
                className="p-2 text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={mobileOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={mobileOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
              onClick={toggleMobile}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-surface border-l border-border flex flex-col lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-border">
                <Link href="/" onClick={toggleMobile} className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                    <Zap className="w-3.5 h-3.5 text-white fill-white" />
                  </div>
                  <span className="font-black text-sm text-white">EFT Triathlon</span>
                </Link>
                <button
                  onClick={toggleMobile}
                  className="p-1.5 text-white/40 hover:text-white transition-colors rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 px-4 py-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={toggleMobile}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-base transition-all ${
                        isActive(link.href)
                          ? "bg-white/[0.08] text-white"
                          : "text-white/50 hover:text-white hover:bg-white/[0.05]"
                      }`}
                    >
                      {link.label}
                      {isActive(link.href) && (
                        <span className="ml-auto w-1.5 h-1.5 bg-primary rounded-full" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA */}
              <div className="px-4 pb-8">
                <Link
                  href="/registration"
                  onClick={toggleMobile}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-accent hover:bg-accent/90 text-white font-black text-base rounded-xl transition-all shadow-[0_0_24px_rgba(255,90,31,0.3)]"
                >
                  Jetzt anmelden
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-white/25 text-xs text-center mt-3">15. Juni 2025 · Musterstadt</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
