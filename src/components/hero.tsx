"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1603012948341-3ba25e139d83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Nuclear Power Plant"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-7xl md:text-8xl lg:text-[12rem] mb-8 tracking-tighter font-black text-white leading-none"
        >
          STALKER 2
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl mb-4 text-white font-light tracking-wide"
        >
          Heart of Chornobyl
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-lg md:text-xl mb-16 text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Discover the massive Chornobyl Exclusion Zone full of dangerous enemies, deadly anomalies and powerful artifacts
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Button size="lg" className="tracking-wide">
            PRE-ORDER NOW
          </Button>
          <Button variant="outline" size="lg" className="tracking-wide">
            WATCH TRAILER
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white text-sm tracking-widest"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SCROLL
        </motion.div>
      </motion.div>
    </div>
  );
}
