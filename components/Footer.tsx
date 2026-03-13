import Link from "next/link";
import { Zap, Mail, MapPin, Phone, Instagram, Facebook, Youtube } from "lucide-react";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/course", label: "Strecke" },
  { href: "/schedule", label: "Zeitplan" },
  { href: "/info", label: "Athleten-Info" },
  { href: "/registration", label: "Anmeldung" },
];

const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-[15px] text-white">Erich Fill</span>
                <span className="font-bold text-[11px] tracking-widest text-primary uppercase">Triathlon</span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Schwimmen. Radfahren. Laufen.<br />
              Wo Leidenschaft auf Leistung trifft.
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-white/[0.05] hover:bg-primary/15 hover:text-primary border border-border hover:border-primary/30 rounded-lg flex items-center justify-center text-white/40 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/25 hover:text-white/50 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/40 text-sm">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Musterstadt, Deutschland</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:info@erichfilltriathlon.de"
                  className="text-white/40 hover:text-primary transition-colors"
                >
                  info@erichfilltriathlon.de
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+491234567890"
                  className="text-white/40 hover:text-primary transition-colors"
                >
                  +49 123 456 7890
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-background border border-border rounded-xl">
              <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Nächster Event</p>
              <p className="text-white font-bold">15. Juni 2025</p>
              <p className="text-white/40 text-sm">Musterstadt · Seeparkgelände</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-sm">
            © {new Date().getFullYear()} Erich Fill Triathlon. Alle Rechte vorbehalten.
          </p>
          <p className="text-white/20 text-sm">Made with ❤️ for athletes</p>
        </div>
      </div>
    </footer>
  );
}
