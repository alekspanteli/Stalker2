"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Lightbox } from "@/components/lightbox";
import { useLightboxNavigation } from "@/lib/use-lightbox-navigation";

interface Feature {
  image: string;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    image: "/images/feature-immersive-sim.jpg",
    title: "IMMERSIVE SIM",
    description: "Feel the threat breathing down your neck in a constant fight for survival",
  },
  {
    image: "/images/feature-deadly-anomalies.jpg",
    title: "DEADLY ANOMALIES",
    description: "The Zone is filled with dangerous anomalies and deadly artifacts",
  },
  {
    image: "/images/feature-epic-open-world.jpg",
    title: "EPIC OPEN WORLD",
    description: "Explore the vast 64 km² Chornobyl Exclusion Zone like never before",
  },
  {
    image: "/images/feature-faction-warfare.jpg",
    title: "FACTION WARFARE",
    description: "Navigate complex relations between hostile factions vying for power",
  },
];

export function Features() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isOpen = selectedIndex !== null;

  const { navigate } = useLightboxNavigation({
    itemCount: FEATURES.length,
    setSelectedIndex,
    setImageLoaded,
  });

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
          <span className="text-stalker-orange text-sm tracking-[0.3em] uppercase font-[family-name:var(--font-oswald)] font-light mb-4 block">
            What Awaits You
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-[family-name:var(--font-oswald)] text-stalker-cream">
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
                <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight text-stalker-cream font-[family-name:var(--font-oswald)]">
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

      <Lightbox
        variant="image"
        open={isOpen}
        onOpenChange={(open) => !open && setSelectedIndex(null)}
        imageSrc={selected?.image ?? null}
        imageAlt={selected?.title ?? null}
        imageLoaded={imageLoaded}
        onImageLoad={() => setImageLoaded(true)}
        onPrev={() => navigate(-1)}
        onNext={() => navigate(1)}
        caption={selected?.title ?? ""}
        counter={`${selectedIndex !== null ? selectedIndex + 1 : 0} / ${FEATURES.length}`}
        dialogTitle="Feature image lightbox"
        dialogDescription="Preview and navigate feature images in a full-screen lightbox."
      />
    </section>
  );
}
