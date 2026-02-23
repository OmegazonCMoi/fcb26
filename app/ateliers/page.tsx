"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GradientBlobs from "../components/GradientBlobs";
import ScrollReveal from "../components/ScrollReveal";
import { ateliers } from "../data/ateliers";

const bentoPlacement: Record<number, string> = {
  1: "md:col-start-1 md:row-start-1 md:row-span-5",
  2: "md:col-start-2 md:row-start-1",
  3: "md:col-start-3 md:row-start-1",
  4: "md:col-start-2 md:row-start-2",
  5: "md:col-start-3 md:row-start-2",
  6: "md:col-start-2 md:row-start-3",
  7: "md:col-start-3 md:row-start-3",
  8: "md:col-start-2 md:row-start-4",
  9: "md:col-start-3 md:row-start-4",
  10: "md:col-start-2 md:row-start-5",
  11: "md:col-start-3 md:row-start-5",
};

export default function AteliersPage() {
  return (
    <>
      <GradientBlobs />
      <Navbar />
      <main className="relative z-10 min-h-screen pt-32 pb-28">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
          <ScrollReveal>
            <p className="text-[13px] text-white/35 tracking-[0.15em] uppercase mb-3">
              Programme complet
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Ateliers
            </h1>
            <p className="text-white/40 max-w-lg text-[15px] leading-relaxed mb-24">
              Les ateliers immersifs pour explorer les différentes facettes de la
              cybersécurité, de l&apos;attaque à la défense.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-5 gap-3 md:auto-rows-fr min-h-0">
            {ateliers.map((atelier, i) => (
              <ScrollReveal key={atelier.id} delay={i * 0.03}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`group relative p-5 md:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-colors duration-500 flex flex-col justify-between min-h-[140px] md:min-h-[160px] ${bentoPlacement[atelier.id] || ""}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-white/25 group-hover:text-accent transition-colors duration-500">
                        {atelier.icon}
                      </div>
                      <span className="text-[12px] text-white/15 font-mono">
                        {String(atelier.id).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-base md:text-lg font-semibold text-white/80 group-hover:text-white transition-colors duration-500 mb-1">
                      {atelier.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-white/30 group-hover:text-white/45 transition-colors duration-500 leading-relaxed line-clamp-4 md:line-clamp-5">
                    {atelier.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
