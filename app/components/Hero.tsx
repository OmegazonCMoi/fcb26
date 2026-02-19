"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useReveal } from "../context/RevealContext";

export default function Hero() {
  const { revealPhase } = useReveal();

  if (revealPhase === "idle") return null;

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-24 md:pb-32 overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        {/* Date pill - visible from "title" */}
        {(revealPhase === "title" || revealPhase === "rest") && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-block text-[13px] text-white/30 tracking-[0.15em] uppercase font-[family-name:var(--font-body)]">
              7 — 8 Avril 2026 · Annecy
            </span>
          </motion.div>
        )}

        {/* Title - visible from "title" */}
        {(revealPhase === "title" || revealPhase === "rest") && (
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,7.5rem)] font-bold leading-[0.92] tracking-[-0.03em] mb-8"
          >
            <span className="block text-white">Forum</span>
            <span className="block text-white/20">Cybersécurité</span>
          </motion.h1>
        )}

        {/* Description + CTAs - visible from "rest" */}
        {revealPhase === "rest" && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <p className="max-w-md text-[15px] leading-relaxed text-white/30 font-[family-name:var(--font-body)]">
              Un événement pour découvrir les enjeux de la sécurité numérique à
              travers des ateliers immersifs et des conférences. Avec le soutien
              de la Banque de France et la Ville d&apos;Annecy.
            </p>

            <div className="flex gap-4">
              <Link
                href="/presentation"
                className="group px-7 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors duration-300"
              >
                Découvrir
              </Link>
              <Link
                href="/ateliers"
                className="px-7 py-3 border border-white/10 text-white/60 text-sm font-medium rounded-full hover:border-white/20 hover:text-white/80 transition-all duration-300"
              >
                Ateliers
              </Link>
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll line - visible from "rest" */}
      {revealPhase === "rest" && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/10 origin-top"
        />
      )}
    </section>
  );
}
