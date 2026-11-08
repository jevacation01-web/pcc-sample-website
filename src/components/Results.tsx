import { GraduationCap, Star } from "lucide-react";
import { COLLEGES } from "../data";

export default function Results() {
  const row = [...COLLEGES, ...COLLEGES];
  return (
    <section id="results" className="overflow-hidden bg-gradient-to-br from-crimson via-[#c20f52] to-[#8a0b3d] py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="flex justify-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <span className="mt-3 block text-xs font-bold uppercase tracking-[0.3em] text-gold">Shining stars of PCC</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl lg:text-[2.8rem] lg:leading-tight">
            Who walked into glory…
          </h2>
          <p className="mt-4 text-lg text-white/80">
            From our classrooms in Lajpat Nagar to some of India's most respected institutions.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[
            { big: "PCC → SRCC, LSR & IIM", small: "Students who made it to premier commerce, liberal arts & management institutions." },
            { big: "PCC → Delhi University", small: "Year after year, our students secure seats across Delhi University colleges." },
          ].map((c, i) => (
            <div
              key={c.big}
              style={{ transitionDelay: `${i * 120}ms` }}
              className="reveal rounded-3xl border-2 border-gold/60 bg-white/10 p-8 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
            >
              <GraduationCap size={40} className="text-gold" />
              <h3 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl">{c.big}</h3>
              <p className="mt-2 text-white/80">{c.small}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-16 border-y border-white/20 bg-ink/30 py-5">
        <div className="marquee flex w-max gap-12 whitespace-nowrap">
          {row.map((c, i) => (
            <span key={i} className="flex items-center gap-12 font-display text-2xl font-bold text-white/90">
              {c} <Star size={16} className="text-gold" fill="currentColor" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
