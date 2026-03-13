"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Youtube, CheckCircle } from "lucide-react";

const topics = [
  "Allgemeine Anfrage",
  "Anmeldung & Startplatz",
  "Streckeninformation",
  "Presse & Medien",
  "Sponsoring",
  "Freiwillige & Helfer",
  "Sonstiges",
];

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Wir helfen gerne</span>
            <h1 className="mt-3 text-5xl sm:text-6xl font-black text-white mb-6">Kontakt</h1>
            <p className="text-white/50 max-w-2xl mx-auto text-xl">
              Fragen, Feedback oder Kooperationsanfragen? Das Organisationsteam steht dir zur Verfügung.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-black text-white mb-6">Organisationsteam</h2>

              <div className="space-y-4">
                <a href="mailto:info@erichfilltriathlon.de" className="flex items-start gap-4 p-4 bg-surface border border-border hover:border-primary/40 rounded-xl transition-all group">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">E-Mail</p>
                    <p className="text-white font-medium group-hover:text-primary transition-colors">
                      info@erichfilltriathlon.de
                    </p>
                  </div>
                </a>

                <a href="tel:+491234567890" className="flex items-start gap-4 p-4 bg-surface border border-border hover:border-primary/40 rounded-xl transition-all group">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Telefon</p>
                    <p className="text-white font-medium group-hover:text-primary transition-colors">
                      +49 123 456 7890
                    </p>
                    <p className="text-white/30 text-xs mt-0.5">Mo–Fr 09:00–17:00 Uhr</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-surface border border-border rounded-xl">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Adresse</p>
                    <p className="text-white font-medium">Veranstaltungsverein EFT e.V.</p>
                    <p className="text-white/50 text-sm">Seestraße 42</p>
                    <p className="text-white/50 text-sm">12345 Musterstadt</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-white/40 text-sm uppercase tracking-wider mb-4">Folge uns</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-surface border border-border hover:border-primary/40 hover:bg-primary/10 rounded-xl flex items-center justify-center text-white/50 hover:text-primary transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-surface border border-border hover:border-primary/40 hover:bg-primary/10 rounded-xl flex items-center justify-center text-white/50 hover:text-primary transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-surface border border-border hover:border-primary/40 hover:bg-primary/10 rounded-xl flex items-center justify-center text-white/50 hover:text-primary transition-all">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8 bg-surface border border-primary/30 rounded-2xl">
                <CheckCircle className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-black text-white mb-3">Nachricht gesendet!</h3>
                <p className="text-white/50 max-w-sm">
                  Vielen Dank für deine Nachricht. Wir melden uns innerhalb von 24 Stunden bei dir.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", topic: "", message: "" }); }}
                  className="mt-8 px-6 py-3 bg-primary/10 border border-primary/30 text-primary font-semibold rounded-xl hover:bg-primary/20 transition-all"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 p-8 bg-surface border border-border rounded-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/60 text-sm font-medium mb-2">Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Max Mustermann"
                      className="w-full px-4 py-3 bg-surface-2 border border-border hover:border-primary/40 focus:border-primary rounded-xl text-white placeholder-white/30 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm font-medium mb-2">E-Mail *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="max@beispiel.de"
                      className="w-full px-4 py-3 bg-surface-2 border border-border hover:border-primary/40 focus:border-primary rounded-xl text-white placeholder-white/30 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/60 text-sm font-medium mb-2">Thema *</label>
                  <select
                    required
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    className="w-full px-4 py-3 bg-surface-2 border border-border hover:border-primary/40 focus:border-primary rounded-xl text-white outline-none transition-all"
                  >
                    <option value="" disabled>Thema auswählen...</option>
                    {topics.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/60 text-sm font-medium mb-2">Nachricht *</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Deine Nachricht..."
                    className="w-full px-4 py-3 bg-surface-2 border border-border hover:border-primary/40 focus:border-primary rounded-xl text-white placeholder-white/30 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 py-4 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl transition-all hover:shadow-xl hover:shadow-primary/30"
                >
                  Nachricht senden
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
