"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Waves, Bike, PersonStanding, Mountain, ArrowUpRight, Map } from "lucide-react";

const courses = [
  {
    id: "swim",
    icon: Waves,
    name: "Schwimmstrecke",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/30",
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=1200&q=80",
    sprint: { distance: "500 m", elevation: null },
    olympic: { distance: "1.500 m", elevation: null },
    description:
      "Der Schwimmkurs findet im klaren Wasser des Musterstadt-Sees statt. Ein dreiecksförmiger Kurs mit gut sichtbaren Bojen führt die Athleten durch ruhiges Freiwasser. Für beide Distanzen starten die Athleten in gestaffelten Wellen.",
    highlights: [
      "Freiwasser-Schwimmen im natürlichen See",
      "Professionell markierter Kurs mit Bojen",
      "Rettungsschwimmer auf dem gesamten Kurs",
      "Neoprenanzug bei Temperaturen unter 22°C empfohlen",
      "Gepäckzone direkt am Ufer",
    ],
  },
  {
    id: "bike",
    icon: Bike,
    name: "Radstrecke",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/30",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    sprint: { distance: "20 km", elevation: "250 Hm" },
    olympic: { distance: "40 km", elevation: "480 Hm" },
    description:
      "Die Radstrecke führt durch die malerische Hügellandschaft rund um Musterstadt. Die Strecke bietet eine Mischung aus flachen Abschnitten für hohe Geschwindigkeiten und technischen Anstiegen, die Kraft und Strategie erfordern.",
    highlights: [
      "Vollgesperrte Straßen ohne Verkehr",
      "Asphaltkurs in sehr gutem Zustand",
      "Zwei Verpflegungsstationen",
      "Mechaniker-Support auf dem Kurs",
      "Motorradbegleitung durch Marshals",
    ],
  },
  {
    id: "run",
    icon: PersonStanding,
    name: "Laufstrecke",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/30",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=1200&q=80",
    sprint: { distance: "5 km", elevation: "80 Hm" },
    olympic: { distance: "10 km", elevation: "150 Hm" },
    description:
      "Der Laufkurs führt entlang der Seepromenade und durch den Stadtpark. Eine flache, schnelle Strecke mit begeisterten Zuschauern entlang der gesamten Route – perfekt für persönliche Bestzeiten.",
    highlights: [
      "Flache Seepromenaden-Strecke",
      "Verpflegung alle 2,5 km",
      "Motivierende Zuschauerzonen",
      "Klare Kilometertafeln",
      "Eindrucksvolles Zielgerade",
    ],
  },
];

export default function CoursesClient() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Strecken 2025</span>
            <h1 className="mt-3 text-5xl sm:text-6xl font-black text-white mb-6">
              Kenne jede Kurve
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-xl">
              Drei Disziplinen, drei einzigartige Strecken. Studiere die Details,
              plane deine Strategie, und geh bestens vorbereitet an den Start.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            {/* Course header */}
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-12 h-12 ${course.bgColor} rounded-xl flex items-center justify-center`}>
                <course.icon className={`w-6 h-6 ${course.color}`} />
              </div>
              <div>
                <p className="text-white/40 text-sm font-medium uppercase tracking-wider">Disziplin {i + 1}</p>
                <h2 className="text-3xl font-black text-white">{course.name}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image / Map placeholder */}
              <div className="relative h-72 lg:h-auto min-h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-background/30" />
                <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 bg-background/80 backdrop-blur-sm rounded-xl text-white text-sm font-medium cursor-pointer hover:bg-primary/20 transition-all">
                  <Map className="w-4 h-4 text-primary" />
                  Karte ansehen
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
                </div>
              </div>

              {/* Details */}
              <div className={`p-8 bg-surface-2 border ${course.borderColor} rounded-2xl`}>
                {/* Distances */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className={`p-4 ${course.bgColor} rounded-xl`}>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Sprint</p>
                    <p className={`text-2xl font-black ${course.color}`}>{course.sprint.distance}</p>
                    {course.sprint.elevation && (
                      <div className="flex items-center gap-1 mt-1">
                        <Mountain className="w-3 h-3 text-white/40" />
                        <p className="text-white/40 text-xs">{course.sprint.elevation}</p>
                      </div>
                    )}
                  </div>
                  <div className={`p-4 ${course.bgColor} rounded-xl`}>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Olympisch</p>
                    <p className={`text-2xl font-black ${course.color}`}>{course.olympic.distance}</p>
                    {course.olympic.elevation && (
                      <div className="flex items-center gap-1 mt-1">
                        <Mountain className="w-3 h-3 text-white/40" />
                        <p className="text-white/40 text-xs">{course.olympic.elevation}</p>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-white/60 leading-relaxed mb-6">{course.description}</p>

                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wider mb-3">Highlights</p>
                  <ul className="space-y-2">
                    {course.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-white/60">
                        <span className={`w-1.5 h-1.5 rounded-full ${course.color.replace("text-", "bg-")} mt-1.5 shrink-0`} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
