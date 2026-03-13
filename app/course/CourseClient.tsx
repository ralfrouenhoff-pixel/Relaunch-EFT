"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Waves, Bike, PersonStanding, Mountain, Map, ArrowRight } from "lucide-react";

const courses = [
  {
    id: "swim",
    number: "01",
    icon: Waves,
    name: "Schwimmen",
    accentColor: "#00AEEF",
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=1200&q=80",
    tag: "Freiwasser · See",
    sprint: { distance: "500 m", elevation: null },
    olympic: { distance: "1.500 m", elevation: null },
    description:
      "Der Schwimmkurs findet im klaren Wasser des Musterstadt-Sees statt. Ein dreiecksförmiger Kurs mit gut sichtbaren Bojen führt die Athleten durch ruhiges Freiwasser. Staffelwechsel erfolgt direkt am Seeufer in T1.",
    highlights: [
      "Freiwasser im natürlichen See",
      "Dreieckskurs mit professioneller Boje-Markierung",
      "Rettungsschwimmer & Boote auf der gesamten Strecke",
      "Neoprenanzug bei unter 22°C empfohlen",
      "Gestaffelte Startwellen für geringere Dichte",
    ],
  },
  {
    id: "bike",
    number: "02",
    icon: Bike,
    name: "Radfahren",
    accentColor: "#FF5A1F",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    tag: "Asphalt · Hügelig",
    sprint: { distance: "20 km", elevation: "250 Hm" },
    olympic: { distance: "40 km", elevation: "480 Hm" },
    description:
      "Die Radstrecke führt durch die malerische Hügellandschaft rund um Musterstadt. Vollgesperrte Straßen, moderater Anstieg im Mittelteil und eine schnelle Abfahrt zurück in die Wechselzone. Technisch anspruchsvoll, aber fair.",
    highlights: [
      "Vollgesperrter Asphalt ohne Verkehr",
      "Zwei Verpflegungsstationen mit Wasser & Gel",
      "Mechaniker-Support an Kilometer 10 / 20",
      "Marshals auf Motorrädern auf der gesamten Strecke",
      "Keine Drafting-Zone – 10m Mindestabstand",
    ],
  },
  {
    id: "run",
    number: "03",
    icon: PersonStanding,
    name: "Laufen",
    accentColor: "#22c55e",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=1200&q=80",
    tag: "Asphalt & Park · Flach",
    sprint: { distance: "5 km", elevation: "80 Hm" },
    olympic: { distance: "10 km", elevation: "150 Hm" },
    description:
      "Der Laufkurs führt entlang der Seepromenade und durch den Stadtpark – flach, schnell und atmosphärisch. Zuschauer säumen die gesamte Strecke bis zur emotionalen Zielgeraden vor dem Seepavillon.",
    highlights: [
      "Flache Seepromenaden-Strecke",
      "Verpflegung alle 2,5 km",
      "Lautstarke Zuschauerzonen",
      "Klare Kilometermarkierungen",
      "Unvergessliche Zielgerade",
    ],
  },
];

export default function CourseClient() {
  const [activeTab, setActiveTab] = useState<"sprint" | "olympic">("olympic");

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero header */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,174,239,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-5">
              <span className="w-8 h-px bg-primary" />
              Strecken 2025
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight">
                Kenne jede
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #00AEEF, #FF5A1F)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Kurve.
                </span>
              </h1>
              <p className="text-white/40 max-w-sm text-base leading-relaxed lg:text-right lg:mb-1">
                Drei Disziplinen. Eine Strecke, die du nie vergessen wirst.
                Studiere die Details – plan deine Strategie.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Distanz-Toggle */}
      <div className="sticky top-[72px] z-30 bg-background/90 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-3">
            <span className="text-white/30 text-sm mr-3 hidden sm:block">Distanz:</span>
            {(["sprint", "olympic"] as const).map((d) => (
              <button
                key={d}
                onClick={() => setActiveTab(d)}
                className={`relative px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  activeTab === d ? "text-white" : "text-white/40 hover:text-white/70"
                }`}
              >
                {activeTab === d && (
                  <motion.span
                    layoutId="dist-tab"
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative capitalize">
                  {d === "sprint" ? "Sprint" : "Olympisch"}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              {/* Image */}
              <div className={`relative rounded-2xl overflow-hidden h-64 lg:h-auto min-h-[300px] ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <Image
                  src={course.image}
                  alt={course.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 40%, rgba(11,15,25,0.7) 100%)`,
                  }}
                />
                {/* Course number overlay */}
                <div
                  className="absolute top-5 left-5 text-7xl font-black opacity-20 leading-none select-none"
                  style={{ color: course.accentColor }}
                >
                  {course.number}
                </div>
                {/* Tag */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 px-3 py-1.5 bg-background/70 backdrop-blur-sm rounded-lg">
                  <course.icon className="w-4 h-4" style={{ color: course.accentColor }} />
                  <span className="text-white text-xs font-semibold">{course.tag}</span>
                </div>
              </div>

              {/* Details */}
              <div className={`flex flex-col justify-center ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${course.accentColor}20` }}
                  >
                    <course.icon className="w-5 h-5" style={{ color: course.accentColor }} />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest">Disziplin {course.number}</p>
                    <h2 className="text-2xl font-black text-white">{course.name}</h2>
                  </div>
                </div>

                {/* Animated distance display */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-4 mb-5"
                  >
                    <div
                      className="flex-1 p-4 rounded-xl"
                      style={{ background: `${course.accentColor}12`, border: `1px solid ${course.accentColor}25` }}
                    >
                      <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Distanz</p>
                      <p
                        className="text-3xl font-black"
                        style={{ color: course.accentColor }}
                      >
                        {course[activeTab].distance}
                      </p>
                    </div>
                    {course[activeTab].elevation && (
                      <div className="flex-1 p-4 rounded-xl bg-white/[0.04] border border-border">
                        <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Höhenmeter</p>
                        <div className="flex items-baseline gap-1.5">
                          <Mountain className="w-4 h-4 text-white/40 mt-auto mb-0.5" />
                          <p className="text-3xl font-black text-white">{course[activeTab].elevation}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <p className="text-white/50 text-sm leading-relaxed mb-6">{course.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-white/50">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ background: course.accentColor }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Map CTA */}
                <button className="group flex items-center gap-2 w-fit text-sm font-semibold transition-colors"
                  style={{ color: course.accentColor }}
                >
                  <Map className="w-4 h-4" />
                  Streckenplan ansehen
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Divider */}
            {i < courses.length - 1 && (
              <div className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg">Bereit für die Strecke?</p>
            <p className="text-white/40 text-sm">Sichere dir deinen Startplatz – Plätze sind begrenzt.</p>
          </div>
          <Link
            href="/registration"
            className="flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_24px_rgba(255,90,31,0.4)]"
          >
            Jetzt anmelden
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
