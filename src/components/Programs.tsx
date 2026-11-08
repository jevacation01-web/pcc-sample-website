import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PROGRAMS } from "../data";
import { SectionHead } from "./Subjects";

export default function Programs() {
  return (
    <section id="programs" className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-crimson/25 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          light
          eyebrow="Our programmes"
          title="The right course for every stage"
          sub="From building your foundation in Class XI to cracking CUET — we've got you covered."
        />
        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <div
              key={p.title}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={`reveal relative flex flex-col rounded-3xl p-8 transition-transform hover:-translate-y-2 ${
                p.featured
                  ? "bg-gradient-to-b from-gold to-[#ffcf4d] text-ink shadow-2xl shadow-gold/20 lg:scale-105"
                  : "border border-white/15 bg-white/5 backdrop-blur"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3.5 left-8 rounded-full bg-crimson px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-2xl font-extrabold">{p.title}</h3>
              <p className={`mt-1 text-sm font-medium ${p.featured ? "text-ink/70" : "text-gold"}`}>{p.sub}</p>
              <ul className="mt-7 flex-1 space-y-3.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-[15px]">
                    <CheckCircle2 size={19} className={`mt-0.5 shrink-0 ${p.featured ? "text-crimson" : "text-gold"}`} />
                    <span className={p.featured ? "text-ink/85" : "text-white/80"}>{pt}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`group mt-9 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold transition ${
                  p.featured ? "bg-ink text-white hover:bg-crimson" : "bg-white text-ink hover:bg-gold"
                }`}
              >
                Enquire now <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
