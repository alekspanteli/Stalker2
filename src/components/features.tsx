"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface Feature {
  image: string;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1643320/ss_8d05d42210c72480ca9124af1f5e37c72d0b8616.1920x1080.jpg?t=1771271884",
    title: "IMMERSIVE SIM",
    description: "Feel the threat breathing down your neck in a constant fight for survival",
  },
  {
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1643320/ss_9e6718fbf965951c519a1fbe300bcfce85b2ea2f.1920x1080.jpg?t=1771271884",
    title: "DEADLY ANOMALIES",
    description: "The Zone is filled with dangerous anomalies and deadly artifacts",
  },
  {
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1643320/ss_f58915a4b031270732320aaba0f6905c50ed14c3.1920x1080.jpg?t=1771271884",
    title: "EPIC OPEN WORLD",
    description: "Explore the vast 64 km² Chornobyl Exclusion Zone like never before",
  },
  {
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1643320/ss_33db24b3dddd9e823e6556a739141c3f9ffd45e8.1920x1080.jpg?t=1771271884",
    title: "FACTION WARFARE",
    description: "Navigate complex relations between hostile factions vying for power",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6 md:px-12 bg-[#0a0a09]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-stalker-orange text-sm tracking-[0.3em] uppercase font-['Oswald',sans-serif] font-light mb-4 block">
            What Awaits You
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-['Oswald',sans-serif] text-stalker-cream">
            GAME <span className="text-stalker-orange">FEATURES</span>
          </h2>
          <p className="text-stalker-cream/50 text-lg font-light max-w-2xl">
            Experience the unique blend of first-person shooter, immersive sim, and horror elements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] overflow-hidden group cursor-pointer border border-stalker-cream/5"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stalker-dark via-stalker-dark/40 to-transparent group-hover:via-stalker-dark/20 transition-all duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-12 h-[2px] bg-stalker-orange mb-4 group-hover:w-20 transition-all duration-500" />
                <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight text-stalker-cream font-['Oswald',sans-serif]">
                  {feature.title}
                </h3>
                <p className="text-stalker-cream/60 font-light text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
