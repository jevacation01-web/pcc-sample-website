import { MessageCircle, Phone } from "lucide-react";
import { BRAND } from "../data";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0b0618] px-5 py-12 text-white/70">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3 lg:px-8">
          <div>
            <div className="font-display text-2xl font-extrabold text-white">Paul</div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Coaching Centres</div>
            <p className="mt-4 max-w-xs text-sm">
              Commerce coaching for Class XI, XII &amp; CUET. Trusted since {BRAND.since}.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white">Quick links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["#subjects", "Subjects"],
                ["#programs", "Programmes"],
                ["#why", "Why Paul"],
                ["#results", "Our Stars"],
                ["#contact", "Contact"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="hover:text-gold">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white">Contact</h4>
            <p className="mt-4 text-sm">{BRAND.address}</p>
            <p className="mt-1 text-sm text-gold/90">{BRAND.landmark}</p>
            <p className="mt-3 text-sm">{BRAND.phones.map((p) => p.label).join(" / ")}</p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-white/50 lg:px-8">
          © {new Date().getFullYear()} Paul Coaching Centres. All rights reserved.
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <a
          href={`tel:${BRAND.phones[0].tel}`}
          aria-label="Call Paul Coaching Centres"
          className="grid h-14 w-14 place-items-center rounded-full bg-crimson text-white shadow-xl transition hover:scale-110 sm:hidden"
        >
          <Phone size={24} />
        </a>
        <a
          href={`https://wa.me/${BRAND.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="pulse-ring grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110"
        >
          <MessageCircle size={26} />
        </a>
      </div>
    </>
  );
}
