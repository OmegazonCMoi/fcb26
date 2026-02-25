"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GradientBlobs from "../components/GradientBlobs";
import ScrollReveal from "../components/ScrollReveal";
import { ateliers } from "../data/ateliers";

// Ordre d’importance : du plus grand au plus petit rectangle → Phishing, Mots de Passe, Ransomware, IA, Dark Web, Backdoor, OSINT, Juice Jacking. MITM + Éducation Financière + RSSI en dessous.
const BENTO_ORDER = [4, 1, 2, 9, 8, 5, 7, 6] as const; // ids par ordre d’importance
const BENTO_PLACEMENTS = [
  "md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-2", // 1. Phishing (plus grand)
  "md:col-start-1 md:row-start-3 md:col-span-1 md:row-span-3", // 2. Mots de Passe
  "md:col-start-3 md:row-start-1 md:col-span-3 md:row-span-1", // 3. Ransomware
  "md:col-start-2 md:row-start-3 md:col-span-2 md:row-span-2", // 4. IA et Sécurité
  "md:col-start-4 md:row-start-2 md:col-span-2 md:row-span-2", // 5. Dark Web
  "md:col-start-4 md:row-start-4 md:col-span-2 md:row-span-2", // 6. Backdoor
  "md:col-start-2 md:row-start-5 md:col-span-2 md:row-span-1", // 7. OSINT
  "md:col-start-3 md:row-start-2 md:col-span-1 md:row-span-1", // 8. Juice Jacking (plus petit)
];

const bentoAteliers = BENTO_ORDER.map(
  (id) => ateliers.find((a) => a.id === id)!
).filter(Boolean);
const outsideAteliers = ateliers.filter(
  (a) => a.id === 3 || a.id === 10 || a.id === 11
); // MITM, Éducation Financière, RSSI

export default function AteliersPage() {
  const [selected, setSelected] = useState<(typeof ateliers)[0] | null>(null);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      <GradientBlobs />
      <Navbar />
      <main className="relative z-10 min-h-screen pt-32 pb-28">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal>
            <p className="text-[13px] text-white/35 tracking-[0.15em] uppercase mb-3">
              Programme complet
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Ateliers
            </h1>
            <p className="text-white/40 max-w-lg text-[15px] leading-relaxed mb-10">
              Cliquez sur un atelier pour en savoir plus.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-[1.75rem] md:rounded-[2.25rem] p-2">
              <div className="grid grid-cols-3 md:grid-cols-5 md:grid-rows-5 gap-2">
                {bentoAteliers.map((atelier, i) => (
                  <motion.button
                    key={atelier.id}
                    type="button"
                    onClick={() => setSelected(atelier)}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ duration: 0.2 }}
                    className={`relative overflow-hidden rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-200 cursor-pointer min-h-[90px] ${BENTO_PLACEMENTS[i] ?? ""}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-white/[0.08]">
                      <span className="scale-[2]">{atelier.icon}</span>
                    </div>
                    <div className="relative h-full flex flex-col justify-end p-3 md:p-4">
                      <span className="font-[family-name:var(--font-display)] text-xs md:text-sm font-semibold text-white/90 text-left line-clamp-2">
                        {atelier.title}
                      </span>
                      <span className="text-[10px] text-white/30 font-mono mt-0.5 text-left">
                        {String(atelier.id).padStart(2, "0")}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {outsideAteliers.length > 0 && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {outsideAteliers.map((atelier) => (
                  <motion.button
                    key={atelier.id}
                    type="button"
                    onClick={() => setSelected(atelier)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.12] p-6 text-left transition-all duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-white/30 shrink-0">{atelier.icon}</span>
                      <div>
                        <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-white/90 block mb-1">
                          {atelier.title}
                        </span>
                        <span className="text-sm text-white/40 line-clamp-2">
                          {atelier.description}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </ScrollReveal>
        </div>
      </main>
      <Footer />

      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-2rem)] max-w-lg rounded-2xl border border-white/[0.12] bg-[#0a0a10] shadow-2xl p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-white/40">{selected.icon}</span>
                  <span className="text-[11px] text-white/25 font-mono">
                    {String(selected.id).padStart(2, "0")}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="p-1.5 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white mb-4">
                {selected.title}
              </h2>
              <p className="text-white/50 text-sm md:text-base leading-relaxed">
                {selected.description}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
