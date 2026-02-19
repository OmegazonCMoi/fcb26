"use client";

import { motion } from "framer-motion";
import { useReveal } from "../context/RevealContext";

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { revealPhase } = useReveal();

  if (revealPhase !== "rest") return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
