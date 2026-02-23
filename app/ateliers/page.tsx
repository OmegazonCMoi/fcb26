"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GradientBlobs from "../components/GradientBlobs";
import ScrollReveal from "../components/ScrollReveal";
import { ateliers } from "../data/ateliers";

const bentoClass: Record<number, string> = {
  1: "md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-1",
  2: "md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-4",
  3: "md:col-start-2 md:col-span-2 md:row-start-2 md:row-span-2",
  4: "md:col-start-1 md:col-span-3 md:row-start-6 md:row-span-1",
  5: "md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-1",
  6: "md:col-start-4 md:col-span-2 md:row-start-1 md:row-span-3",
  7: "md:col-start-6 md:col-span-1 md:row-start-1 md:row-span-5",
  8: "md:col-start-5 md:col-span-2 md:row-start-6 md:row-span-1",
  9: "md:col-start-2 md:col-span-1 md:row-start-4 md:row-span-2",
  10: "md:col-start-3 md:col-span-3 md:row-start-4 md:row-span-2",
  11: "md:col-start-4 md:col-span-1 md:row-start-6 md:row-span-1",
};

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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:grid-rows-6 gap-2">
                {ateliers.map((atelier) => (
                  <motion.button
                    key={atelier.id}
                    type="button"
                    onClick={() => setSelected(atelier)}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ duration: 0.2 }}
                    className={`relative overflow-hidden rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-200 cursor-pointer min-h-[90px] ${bentoClass[atelier.id] || ""}`}
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
