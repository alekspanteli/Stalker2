"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div id="home" className="relative h-screen flex items-end justify-center overflow-hidden pb-24">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/20svideo.webm" type="video/webm" />
          <source src="/videos/20svideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-stalker-dark via-stalker-dark/30 to-stalker-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-stalker-dark/40 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-stalker-cream leading-none tracking-tight font-['Oswald',sans-serif]">
            S.T.A.L.K.E.R. 2
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-3xl lg:text-4xl mb-4 text-stalker-orange font-['Oswald',sans-serif] font-light tracking-[0.2em] uppercase"
        >
          Heart of Chornobyl
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-base md:text-lg mb-12 text-stalker-cream/60 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Discover the massive Chornobyl Exclusion Zone full of dangerous enemies, deadly anomalies and powerful artifacts
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg">
            Pre-Order Now
          </Button>
          <Button variant="outline" size="lg">
            Watch Trailer
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-stalker-cream/30 flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-stalker-orange" />
        </motion.div>
      </motion.div>
    </div>
  );
}
