"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const partners = [
  { name: "Banque de France", logo: "/partners/banque-de-france.svg" },
  { name: "EducFI", logo: "/partners/educfi.svg" },
  { name: "Ville d'Annecy", logo: "/partners/ville-annecy.svg" },
  { name: "Gabriel Fauré", logo: "/partners/gabriel-faure.svg", smaller: true },
];

export default function PartnersSection() {
  return (
    <section className="py-36 border-t border-white/[0.06]">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <ScrollReveal>
          <p className="text-[13px] text-white/35 tracking-[0.15em] uppercase mb-20 text-center">
            Avec le soutien de
          </p>

          <div className="flex flex-wrap items-center justify-center gap-16 md:gap-24">
            {partners.map((partner, i) => (
              <ScrollReveal key={partner.name} delay={i * 0.08}>
                <div className={`relative flex items-center justify-center group ${partner.smaller ? "w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28" : "w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44"}`}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={176}
                    height={176}
                    className="object-contain w-full h-full brightness-0 invert group-hover:opacity-90 transition-opacity duration-500"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
