import { BarChart3, BookMarked, History, MapPin, Target, Users } from "lucide-react";
import { FEATURES, IMAGES } from "../data";
import { SectionHead } from "./Subjects";

const ICONS: Record<string, typeof Users> = {
  history: History,
  users: Users,
  book: BookMarked,
  chart: BarChart3,
  target: Target,
  pin: MapPin,
};

export default function Why() {
  return (
    <section id="why" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          eyebrow="Why Paul Coaching Centres"
          title="A legacy of learning, a future of achievement"
          sub="We don't just finish the syllabus — we build confident, exam-ready commerce students."
        />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="reveal relative">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-gold" />
            <img
              src={IMAGES.about}
              alt="Attentive students in a classroom"
              className="relative aspect-[4/4.2] w-full rounded-3xl object-cover shadow-xl"
              loading="lazy"
            />
            <div className="absolute -left-4 top-8 rounded-2xl bg-ink p-5 text-white shadow-2xl">
              <div className="font-display text-4xl font-black text-gold">{BRAND_YEARS}+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-white/70">Years of teaching</div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {FEATURES.map((f, i) => {
              const Icon = ICONS[f.icon];
              return (
                <div
                  key={f.title}
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="reveal rounded-2xl border border-ink/10 bg-cream p-6 transition hover:border-crimson/40 hover:bg-white hover:shadow-xl"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-crimson/10 text-crimson">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{f.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink/65">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const BRAND_YEARS = new Date().getFullYear() - 1984;
