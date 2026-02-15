"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./LoadingScreen";

export default function PageWithLoading({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!loadingComplete ? (
          <LoadingScreen
            key="loading"
            onComplete={() => setLoadingComplete(true)}
          />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
