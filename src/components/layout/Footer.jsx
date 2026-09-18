import { Link } from "react-router-dom";
import { Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/Logo.png";

const services = [
  { label: "H-1B Status Protection", href: "/h-1b-status-protection-program" },
  { label: "STEM OPT Ready Plan", href: "/stem-opt-ready-plan" },
  { label: "Our Cases", href: "/our-cases" },
];

const explore = [
  { label: "About Us", href: "/about-us" },
  { label: "Insights", href: "/insights" },
  { label: "Client Portal", href: "/client-portal" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-keystone-ink text-white">
      <div className="container py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <img src={logo} alt="Keystone Strategies" className="h-8 w-auto brightness-0 invert" />
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Integrated immigration, employer compliance, and business support for international
            professionals building their future in the US.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/40">Services</h3>
          <ul className="mt-3 space-y-2">
            {services.map((s) => (
              <li key={s.href}>
                <Link to={s.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/40">Explore</h3>
          <ul className="mt-3 space-y-2">
            {explore.map((c) => (
              <li key={c.href}>
                <Link to={c.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/40">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <a href="tel:+16462947091" className="hover:text-white transition-colors">
                +1 (646) - 294 - 7091
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <a href="mailto:contact@keystonestrategies.us" className="hover:text-white transition-colors">
                contact@keystonestrategies.us
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-primary shrink-0" />
              <span>Mon–Fri: 10:00 AM – 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Keystone Strategies. All rights reserved.
          </p>
          <Link to="/privacy-policy" className="text-xs text-white/40 hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
