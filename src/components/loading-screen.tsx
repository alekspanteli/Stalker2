"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 600);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {children}

      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading-screen"
            className="pointer-events-none fixed inset-0 z-[9999] flex flex-col items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Background color */}
            <div className="absolute inset-0 bg-stalker-dark" />

            {/* Preload image with pulse */}
            <motion.div
              className="relative z-10"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/preload.png"
                alt="Loading"
                width={320}
                height={320}
                className="h-auto w-auto max-w-[70vw]"
                priority
              />
            </motion.div>

            {/* Loading bar */}
            <div className="relative z-10 mt-6 w-48">
              <div className="h-[2px] w-full overflow-hidden bg-white/10">
                <motion.div
                  className="h-full bg-stalker-orange"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <p className="mt-3 text-center font-[family-name:var(--font-oswald)] text-[10px] tracking-[0.3em] text-stalker-gray/60 uppercase">
                Loading
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
