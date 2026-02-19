"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const COMMAND = "start website.html";
const TYPING_SPEED = 160;
const LOADING_DURATION = 3000;

type Phase =
  | "idle"
  | "cursor-move"
  | "cursor-click"
  | "typing"
  | "enter"
  | "loading"
  | "complete";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [typedText, setTypedText] = useState("");
  const [loadingProgress, setLoadingProgress] = useState(0);
  const calledComplete = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => setPhase("cursor-move"), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase === "cursor-move") {
      const timer = setTimeout(() => setPhase("cursor-click"), 1400);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "cursor-click") {
      const timer = setTimeout(() => setPhase("typing"), 400);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "typing" && typedText.length < COMMAND.length) {
      const timer = setTimeout(() => {
        setTypedText(COMMAND.slice(0, typedText.length + 1));
      }, TYPING_SPEED);
      return () => clearTimeout(timer);
    } else if (phase === "typing" && typedText.length === COMMAND.length) {
      const timer = setTimeout(() => setPhase("enter"), 500);
      return () => clearTimeout(timer);
    }
  }, [phase, typedText]);

  useEffect(() => {
    if (phase === "enter") {
      const timer = setTimeout(() => setPhase("loading"), 600);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "loading") {
      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / LOADING_DURATION) * 100, 100);
        setLoadingProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setPhase("complete");
        }
      }, 16);
      return () => clearInterval(interval);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "complete" && !calledComplete.current) {
      calledComplete.current = true;
      const timer = setTimeout(() => onComplete?.(), 150);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  const showBlinkingUnderscore =
    phase === "idle" ||
    phase === "cursor-move" ||
    phase === "cursor-click" ||
    phase === "typing" ||
    phase === "enter";

  return (
    <div className="fixed inset-0 z-50 bg-black flex min-h-screen items-center justify-center">
      <div
        className="relative w-full max-w-2xl px-8 min-h-screen flex items-center justify-center"
        style={{ fontFamily: "var(--font-vt323)" }}
      >
        {/* Shell prompt */}
        <div className="absolute left-1/2 flex w-[340px] sm:w-[380px] -translate-x-1/2 -translate-y-1/2 top-1/2">
          <div className="flex items-baseline gap-2">
            <motion.span
              className="text-[#22aa22] text-3xl sm:text-4xl shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              $
            </motion.span>
            <span className="text-[#22aa22] text-3xl sm:text-4xl min-w-0 flex-1 translate-y-[1px]">
              {typedText}
              <AnimatePresence mode="wait">
                {showBlinkingUnderscore && (
                  <motion.span
                    key="underscore"
                    className="inline-block text-[#22aa22] text-3xl sm:text-4xl ml-0.5 align-middle"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [1, 0, 1],
                      transition: { repeat: Infinity, duration: 1.2 },
                    }}
                    exit={{ opacity: 0 }}
                  >
                    _
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </div>
        </div>

        {/* Mouse cursor */}
        <AnimatePresence>
          {(phase === "cursor-move" || phase === "cursor-click") && (
            <motion.div
              className="fixed pointer-events-none z-[60]"
              style={{ left: "80%", top: "75%" }}
              initial={{ opacity: 0 }}
              animate={
                phase === "cursor-move"
                  ? {
                      left: "calc(50% - 160px)",
                      top: "51%",
                      opacity: 1,
                      transition: {
                        duration: 1.2,
                        ease: "easeInOut",
                      },
                    }
                  : phase === "cursor-click"
                    ? {
                        left: "calc(50% - 160px)",
                        top: "51%",
                        opacity: 1,
                        scale: [1, 0.9, 1],
                        transition: {
                          scale: { duration: 0.2, ease: "easeOut" },
                        },
                      }
                    : {}
              }
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#22aa22] drop-shadow-[0_0_6px_rgba(34,170,34,0.5)]"
              >
                <path
                  d="M5 3L5 20L10 15L14 21L16 20L12 14L19 14L5 3Z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading bar + % */}
        {(phase === "loading" || phase === "complete") && (
          <div className="absolute left-1/2 top-[calc(50%+40px)] w-[340px] sm:w-[380px] -translate-x-1/2 space-y-2">
            <div className="h-4 w-full bg-[#0a1a0a] rounded overflow-hidden border border-[#22aa22]/40">
              <motion.div
                className="h-full bg-[#22aa22] rounded-sm"
                initial={{ width: "0%" }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-[#22aa22]/90 text-xl">
              {Math.round(loadingProgress)}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
