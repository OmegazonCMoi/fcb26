"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const SPLASH_KEY = "fcb26_splash_shown";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [visible, setVisible] = useState(true);
  const calledComplete = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem(SPLASH_KEY)) {
      setVisible(false);
      if (!calledComplete.current) {
        calledComplete.current = true;
        onComplete?.();
      }
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem(SPLASH_KEY, "1");
      setVisible(false);
      if (!calledComplete.current) {
        calledComplete.current = true;
        onComplete?.();
      }
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h1
          className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl font-bold tracking-[0.25em] uppercase text-white"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          FCB26
        </motion.h1>
        <motion.div
          className="w-12 h-px bg-white/30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
        <motion.p
          className="text-[13px] text-white/30 tracking-[0.15em] uppercase font-[family-name:var(--font-body)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          Forum Cybersécurité 2026
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
