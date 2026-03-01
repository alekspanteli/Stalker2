"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import * as DialogPrimitive from "@radix-ui/react-dialog";

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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isOpen = selectedIndex !== null;

  const navigate = useCallback(
    (direction: 1 | -1) => {
      setImageLoaded(false);
      setSelectedIndex((prev) => {
        if (prev === null) return null;
        const next = prev + direction;
        if (next < 0) return FEATURES.length - 1;
        if (next >= FEATURES.length) return 0;
        return next;
      });
    },
    []
  );

  const selected = selectedIndex !== null ? FEATURES[selectedIndex] : null;

  return (
    <section id="features" className="py-32 bg-[#0a0a09]">
      <Container>
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
              onClick={() => { setImageLoaded(false); setSelectedIndex(index); }}
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
      </Container>

      {/* Lightbox Dialog */}
      <Dialog open={isOpen} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent className="w-[95vw] max-w-[1400px] h-auto max-h-[90vh] p-0 border-0 bg-transparent">
          <VisuallyHidden.Root>
            <DialogPrimitive.Title>Feature image lightbox</DialogPrimitive.Title>
          </VisuallyHidden.Root>
          {selected && (
            <div className="relative">
              {/* Close button */}
              <DialogClose className="absolute -top-10 right-0 z-10 text-stalker-cream/70 hover:text-stalker-orange transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </DialogClose>

              {/* Image */}
              <div className="relative w-full aspect-video">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="animate-spin h-8 w-8 text-stalker-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  </div>
                )}
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className={`object-contain transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                  sizes="95vw"
                  priority
                  onLoad={() => setImageLoaded(true)}
                />
              </div>

              {/* Caption */}
              <p className="text-stalker-cream/60 text-sm font-['Oswald',sans-serif] tracking-wider text-center mt-3">
                {selected.title}
                <span className="text-stalker-cream/30 ml-3">
                  {selectedIndex! + 1} / {FEATURES.length}
                </span>
              </p>

              {/* Prev / Next buttons */}
              <button
                onClick={() => navigate(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-stalker-dark/60 hover:bg-stalker-orange/80 text-stalker-cream p-2 transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={() => navigate(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-stalker-dark/60 hover:bg-stalker-orange/80 text-stalker-cream p-2 transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
