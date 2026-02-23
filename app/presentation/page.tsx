"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GradientBlobs from "../components/GradientBlobs";
import ScrollReveal from "../components/ScrollReveal";
import { objectifs } from "../data/objectifs";

const introText = `Le Forum CyberSécurité est présenté par les étudiants du BTS SIO (Services Informatiques aux Organisations). Notre filière assure l'ensemble de la gestion du projet : de la conception technique des ateliers à l'organisation logistique, en passant par la stratégie de communication.
Nous mettons à profit notre expertise technique et notre sens de l'organisation pour proposer une expérience immersive et pédagogique à l'ensemble du lycée.
Nous remercions le lycée Gabriel Fauré et sa direction pour leur confiance. Nous exprimons également notre gratitude au bureau de l'APELGF (Association des Parents d'Élèves du Lycée Gabriel Fauré) pour son précieux soutien au projet.`;

const objectifText =
  "L'objectif est de pouvoir présenter aux différents membres du lycée Gabriel Fauré les enjeux du numérique et ses dangers.";

export default function PresentationPage() {
  return (
    <>
      <GradientBlobs />
      <Navbar />
      <main className="relative z-10 min-h-screen pt-32 pb-28">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
          {/* À propos */}
          <ScrollReveal>
            <div className="max-w-3xl mb-36">
              <p className="text-[13px] text-white/35 tracking-[0.15em] uppercase mb-3">
                À propos
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold tracking-tight mb-8">
                Le Forum
              </h1>
              <p className="text-white/40 text-base md:text-lg leading-relaxed whitespace-pre-line">
                {introText}
              </p>
            </div>
          </ScrollReveal>

          {/* Notre objectif */}
          <div className="mb-36">
            <ScrollReveal>
              <p className="text-[13px] text-white/35 tracking-[0.15em] uppercase mb-3">
                Notre objectif
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-6">
                L&apos;objectif
              </h2>
              <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-2xl">
                {objectifText}
              </p>
            </ScrollReveal>
          </div>

          {/* Nos Missions */}
          <div className="mb-36">
            <ScrollReveal>
              <p className="text-[13px] text-white/35 tracking-[0.15em] uppercase mb-3">
                Nos missions
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-16">
                Nos Missions
              </h2>
            </ScrollReveal>

            <div className="space-y-6">
              {objectifs.map((obj, i) => (
                <ScrollReveal key={obj.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3 }}
                    className="group flex items-start gap-6 md:gap-8 py-6 border-b border-white/[0.06]"
                  >
                    <div className="flex items-center gap-5 shrink-0 pt-0.5">
                      <span className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white/10 group-hover:text-accent/30 transition-colors duration-500 tabular-nums w-10 text-right">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="text-white/20 group-hover:text-accent transition-colors duration-500">
                        {obj.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold mb-2 text-white/80 group-hover:text-white transition-colors duration-500">
                        {obj.title}
                      </h3>
                      <p className="text-sm md:text-[15px] text-white/35 group-hover:text-white/50 leading-relaxed transition-colors duration-500">
                        {obj.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Dépliant */}
          <div>
            <ScrollReveal>
              <p className="text-[13px] text-white/35 tracking-[0.15em] uppercase mb-3">
                Forum Cyber Sécurité 2026
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Dépliant
              </h2>
              <p className="text-white/40 text-base md:text-lg leading-relaxed mb-4 max-w-2xl">
                Venez découvrir les activités, l&apos;organisation, la
                répartition des tâches et le cœur du forum cybersécurité grâce
                à ce dépliant.
              </p>
              <a
                href="https://forum.lycee-faure.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 text-sm md:text-base font-medium transition-colors"
              >
                forum.lycee-faure.fr
              </a>
            </ScrollReveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
