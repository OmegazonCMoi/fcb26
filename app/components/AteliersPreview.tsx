"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ateliers } from "../data/ateliers";
import ScrollReveal from "./ScrollReveal";

export default function AteliersPreview() {
  const featured = ateliers.slice(0, 4);

  return (
    <section className="py-36">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-4">
            <div>
              <p className="text-[13px] text-white/35 tracking-[0.15em] uppercase mb-3">
                Programme
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">
                Ateliers
              </h2>
            </div>
            <Link
              href="/ateliers"
              className="group flex items-center gap-1.5 text-[13px] text-white/40 hover:text-white/70 transition-colors duration-500"
            >
              Voir tout
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="space-y-px">
          {featured.map((atelier) => (
            <ScrollReveal key={atelier.id} delay={0}>
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                className="group flex items-center gap-6 py-7 border-b border-white/[0.06] cursor-default"
              >
                <span className="text-[13px] text-white/20 font-mono w-8 shrink-0">
                  {String(atelier.id).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-4 text-white/25 group-hover:text-accent transition-colors duration-500 shrink-0">
                  {atelier.icon}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-semibold text-white/70 group-hover:text-white transition-colors duration-500">
                  {atelier.title}
                </h3>
                <p className="hidden md:block text-sm text-white/30 group-hover:text-white/45 transition-colors duration-500 ml-auto max-w-md text-right">
                  {atelier.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
