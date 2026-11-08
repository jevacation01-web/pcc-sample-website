import { BookOpenCheck, Check, Landmark, TrendingUp } from "lucide-react";
import { SUBJECTS } from "../data";

const ICONS = { acc: BookOpenCheck, bst: Landmark, eco: TrendingUp } as const;

export function SectionHead({ eyebrow, title, sub, light }: { eyebrow: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">{eyebrow}</span>
      <h2 className={`mt-3 font-display text-3xl font-extrabold sm:text-4xl lg:text-[2.8rem] lg:leading-tight ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {sub && <p className={`mt-4 text-lg ${light ? "text-white/70" : "text-ink/65"}`}>{sub}</p>}
    </div>
  );
}

export default function Subjects() {
  return (
    <section id="subjects" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          eyebrow="What we teach"
          title="Three subjects. One mission: your success."
          sub="Focused commerce coaching taught by people who live and breathe these subjects."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {SUBJECTS.map((s, i) => {
            const Icon = ICONS[s.key as keyof typeof ICONS];
            return (
              <article
                key={s.key}
                style={{ transitionDelay: `${i * 120}ms` }}
                className="reveal group relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${s.color}`} />
                <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.color} text-white shadow-lg`}>
                  <Icon size={28} />
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-ink/50">{s.tag}</p>
                <h3 className="mt-1 font-display text-2xl font-extrabold text-ink">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{s.blurb}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-sm font-medium text-ink/80">
                      <Check size={16} className="mt-0.5 shrink-0 text-crimson" strokeWidth={3} /> {t}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
