"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";

export type RevealPhase = "idle" | "gradient" | "title" | "rest";

const RevealContext = createContext<{
  loadingComplete: boolean;
  revealPhase: RevealPhase;
  onLoadingComplete: () => void;
} | null>(null);

export function RevealProvider({ children }: { children: React.ReactNode }) {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [revealPhase, setRevealPhase] = useState<RevealPhase>("idle");
  const hasRevealed = useRef(false);

  const onLoadingComplete = useCallback(() => {
    setLoadingComplete(true);
  }, []);

  useEffect(() => {
    if (!loadingComplete || hasRevealed.current) return;
    hasRevealed.current = true;

    setRevealPhase("gradient");

    const t1 = setTimeout(() => setRevealPhase("title"), 200);
    const t2 = setTimeout(() => setRevealPhase("rest"), 500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [loadingComplete]);

  return (
    <RevealContext.Provider
      value={{ loadingComplete, revealPhase, onLoadingComplete }}
    >
      {children}
    </RevealContext.Provider>
  );
}

export function useReveal() {
  const ctx = useContext(RevealContext);
  if (!ctx) {
    return {
      loadingComplete: true,
      revealPhase: "rest" as RevealPhase,
      onLoadingComplete: () => {},
    };
  }
  return ctx;
}
