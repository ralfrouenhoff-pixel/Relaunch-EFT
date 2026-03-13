"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Package, Flag, Trophy, CheckCircle } from "lucide-react";

const days = [
  {
    date: "Freitag, 13. Juni 2025",
    label: "Tag 1 – Vorbereitung",
    events: [
      { time: "14:00 – 19:00", title: "Starterpaket-Ausgabe", location: "Veranstaltungszelt am See", icon: Package, highlight: false },
      { time: "18:00", title: "Athleten-Briefing (optional)", location: "Großes Zelt, Seepark", icon: Calendar, highlight: false },
    ],
  },
  {
    date: "Samstag, 14. Juni 2025",
    label: "Tag 2 – Starterpaket & Check-in",
    events: [
      { time: "09:00 – 18:00", title: "Starterpaket-Ausgabe", location: "Veranstaltungszelt am See", icon: Package, highlight: false },
      { time: "12:00 – 18:00", title: "Wechselzone öffnet", location: "Transitionsbereich", icon: Flag, highlight: false },
      { time: "16:00", title: "Pflicht-Briefing für alle Athleten", location: "Bühne Seepark", icon: Calendar, highlight: true },
      { time: "18:00", title: "Wechselzone schließt", location: "Transitionsbereich", icon: Flag, highlight: false },
    ],
  },
  {
    date: "Sonntag, 15. Juni 2025",
    label: "Tag 3 – Wettkampftag",
    events: [
      { time: "05:30", title: "Wechselzone öffnet", location: "Transitionsbereich", icon: Flag, highlight: false },
      { time: "06:30", title: "Wechselzone schließt für Athleten", location: "Transitionsbereich", icon: Clock, highlight: false },
      { time: "07:00", title: "START Sprint-Distanz", location: "Seeufer, Startbereich", icon: Flag, highlight: true },
      { time: "07:30", title: "START Staffel-Teams", location: "Seeufer, Startbereich", icon: Flag, highlight: true },
      { time: "08:00", title: "START Olympische Distanz", location: "Seeufer, Startbereich", icon: Flag, highlight: true },
      { time: "ca. 10:00", title: "Erste Finisher Sprint", location: "Zielgerade Seepark", icon: Trophy, highlight: false },
      { time: "ca. 12:00", title: "Erste Finisher Olympisch", location: "Zielgerade Seepark", icon: Trophy, highlight: false },
      { time: "13:00", title: "Siegerehrung Sprint & Staffel", location: "Hauptbühne Seepark", icon: Trophy, highlight: true },
      { time: "14:00", title: "Siegerehrung Olympische Distanz", location: "Hauptbühne Seepark", icon: Trophy, highlight: true },
      { time: "16:30", title: "Zeitlimit / Veranstaltungsende", location: "Kurs wird abgebaut", icon: CheckCircle, highlight: false },
    ],
  },
];

export default function ScheduleClient() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-bold uppercase tracking-widest">13.–15. Juni 2025</span>
            <h1 className="mt-3 text-5xl sm:text-6xl font-black text-white mb-6">
              Zeitplan
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-xl">
              Von der Starterpaket-Ausgabe bis zur Siegerehrung – alle wichtigen Termine im Überblick.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {days.map((day, dayIdx) => (
          <motion.div
            key={day.date}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            {/* Day header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                <span className="text-white font-black text-lg">{dayIdx + 1}</span>
              </div>
              <div>
                <p className="text-white/40 text-sm uppercase tracking-wider">{day.label}</p>
                <h2 className="text-2xl font-black text-white">{day.date}</h2>
              </div>
            </div>

            {/* Events */}
            <div className="relative ml-6 border-l-2 border-border pl-8 space-y-4">
              {day.events.map((event, eIdx) => (
                <motion.div
                  key={eIdx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: eIdx * 0.05 }}
                  className={`relative flex flex-col sm:flex-row gap-3 sm:gap-6 p-5 rounded-xl border transition-all ${
                    event.highlight
                      ? "bg-primary/10 border-primary/40"
                      : "bg-surface border-border"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[41px] w-4 h-4 rounded-full border-2 ${
                      event.highlight
                        ? "bg-primary border-primary"
                        : "bg-surface border-border"
                    }`}
                  />

                  {/* Time */}
                  <div className="shrink-0 min-w-[120px]">
                    <div className="flex items-center gap-2">
                      <Clock className={`w-4 h-4 ${event.highlight ? "text-primary" : "text-white/30"}`} />
                      <span className={`font-bold text-sm ${event.highlight ? "text-primary" : "text-white/60"}`}>
                        {event.time}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-2">
                      <event.icon className={`w-4 h-4 mt-0.5 shrink-0 ${event.highlight ? "text-accent" : "text-white/30"}`} />
                      <div>
                        <p className={`font-bold ${event.highlight ? "text-white" : "text-white/80"}`}>
                          {event.title}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <MapPin className="w-3 h-3 text-white/30" />
                          <p className="text-white/40 text-sm">{event.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {event.highlight && (
                    <div className="shrink-0">
                      <span className="px-2 py-0.5 bg-accent/20 text-accent text-xs font-bold rounded-full">
                        Wichtig
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-6 bg-surface border border-border rounded-2xl text-white/40 text-sm leading-relaxed"
        >
          <strong className="text-white/60">Hinweis:</strong> Alle Zeiten können sich aufgrund organisatorischer Gegebenheiten noch geringfügig ändern. Achte auf die aktuellen Informationen per E-Mail und auf unserer Website in den Tagen vor dem Event.
        </motion.div>
      </div>
    </div>
  );
}
