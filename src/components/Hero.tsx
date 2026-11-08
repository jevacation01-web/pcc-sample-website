import { ArrowRight, Award, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import { BRAND, IMAGES } from "../data";
import { useCountUp } from "../hooks";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, val } = useCountUp(value);
  return (
    <div>
      <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
        <span ref={ref}>{val}</span>
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">{label}</div>
    </div>
  );
}

export default function Hero() {
  const years = new Date().getFullYear() - BRAND.since;
  return (
    <section id="top" className="relative overflow-hidden bg-ink pb-24 pt-32 text-white lg:pb-32 lg:pt-40">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-crimson/40 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-gold/25 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            <Sparkles size={14} /> Trusted since {BRAND.since}
          </div>
          <h1 className="mt-6 font-display text-4xl font-black leading-[1.08] sm:text-5xl lg:text-[4.1rem]">
            Where Commerce Students{" "}
            <span className="bg-gradient-to-r from-gold via-[#ffd75e] to-[#ff8a00] bg-clip-text text-transparent">
              Walk Into Glory
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Expert coaching in <b className="text-white">Accountancy, Business Studies &amp; Economics</b> for Class XI, XII
            and <b className="text-white">CUET</b> — from Paul Coaching Centres, Lajpat Nagar, New Delhi.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-crimson to-[#ff3d7f] px-7 py-4 font-bold shadow-xl shadow-crimson/40 transition hover:scale-105"
            >
              Book a Free Demo Visit
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:${BRAND.phones[0].tel}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 font-semibold transition hover:border-gold hover:text-gold"
            >
              <Phone size={18} /> {BRAND.phones[0].label}
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
            <Stat value={years} suffix="+" label="Years of trust" />
            <Stat value={3} suffix="" label="Core subjects" />
            <Stat value={3} suffix="" label="Programmes" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-gradient-to-br from-gold to-crimson opacity-80" />
          <img
            src={IMAGES.hero}
            alt="Students learning in an interactive classroom session"
            className="relative aspect-[4/4.4] w-full rounded-[2rem] object-cover shadow-2xl"
          />
          <div className="floaty absolute -left-4 bottom-8 flex items-center gap-3 rounded-2xl bg-white p-4 text-ink shadow-2xl sm:-left-10">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-soft text-[#c98a00]">
              <Award size={22} />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-bold">PCC to SRCC, LSR &amp; IIM</div>
              <div className="text-xs text-ink/60">Our students go places</div>
            </div>
          </div>
          <div className="absolute -right-2 top-6 hidden items-center gap-2 rounded-full bg-ink/90 px-4 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur sm:flex">
            <MapPin size={14} className="text-gold" /> Lajpat Nagar IV, New Delhi
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 text-sm text-white/60 lg:px-8">
        <span className="font-semibold text-gold">Class XI</span>
        <span>•</span>
        <span className="font-semibold text-gold">Class XII</span>
        <span>•</span>
        <span className="font-semibold text-gold">CUET</span>
        <span>•</span>
        <a
          href={`https://wa.me/${BRAND.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-white"
        >
          <MessageCircle size={15} /> Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
