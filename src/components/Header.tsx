import { useEffect, useState } from "react";
import { Menu, Phone, X, GraduationCap } from "lucide-react";
import { BRAND } from "../data";

const LINKS = [
  { href: "#subjects", label: "Subjects" },
  { href: "#programs", label: "Programmes" },
  { href: "#why", label: "Why Paul" },
  { href: "#results", label: "Our Stars" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/95 shadow-lg shadow-black/20 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Paul Coaching Centres home">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold to-[#ff8a00] text-ink shadow-lg shadow-gold/30">
            <GraduationCap size={24} strokeWidth={2.4} />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl font-extrabold tracking-tight text-white">Paul</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">Coaching Centres</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-white/80 transition hover:text-gold">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${BRAND.phones[0].tel}`}
            className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-ink transition hover:scale-105 hover:bg-white sm:inline-flex"
          >
            <Phone size={16} /> Call Now
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/20 text-white lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink px-5 pb-6 pt-3 lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-3.5 text-base font-medium text-white/90"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${BRAND.phones[0].tel}`}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 font-bold text-ink"
          >
            <Phone size={18} /> {BRAND.phones[0].label}
          </a>
        </div>
      )}
    </header>
  );
}
