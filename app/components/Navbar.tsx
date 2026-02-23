"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useReveal } from "../context/RevealContext";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/presentation", label: "Présentation" },
  { href: "/ateliers", label: "Ateliers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { revealPhase } = useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (revealPhase === "idle") return null;

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: revealPhase === "title" ? 0.2 : 0 }}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-700 ${
          scrolled
            ? "bg-[#0a0a10]/80 backdrop-blur-2xl border-white/[0.06]"
            : "border-transparent"
        }`}
      >
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.2em] uppercase text-white/90 hover:text-white transition-colors"
          >
            FCB26
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-white/50 hover:text-white transition-colors duration-500 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Menu"
          >
            <span className="block w-5 h-px bg-white/60" />
            <span className="block w-3 h-px bg-white/60 ml-auto" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a10] border-b border-white/[0.08] p-8"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.2em] uppercase">
                  FCB26
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white/50 hover:text-white text-sm"
                >
                  Fermer
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-2xl font-[family-name:var(--font-display)] text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
