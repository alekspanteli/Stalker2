"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/container";

interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: "64 km²", label: "Seamless open world to explore" },
  { value: "Non-linear", label: "Story with multiple endings" },
  { value: "A-Life 2.0", label: "Advanced AI ecosystem" },
  { value: "Unique", label: "FPS, horror and immersive sim blend" },
];

export function Stats() {
  return (
    <section className="py-24 bg-stalker-dark border-y border-stalker-cream/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="text-center lg:text-left border-l-2 border-stalker-orange/40 pl-6"
            >
              <div className="text-4xl md:text-5xl mb-3 font-bold text-stalker-orange tracking-tight font-['Oswald',sans-serif]">
                {stat.value}
              </div>
              <div className="text-stalker-cream/50 font-light leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
