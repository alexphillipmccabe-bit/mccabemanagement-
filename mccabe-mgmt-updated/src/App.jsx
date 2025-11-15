import { useEffect, useState } from "react";
import { ArrowRight, Mail, MapPin, Instagram, Globe } from "lucide-react";
import { motion } from "framer-motion";

const AGENCY_NAME = "McCabe Management";
const CITY = "London, UK";

const mailto = (to, subject, body) => {
  const link = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = link;
};

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function App() {
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
            <span className="inline-flex items-center gap-2"><Mail size={18}/> hello@mccabemgmt.com</span>
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

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-20">
        <div className="mx-auto max-w-6xl px-4 py-10 text-base flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {AGENCY_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@mccabemgmt.com" className="inline-flex items-center gap-2"><Mail size={16}/> Email</a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Instagram size={16}/> Instagram</a>
            <a href="#" className="inline-flex items-center gap-2"><Globe size={16}/> Website</a>
          </div>
        </div>
      </footer>
    </div>
  );
}