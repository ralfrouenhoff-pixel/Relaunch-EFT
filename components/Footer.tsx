import Link from "next/link";
import { Zap, Mail, MapPin, Phone, Instagram, Facebook, Youtube } from "lucide-react";

const footerLinks = {
  event: [
    { href: "/courses", label: "Strecken" },
    { href: "/schedule", label: "Zeitplan" },
    { href: "/registration", label: "Anmeldung" },
    { href: "/results", label: "Ergebnisse" },
  ],
  info: [
    { href: "/athlete-info", label: "Athleten-Info" },
    { href: "/sponsors", label: "Sponsoren" },
    { href: "/contact", label: "Kontakt" },
  ],
  legal: [
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-black text-lg tracking-tight">
                <span className="text-white">Erich Fill</span>
                <span className="text-primary ml-1">Triathlon</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Schwimmen. Radfahren. Laufen. Der Erich Fill Triathlon – wo Leidenschaft auf Leistung trifft.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-primary/20 hover:text-primary rounded-lg flex items-center justify-center text-white/50 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-primary/20 hover:text-primary rounded-lg flex items-center justify-center text-white/50 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-primary/20 hover:text-primary rounded-lg flex items-center justify-center text-white/50 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Event links */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Event</h3>
            <ul className="space-y-3">
              {footerLinks.event.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info links */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Informationen</h3>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Musterstadt, Deutschland</span>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@erichfilltriathlon.de" className="hover:text-primary transition-colors">
                  info@erichfilltriathlon.de
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+491234567890" className="hover:text-primary transition-colors">
                  +49 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Erich Fill Triathlon. Alle Rechte vorbehalten.
          </p>
          <p className="text-white/30 text-sm">
            Made with ❤️ for athletes
          </p>
        </div>
      </div>
    </footer>
  );
}
