import { useState } from "react";
import { MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { BRAND } from "../data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", cls: "Class XII", subject: "All Commerce Subjects", msg: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Hello Paul Coaching Centres,\n\nI would like to enquire about coaching.\n` +
      `Name: ${form.name}\nPhone: ${form.phone}\nClass/Course: ${form.cls}\nSubject: ${form.subject}` +
      (form.msg ? `\nMessage: ${form.msg}` : "");
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const field =
    "w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition focus:border-crimson focus:ring-4 focus:ring-crimson/10";

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-crimson/30 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Get in touch</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl lg:text-[2.8rem] lg:leading-tight">
            Ready to begin your journey?
          </h2>
          <p className="mt-4 text-lg text-white/70">Call us, visit the centre, or send an enquiry — we'll get back to you.</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="reveal space-y-6">
            <div className="rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur">
              <div className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold text-ink">
                  <MapPin size={22} />
                </span>
                <div>
                  <h3 className="font-bold">Visit us</h3>
                  <p className="mt-1 text-white/75">{BRAND.address}</p>
                  <p className="mt-1 text-sm text-gold">{BRAND.landmark}</p>
                </div>
              </div>
              <div className="mt-6 flex gap-4 border-t border-white/10 pt-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-crimson text-white">
                  <Phone size={22} />
                </span>
                <div>
                  <h3 className="font-bold">Call us</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {BRAND.phones.map((p) => (
                      <a
                        key={p.tel}
                        href={`tel:${p.tel}`}
                        className="rounded-full border border-white/25 px-4 py-1.5 text-sm font-semibold transition hover:border-gold hover:bg-gold hover:text-ink"
                      >
                        {p.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/15">
              <iframe
                title="Paul Coaching Centres location on map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(BRAND.mapQuery)}&z=16&output=embed`}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.mapQuery)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
            >
              <MapPin size={16} /> Open in Google Maps for directions
            </a>
          </div>

          <form
            onSubmit={submit}
            style={{ transitionDelay: "120ms" }}
            className="reveal rounded-3xl bg-cream p-7 text-ink shadow-2xl sm:p-9"
          >
            <h3 className="font-display text-2xl font-extrabold">Send an enquiry</h3>
            <p className="mt-1 text-sm text-ink/60">Opens WhatsApp with your details pre-filled.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold">Student name</span>
                <input required value={form.name} onChange={set("name")} placeholder="Full name" className={field} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold">Phone number</span>
                <input
                  required
                  type="tel"
                  inputMode="tel"
                  pattern="[0-9+\- ]{10,15}"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+91 …"
                  className={field}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold">Class / Course</span>
                <select value={form.cls} onChange={set("cls")} className={field}>
                  <option>Class XI</option>
                  <option>Class XII</option>
                  <option>CUET</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold">Subject</span>
                <select value={form.subject} onChange={set("subject")} className={field}>
                  <option>All Commerce Subjects</option>
                  <option>Accountancy</option>
                  <option>Business Studies</option>
                  <option>Economics</option>
                </select>
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-sm font-semibold">Message (optional)</span>
              <textarea rows={3} value={form.msg} onChange={set("msg")} placeholder="Anything you'd like to ask?" className={field} />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-crimson to-[#ff3d7f] px-7 py-4 font-bold text-white shadow-xl shadow-crimson/30 transition hover:scale-[1.02]"
            >
              <Send size={18} /> Send on WhatsApp
            </button>
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-ink/60 hover:text-crimson"
            >
              <MessageCircle size={16} /> or just say hello on WhatsApp
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
