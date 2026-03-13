"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Waves, Bike, PersonStanding, ArrowRight, Mountain } from "lucide-react";

const courses = [
  {
    id: "swim",
    icon: Waves,
    name: "Schwimmstrecke",
    distance: "500 m / 1.500 m",
    elevation: "–",
    description:
      "Klares Seewasser und ein fairer Rundkurs. Die Strecke verläuft in einem perfekt abgesteckten Dreieck – ideal für eine schnelle Orientierung.",
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80",
    color: "from-blue-500 to-cyan-500",
    tag: "Freiwasser",
  },
  {
    id: "bike",
    icon: Bike,
    name: "Radstrecke",
    distance: "20 km / 40 km",
    elevation: "250 m / 480 m",
    description:
      "Kurvenreiche Straßen durch idyllische Landschaft mit moderaten Anstiegen. Die Strecke bietet technische Passagen und lange Abschnitte zum Vollgas geben.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    color: "from-orange-500 to-amber-500",
    tag: "Asphalt",
  },
  {
    id: "run",
    icon: PersonStanding,
    name: "Laufstrecke",
    distance: "5 km / 10 km",
    elevation: "80 m / 150 m",
    description:
      "Ein Mix aus Seepromenade und Park. Flach, schnell und mit toller Stimmung der Zuschauer entlang der gesamten Strecke bis zur Ziellinie.",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&q=80",
    color: "from-green-500 to-emerald-500",
    tag: "Asphalt & Park",
  },
];

export default function CoursePreview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Strecken</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
            Kenne deine Strecke
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-lg">
            Drei Disziplinen. Eine unvergessliche Kulisse.
          </p>
        </motion.div>

        <div className="space-y-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 p-6 bg-surface-2 border border-border hover:border-primary/30 rounded-2xl transition-all`}
            >
              {/* Image */}
              <div className="relative lg:w-2/5 h-56 lg:h-64 rounded-xl overflow-hidden shrink-0">
                <Image
                  src={course.image}
                  alt={course.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-30`} />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg">
                  <course.icon className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-bold uppercase tracking-wider">{course.tag}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center flex-1">
                <div className={`inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-gradient-to-r ${course.color} bg-opacity-20 text-white text-xs font-bold uppercase tracking-wider mb-3`}>
                  <course.icon className="w-3.5 h-3.5" />
                  {course.name}
                </div>
                <h3 className="text-2xl font-black text-white mb-3">{course.name}</h3>

                <div className="flex gap-6 mb-4">
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Distanz</p>
                    <p className="text-white font-bold">{course.distance}</p>
                  </div>
                  {course.elevation !== "–" && (
                    <div>
                      <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Höhenmeter</p>
                      <div className="flex items-center gap-1">
                        <Mountain className="w-3.5 h-3.5 text-white/50" />
                        <p className="text-white font-bold">{course.elevation}</p>
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-white/50 leading-relaxed mb-6">{course.description}</p>

                <Link
                  href="/course"
                  className="flex items-center gap-2 w-fit text-primary hover:text-white font-semibold text-sm transition-colors group"
                >
                  Detailkarte ansehen
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
