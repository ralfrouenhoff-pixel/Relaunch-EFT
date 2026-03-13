"use client";

import { motion } from "framer-motion";
import { ArrowLeftRight, Bike, Car, ClipboardList, ShieldCheck, Clock, Package, AlertTriangle } from "lucide-react";

const sections = [
  {
    id: "checkin",
    icon: Package,
    title: "Check-in & Starterpaket",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/30",
    items: [
      { label: "Freitag, 13. Juni", value: "14:00 – 19:00 Uhr – Starterpaket-Ausgabe" },
      { label: "Samstag, 14. Juni", value: "09:00 – 18:00 Uhr – Starterpaket-Ausgabe" },
      { label: "Inhalt", value: "Startnummern (Helm, Rad, Laufen), Transponder-Chip, Schwimmkappe, Starterbeutel" },
      { label: "Wichtig", value: "Gültiger Lichtbildausweis und Bestätigungs-E-Mail mitbringen" },
    ],
  },
  {
    id: "transition",
    icon: ArrowLeftRight,
    title: "Wechselzone (T1 & T2)",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
    items: [
      { label: "Öffnung", value: "Samstag 12:00 – 18:00 Uhr und Sonntag ab 05:30 Uhr" },
      { label: "Schließung", value: "Sonntag 06:30 Uhr – danach kein Zutritt mehr" },
      { label: "Zuweisung", value: "Stellplätze sind nach Startnummer zugewiesen" },
      { label: "Erlaubt", value: "Rad, Helm, Radschuhe, Laufschuhe, Riemen, Brille, Verpflegung" },
      { label: "Verboten", value: "Taschen, Koffer, externe Personen in der Zone" },
    ],
  },
  {
    id: "equipment",
    icon: Bike,
    title: "Ausrüstungsregeln",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/30",
    items: [
      { label: "Helm", value: "Pflicht ab dem Moment, wenn das Rad aus dem Rack genommen wird – CE/CPSC zertifiziert" },
      { label: "Rad", value: "Rennräder, Triathlonräder und Mountainbikes erlaubt, kein E-Bike" },
      { label: "Neopren", value: "Empfohlen unter 22°C, Pflicht unter 18°C, verboten über 24°C" },
      { label: "Musik", value: "Kopfhörer auf dem Kurs verboten" },
      { label: "Startnummer", value: "Muss während des Laufens sichtbar auf der Vorderseite getragen werden" },
    ],
  },
  {
    id: "timing",
    icon: Clock,
    title: "Zeitlimits",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/30",
    items: [
      { label: "Sprint gesamt", value: "2 Stunden 30 Minuten" },
      { label: "Olympisch gesamt", value: "4 Stunden 30 Minuten" },
      { label: "Schwimmen", value: "Sprint: 20 min / Olympisch: 35 min" },
      { label: "Folgen bei Überschreitung", value: "DNF (Did Not Finish) – Athlet wird von der Strecke genommen" },
    ],
  },
  {
    id: "parking",
    icon: Car,
    title: "Anreise & Parken",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/30",
    items: [
      { label: "Parkplatz P1", value: "Seeparkplatz Süd – 500 Plätze, kostenlos, direkt am Veranstaltungsgelände" },
      { label: "Parkplatz P2", value: "Schule am Berg – 300 Plätze, Shuttle zum See alle 15 min" },
      { label: "Anreise mit ÖPNV", value: "Linie 7 bis Haltestelle \"Seepark\" – 10 min vom Hauptbahnhof" },
      { label: "Fahrrad", value: "Absperrmöglichkeiten am Gelände vorhanden" },
      { label: "Öffnung Parkplätze", value: "Wettkampftag ab 05:00 Uhr" },
    ],
  },
  {
    id: "rules",
    icon: ClipboardList,
    title: "Wichtige Regeln",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/30",
    items: [
      { label: "Drafting", value: "Windschattenfahren verboten – 10m Abstand zum Vordermann einhalten" },
      { label: "Rücksichtnahme", value: "Überholen nur links, Ankündigung mit \"Vorbei\"" },
      { label: "Abfall", value: "Entsorgung nur an Verpflegungsstationen – Verwarnung bei Verstoß" },
      { label: "Sportsmanship", value: "Fairness und gegenseitiger Respekt sind Pflicht" },
      { label: "Disqualifikation", value: "Unsportliches Verhalten, Drafting, Fremdverpflegung außerhalb der Zonen" },
    ],
  },
];

export default function AthleteInfoClient() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Race Guide 2025</span>
            <h1 className="mt-3 text-5xl sm:text-6xl font-black text-white mb-6">
              Athleten-Information
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-xl">
              Alles was du wissen musst, um gut vorbereitet an den Start zu gehen.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Warning banner */}
      <div className="bg-accent/10 border-b border-accent/30 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-accent text-sm font-medium">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          Das Pflicht-Briefing findet am Samstag, 14. Juni um 16:00 Uhr statt. Teilnahme ist Voraussetzung für den Start.
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`p-8 bg-surface border ${section.border} rounded-2xl`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 ${section.bg} rounded-xl flex items-center justify-center`}>
                  <section.icon className={`w-5 h-5 ${section.color}`} />
                </div>
                <h2 className="text-xl font-black text-white">{section.title}</h2>
              </div>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row gap-1 sm:gap-4 py-2.5 border-b border-border/50 last:border-0">
                    <span className={`shrink-0 sm:w-40 text-xs font-bold uppercase tracking-wider ${section.color}`}>
                      {item.label}
                    </span>
                    <span className="text-white/60 text-sm leading-relaxed">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Safety section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 p-8 bg-surface border border-border rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-black text-white">Medizinische Versorgung & Sicherheit</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-white/60">
            <div>
              <p className="font-bold text-white mb-2">Sanitätsdienst</p>
              <p>Professioneller Rettungsdienst ist auf dem gesamten Kurs und am Veranstaltungsgelände präsent.</p>
            </div>
            <div>
              <p className="font-bold text-white mb-2">Rettungsschwimmer</p>
              <p>Mehrere Rettungsboote und Rettungsschwimmer sichern den Schwimmkurs lückenlos ab.</p>
            </div>
            <div>
              <p className="font-bold text-white mb-2">Notfallnummer</p>
              <p>Offizielle Notfallnummer des Events: <strong className="text-white">0800-EFT-2025</strong>. Im Ernstfall immer zuerst 112 rufen.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
