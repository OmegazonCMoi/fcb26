"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GradientBlobs from "../components/GradientBlobs";
import ScrollReveal from "../components/ScrollReveal";

export default function ContactPage() {
  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [status, setStatus] = useState("etudiant");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:contact@fcb26.fr?subject=Contact de ${firstnameRef.current?.value} ${lastnameRef.current?.value} - ${status}&body=${messageRef.current?.value}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputClasses =
    "w-full px-0 py-3 bg-transparent border-0 border-b border-white/[0.06] text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-white/20 transition-colors duration-500";

  return (
    <>
      <GradientBlobs />
      <Navbar />
      <main className="relative z-10 min-h-screen pt-32 pb-20">
        <div className="max-w-[600px] mx-auto px-6">
          <ScrollReveal>
            <p className="text-[13px] text-white/25 tracking-[0.15em] uppercase mb-3">
              Contact
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Écrivez-nous
            </h1>
            <p className="text-white/25 text-[15px] mb-12">
              Une question sur le forum ? N&apos;hésitez pas.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[11px] text-white/20 uppercase tracking-wider mb-1">
                    Prénom
                  </label>
                  <input
                    ref={firstnameRef}
                    type="text"
                    required
                    className={inputClasses}
                    placeholder="Jean"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-white/20 uppercase tracking-wider mb-1">
                    Nom
                  </label>
                  <input
                    ref={lastnameRef}
                    type="text"
                    required
                    className={inputClasses}
                    placeholder="Dupont"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-white/20 uppercase tracking-wider mb-1">
                  Statut
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className={`${inputClasses} appearance-none`}
                >
                  <option value="etudiant" className="bg-black">
                    Étudiant
                  </option>
                  <option value="professeur" className="bg-black">
                    Professeur
                  </option>
                  <option value="personnel" className="bg-black">
                    Personnel
                  </option>
                  <option value="partenaire" className="bg-black">
                    Partenaire
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-white/20 uppercase tracking-wider mb-1">
                  Email
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  required
                  className={inputClasses}
                  placeholder="jean.dupont@email.fr"
                />
              </div>

              <div>
                <label className="block text-[11px] text-white/20 uppercase tracking-wider mb-1">
                  Message
                </label>
                <textarea
                  ref={messageRef}
                  required
                  rows={4}
                  className={`${inputClasses} resize-none`}
                  placeholder="Votre message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors duration-300"
              >
                {sent ? "Envoyé ✓" : "Envoyer"}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
