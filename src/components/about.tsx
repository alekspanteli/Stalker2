"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-stalker-dark">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-stalker-orange text-sm tracking-[0.3em] uppercase font-['Oswald',sans-serif] font-light mb-4 block">
              About the Game
            </span>
            <h2 className="text-5xl md:text-7xl mb-8 font-bold leading-tight tracking-tight font-['Oswald',sans-serif] text-stalker-cream">
              A STORY OF<br />
              <span className="text-stalker-orange">YOUR OWN</span>
            </h2>
            <p className="text-stalker-cream/50 text-lg mb-6 font-light leading-relaxed">
              Take over the role of a lone stalker and explore photorealistic seamless open world in a 64-square-kilometer radioactive zone with a variety of environments that reveal post-apocalyptic atmosphere from different angles.
            </p>
            <p className="text-stalker-cream/50 text-lg mb-10 font-light leading-relaxed">
              Make your way to the heart of Chornobyl and investigate a conspiracy with far-reaching consequences for the entire world. Your choices will determine the fate of the Zone and everyone within it.
            </p>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] border border-stalker-cream/10"
          >
            <Image
              src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1643320/ss_8589bf4f88762910952fd0f1c3f6072d31f27aad.1920x1080.jpg?t=1771271884"
              alt="Stalker exploring the Zone"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stalker-dark via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-stalker-orange to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
