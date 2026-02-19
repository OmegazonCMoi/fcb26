"use client";

import { motion } from "framer-motion";
import { useReveal } from "../context/RevealContext";

export default function GradientBlobs() {
  const { revealPhase } = useReveal();

  if (revealPhase === "idle") return null;

  return (
    <motion.div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="absolute -top-[300px] -right-[200px] w-[900px] h-[900px] rounded-full bg-purple-950/30 blur-[200px]" />
      <div className="absolute top-[40%] -left-[300px] w-[700px] h-[700px] rounded-full bg-indigo-950/25 blur-[180px]" />
      <div className="absolute -bottom-[200px] right-[20%] w-[600px] h-[600px] rounded-full bg-violet-950/20 blur-[160px]" />
    </motion.div>
  );
}
