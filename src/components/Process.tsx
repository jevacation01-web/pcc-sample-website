import { STEPS } from "../data";
import { SectionHead } from "./Subjects";

export default function Process() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead eyebrow="Getting started" title="Join in four simple steps" />
        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-8 hidden border-t-2 border-dashed border-crimson/30 md:block" />
          {STEPS.map((s, i) => (
            <div key={s.n} style={{ transitionDelay: `${i * 100}ms` }} className="reveal relative text-center">
              <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-ink font-display text-xl font-extrabold text-gold ring-8 ring-cream">
                {s.n}
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-[16rem] text-[15px] text-ink/65">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
