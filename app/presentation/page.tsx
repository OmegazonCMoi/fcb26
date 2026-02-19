"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GradientBlobs from "../components/GradientBlobs";
import ScrollReveal from "../components/ScrollReveal";
import { objectifs } from "../data/objectifs";

export default function PresentationPage() {
  return (
    <>
      <GradientBlobs />
      <Navbar />
      <main className="relative z-10 min-h-screen pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Intro */}
          <ScrollReveal>
            <div className="max-w-3xl mb-28">
              <p className="text-[13px] text-white/25 tracking-[0.15em] uppercase mb-3">
                À propos
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold tracking-tight mb-8">
                Le Forum
              </h1>
              <p className="text-white/30 text-lg leading-relaxed">
                Le Forum Cybersécurité, organisé les 7 et 8 avril 2026 au sein
                de notre lycée, réunit élèves et enseignants autour des enjeux
                de la sécurité informatique. L&apos;événement propose dix
                ateliers immersifs pour explorer la cybersécurité de façon
                interactive. Après le succès des éditions précédentes, cette
                nouvelle version s&apos;annonce encore plus enrichie grâce au
                soutien de la Banque de France et de la Ville d&apos;Annecy.
              </p>
            </div>
          </ScrollReveal>

          {/* Objectifs */}
          <div className="mb-28">
            <ScrollReveal>
              <p className="text-[13px] text-white/25 tracking-[0.15em] uppercase mb-3">
                Objectifs
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-12">
                Ce que vous apprendrez
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
              {objectifs.map((obj, i) => (
                <ScrollReveal key={obj.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                    className="p-8 bg-black h-full"
                  >
                    <div className="text-white/15 mb-5">
                      {obj.icon}
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-3 text-white/80">
                      {obj.title}
                    </h3>
                    <p className="text-sm text-white/25 leading-relaxed">
                      {obj.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Organisation */}
          <div>
            <ScrollReveal>
              <p className="text-[13px] text-white/25 tracking-[0.15em] uppercase mb-3">
                Équipe
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-12">
                L&apos;organisation
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "BTS SIO",
                  text: "Les étudiants du BTS SIO préparent des ateliers techniques. Ils proposent des démonstrations et des conseils pratiques pour sensibiliser aux enjeux de la sécurité numérique.",
                },
                {
                  title: "BTS SAM",
                  text: "Les étudiants du BTS SAM assurent l'organisation du forum. Ils prennent en charge le planning, la communication et la mise en place logistique de l'événement.",
                },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="p-8 border border-white/[0.04] rounded-2xl">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-4 text-white/80">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/25 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
