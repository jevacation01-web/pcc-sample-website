import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQS } from "../data";
import { SectionHead } from "./Subjects";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHead eyebrow="Questions" title="Frequently asked questions" />
        <div className="mt-12 space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="reveal overflow-hidden rounded-2xl border border-ink/10 bg-cream">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-bold text-ink">{f.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all ${
                      isOpen ? "rotate-45 bg-crimson text-white" : "bg-ink/10 text-ink"
                    }`}
                  >
                    <Plus size={18} />
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-relaxed text-ink/70">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
