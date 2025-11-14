import { useEffect, useState } from "react";
import { ArrowRight, Mail, MapPin, Instagram, Globe, Send } from "lucide-react";
import { motion } from "framer-motion";

// ---- CONFIG ----
const AGENCY_NAME = "McCabe Management";
const CITY = "London, UK";

// helper to open the user's email client with prefilled subject/body
const mailto = (to, subject, body) => {
  const link = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = link;
};

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Website() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 font-sans">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-200 dark:border-neutral-800">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <button onClick={() => scrollToId("home")} className="text-2xl font-bold tracking-tight">{AGENCY_NAME}</button>
          <div className="hidden md:flex items-center gap-6 text-base">
            <button onClick={() => scrollToId("contact-artists")} className="hover:opacity-70 flex items-center gap-1">Artists <ArrowRight size={16} /></button>
            <button onClick={() => scrollToId("contact-venues")} className="hover:opacity-70 flex items-center gap-1">Venues <ArrowRight size={16} /></button>
            <button onClick={() => setDark((d) => !d)} className="text-xs px-2 py-1 rounded-full border border-neutral-300 dark:border-neutral-700">{dark ? "Light" : "Dark"}</button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-32 md:py-40 flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-extrabold tracking-tight"
          >
            {AGENCY_NAME}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 max-w-2xl font-medium"
          >
            Newly established London-based booking agent connecting up-and-coming artists with live music venues across the city.
          </motion.p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#contact-artists" onClick={(e)=>{e.preventDefault();scrollToId("contact-artists");}} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black text-lg font-semibold hover:opacity-90">
              For Artists <ArrowRight size={20} />
            </a>
            <a href="#contact-venues" onClick={(e)=>{e.preventDefault();scrollToId("contact-venues");}} className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-neutral-300 dark:border-neutral-700 text-lg font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-900">
              For Venues <ArrowRight size={20} />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-base text-neutral-600 dark:text-neutral-300">
            <span className="inline-flex items-center gap-2"><MapPin size={18}/> {CITY}</span>
            <span className="inline-flex items-center gap-2"><Mail size={18}/> hello@mccabemanagement.com</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold">About Us</h2>
          <p className="mt-6 text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
            McCabe Management is a newly established London-based <strong>booking agent</strong> passionate about live music. We exist to support and develop emerging artists while building authentic connections with venues that share our passion for real performances. Every show we help bring to life is an opportunity to showcase raw talent, foster growth, and celebrate genuine artistry.
          </p>
        </div>
      </section>

      {/* CONTACT SECTIONS */}
      <section id="contact-artists" className="mx-auto max-w-6xl px-4 py-24 border-t border-neutral-200 dark:border-neutral-800">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">Contact — Artists</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6">If you’re an artist looking for live opportunities, send us your links, availability, and a short intro — we’ll be in touch if it’s a fit.</p>
            <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6">
              <form
                onSubmit={(e)=>{
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const name = fd.get('name') || '';
                  const email = fd.get('email') || '';
                  const links = fd.get('links') || '';
                  const availability = fd.get('availability') || '';
                  const notes = fd.get('notes') || '';
                  const subject = `Artist submission: ${name}`;
                  const body = `Name: ${name}\nEmail: ${email}\nLinks: ${links}\nAvailability: ${availability}\nNotes: ${notes}`;
                  mailto('artists@mccabemanagement.com', subject, body);
                }}
                className="grid gap-4 text-left"
              >
                <div>
                  <label className="text-sm">Name</label>
                  <input name="name" className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" placeholder="Your artist/band" required />
                </div>
                <div>
                  <label className="text-sm">Email</label>
                  <input name="email" type="email" className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" placeholder="you@example.com" required />
                </div>
                <div>
                  <label className="text-sm">Links (Spotify, YouTube, EPK)</label>
                  <input name="links" className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" placeholder="Paste URLs" />
                </div>
                <div>
                  <label className="text-sm">Availability</label>
                  <input name="availability" className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" placeholder="Weeknights, weekends, specific dates" />
                </div>
                <div>
                  <label className="text-sm">Notes</label>
                  <textarea name="notes" rows={4} className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" placeholder="Short intro, tech needs, set length" />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black text-lg font-semibold hover:opacity-90">
                  Submit Info <ArrowRight size={20} />
                </button>
                <p className="text-xs text-neutral-500">This opens your email client with the details prefilled to send to artists@mccabemanagement.com.</p>
              </form>
            </div>
          </div>

          <div className="order-1 md:order-2 text-center md:text-left">
            <div className="max-w-md mx-auto md:mx-0">
              <p className="text-sm uppercase tracking-widest text-neutral-500">Artists</p>
              <h3 className="mt-2 text-2xl font-bold">Stage time starts here</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">We book showcase nights and supports across London. Send your links and when you can play.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-venues" className="mx-auto max-w-6xl px-4 py-24 border-t border-neutral-200 dark:border-neutral-800">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="order-2 md:order-2 text-center md:text-left">
            <div className="max-w-md mx-auto md:mx-0">
              <p className="text-sm uppercase tracking-widest text-neutral-500">Venues</p>
              <h3 className="mt-2 text-2xl font-bold">Curated acts for your room</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">Tell us your dates, budget, and vibe. We’ll reply within 24 hours with options.</p>
            </div>
          </div>

          <div className="order-1 md:order-1">
            <h2 className="text-3xl font-bold mb-6">Contact — Venues</h2>
            <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6">
              <form
                onSubmit={(e)=>{
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const venue = fd.get('venue') || '';
                  const contact = fd.get('contact') || '';
                  const email = fd.get('email') || '';
                  const dates = fd.get('dates') || '';
                  const budget = fd.get('budget') || '';
                  const notes = fd.get('notes') || '';
                  const subject = `Venue enquiry: ${venue}`;
                  const body = `Venue: ${venue}\nContact: ${contact}\nEmail: ${email}\nDates: ${dates}\nBudget: ${budget}\nNotes: ${notes}`;
                  mailto('bookings@mccabemanagement.com', subject, body);
                }}
                className="grid gap-4 text-left"
              >
                <div>
                  <label className="text-sm">Venue name</label>
                  <input name="venue" className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" placeholder="Your venue" required />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm">Contact</label>
                    <input name="contact" className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" placeholder="Name" required />
                  </div>
                  <div>
                    <label className="text-sm">Email</label>
                    <input name="email" type="email" className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" placeholder="you@venue.com" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm">Date(s)</label>
                    <input name="dates" className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" placeholder="e.g., Fridays in Feb" />
                  </div>
                  <div>
                    <label className="text-sm">Budget</label>
                    <input name="budget" className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" placeholder="e.g., £150–£400" />
                  </div>
                </div>
                <div>
                  <label className="text-sm">Notes</label>
                  <textarea name="notes" rows={4} className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" placeholder="Room size, preferred genres, set times" />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black text-lg font-semibold hover:opacity-90">
                  Send Request <ArrowRight size={20} />
                </button>
                <p className="text-xs text-neutral-500">This opens your email client with the details prefilled to send to bookings@mccabemanagement.com.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-20">
        <div className="mx-auto max-w-6xl px-4 py-10 text-base flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {AGENCY_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@mccabemanagement.com" className="inline-flex items-center gap-2"><Mail size={16}/> Email</a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Instagram size={16}/> Instagram</a>
            <a href="#" className="inline-flex items-center gap-2"><Globe size={16}/> Website</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
