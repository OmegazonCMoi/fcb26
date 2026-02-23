"use client";

import { useState, useCallback } from "react";
import { RevealProvider, useReveal } from "../context/RevealContext";
import LoadingScreen from "./LoadingScreen";

function PageContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { onLoadingComplete } = useReveal();
  const [showTerminal, setShowTerminal] = useState(true);

  const handleTerminalComplete = useCallback(() => {
    setShowTerminal(false);
    onLoadingComplete();
  }, [onLoadingComplete]);

  return (
    <div className="min-h-screen bg-[#0a0a10]">
      {children}
      {showTerminal && (
        <LoadingScreen onComplete={handleTerminalComplete} />
      )}
    </div>
  );
}

export default function PageWithLoading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RevealProvider>
      <PageContent>{children}</PageContent>
    </RevealProvider>
  );
}
