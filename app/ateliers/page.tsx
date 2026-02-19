"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GradientBlobs from "../components/GradientBlobs";
import ScrollReveal from "../components/ScrollReveal";
import { ateliers } from "../data/ateliers";

export default function AteliersPage() {
  return (
    <>
      <GradientBlobs />
      <Navbar />
      <main className="relative z-10 min-h-screen pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <p className="text-[13px] text-white/25 tracking-[0.15em] uppercase mb-3">
              Programme complet
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Ateliers
            </h1>
            <p className="text-white/30 max-w-lg text-[15px] leading-relaxed mb-16">
              10 ateliers immersifs pour explorer les différentes facettes de la
              cybersécurité, de l&apos;attaque à la défense.
            </p>
          </ScrollReveal>

          <div className="space-y-px">
            {ateliers.map((atelier, i) => (
              <ScrollReveal key={atelier.id} delay={i * 0.05}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="group flex items-start md:items-center gap-6 py-7 border-b border-white/[0.04]"
                >
                  <span className="text-[13px] text-white/15 font-mono w-8 shrink-0 pt-1 md:pt-0">
                    {String(atelier.id).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-4 text-white/20 group-hover:text-accent transition-colors duration-500 shrink-0 pt-0.5 md:pt-0">
                    {atelier.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-semibold text-white/70 group-hover:text-white transition-colors duration-500 mb-1 md:mb-0">
                      {atelier.title}
                    </h3>
                    <p className="text-sm text-white/20 group-hover:text-white/35 transition-colors duration-500 leading-relaxed">
                      {atelier.description}
                    </p>
                  </div>
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
