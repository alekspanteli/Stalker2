"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/container";

interface Faction {
  name: string;
  description: string;
  color: string;
}

const FACTIONS: Faction[] = [
  {
    name: "DUTY",
    description: "A militaristic faction dedicated to protecting the world from the Zone's expanding influence. Disciplined and well-organized, they seek to destroy the Zone entirely.",
    color: "#c41e1e",
  },
  {
    name: "FREEDOM",
    description: "Advocates for free access to the Zone for everyone. They believe the Zone should be studied rather than feared, and oppose Duty's aggressive approach.",
    color: "#2e8b2e",
  },
  {
    name: "LONERS",
    description: "Independent stalkers bound by no faction. They venture into the Zone seeking fortune, artifacts, and answers — surviving on skill and luck alone.",
    color: "#EE991A",
  },
  {
    name: "MONOLITH",
    description: "Fanatical protectors of the Zone's center. Guided by an unknown force, they guard the path to the heart of Chornobyl with unwavering devotion.",
    color: "#4a7ab5",
  },
];

export function Factions() {
  return (
    <section id="factions" className="py-32 bg-stalker-dark">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-stalker-orange text-sm tracking-[0.3em] uppercase font-['Oswald',sans-serif] font-light mb-4 block">
            The Zone&apos;s Inhabitants
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-['Oswald',sans-serif] text-stalker-cream">
            CHOOSE YOUR <span className="text-stalker-orange">FACTION</span>
          </h2>
          <p className="text-stalker-cream/50 text-lg font-light max-w-2xl">
            Meet the factions fighting for control and survival in the Exclusion Zone. Your choices will shape alliances and determine enemies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FACTIONS.map((faction, index) => (
            <motion.div
              key={faction.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-stalker-dark/80 border border-stalker-cream/10 p-8 hover:border-stalker-cream/30 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 w-full h-[2px] transition-all duration-500 group-hover:h-[3px]"
                style={{ background: faction.color }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at top, ${faction.color}, transparent 70%)` }}
              />
              <h3
                className="text-2xl font-bold mb-4 tracking-tight font-['Oswald',sans-serif] transition-colors duration-300"
                style={{ color: faction.color }}
              >
                {faction.name}
              </h3>
              <p className="text-stalker-cream/40 font-light text-sm leading-relaxed relative z-10">
                {faction.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
