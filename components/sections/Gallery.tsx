"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80", alt: "Triathlon Start", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=400&q=80", alt: "Schwimmen" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", alt: "Radfahren" },
  { src: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=400&q=80", alt: "Laufen" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80", alt: "Zieleinlauf" },
  { src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&q=80", alt: "Athleten beim Start" },
];

export default function Gallery() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest">Galerie</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
            Impressionen
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-lg">
            Bilder sagen mehr als Worte. Erlebe die Atmosphäre des Erich Fill Triathlons.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl overflow-hidden group ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-all duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-semibold text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
