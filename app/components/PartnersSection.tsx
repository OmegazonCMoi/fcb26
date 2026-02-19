"use client";

import ScrollReveal from "./ScrollReveal";

export default function PartnersSection() {
  return (
    <section className="py-28 border-t border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <p className="text-[13px] text-white/25 tracking-[0.15em] uppercase mb-16 text-center">
            Avec le soutien de
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
            <div className="text-center">
              <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white/50 tracking-tight">
                Banque de France
              </p>
            </div>

            <div className="hidden md:block w-px h-12 bg-white/[0.06]" />

            <div className="text-center">
              <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white/50 tracking-tight">
                Ville d&apos;Annecy
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
