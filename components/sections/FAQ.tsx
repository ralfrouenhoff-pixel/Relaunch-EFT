"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Wie melde ich mich an?",
    a: "Die Anmeldung erfolgt ausschließlich online über unsere Registrierungsseite. Wähle deine Distanz, fülle das Formular aus und schließe die Zahlung ab. Du erhältst eine Bestätigungs-E-Mail.",
  },
  {
    q: "Was muss ich zum Wettkampf mitbringen?",
    a: "Du benötigst deinen Starterbeutel (Startnummer, Chip-Transponder, Schwimmkappe), dein Fahrrad mit Helm und deine Laufschuhe. Eine vollständige Checkliste findest du auf der Info-Seite.",
  },
  {
    q: "Gibt es ein Mindestalter?",
    a: "Das Mindestalter für die Sprint-Distanz beträgt 16 Jahre, für die Olympische Distanz 18 Jahre. Staffelteams können jüngere Athleten enthalten, wenn alle anderen Teilnehmer volljährig sind.",
  },
  {
    q: "Wann und wo ist die Starterpaket-Ausgabe?",
    a: "Die Starterpaket-Ausgabe findet am Samstag vor dem Wettkampf von 10:00 bis 18:00 Uhr im Veranstaltungszentrum am See statt. Am Wettkampftag selbst gibt es keine Ausgabe.",
  },
  {
    q: "Welche Ausrüstung ist erlaubt?",
    a: "Neoprenanzüge sind bei Wassertemperaturen unter 22°C empfohlen und unter 18°C Pflicht. Zeitfahrräder und Triathlonräder sind erlaubt. Alle Helme müssen den aktuellen Sicherheitsstandards entsprechen.",
  },
  {
    q: "Gibt es Zeitlimits?",
    a: "Ja. Sprint: 2,5 Stunden. Olympisch: 4,5 Stunden. Diese Zeitlimits gelten ab dem individuellen Startschuss. Athleten, die das Limit überschreiten, werden von der Strecke genommen.",
  },
  {
    q: "Kann ich meine Anmeldung stornieren oder übertragen?",
    a: "Stornierungen bis 60 Tage vor dem Event werden zu 70% erstattet. Anmeldungen können bis 30 Tage vorher auf eine andere Person übertragen werden (Gebühr: 15 €).",
  },
  {
    q: "Gibt es Verpflegung auf der Strecke?",
    a: "Ja, auf der Radstrecke und der Laufstrecke sind Verpflegungsstationen mit Wasser, Elektrolytgetränken und Gels eingerichtet. Eigene Verpflegung kann mitgebracht werden.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-widest">FAQ</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
            Häufige Fragen
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            Alles, was du vor dem Start wissen musst.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                open === i ? "border-primary/50 bg-primary/5" : "border-border bg-surface"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className={`font-semibold ${open === i ? "text-primary" : "text-white"}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180 text-primary" : "text-white/40"
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-5 text-white/60 text-sm leading-relaxed border-t border-border/50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
