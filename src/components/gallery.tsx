"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Lightbox } from "@/components/lightbox";
import { useLightboxNavigation } from "@/lib/use-lightbox-navigation";

interface Screenshot {
  url: string;
  alt: string;
  span?: string;
}

const SCREENSHOTS: Screenshot[] = [
  {
    url: "/images/gallery-zone-landscape.jpg",
    alt: "The Zone landscape",
    span: "md:col-span-2",
  },
  {
    url: "/images/gallery-combat.jpg",
    alt: "Combat encounter",
  },
  {
    url: "/images/gallery-exploring.jpg",
    alt: "Exploring the exclusion zone",
  },
  {
    url: "/images/gallery-anomaly-fields.jpg",
    alt: "Anomaly fields",
  },
  {
    url: "/images/gallery-open-world-vista.jpg",
    alt: "Open world vista",
    span: "md:col-span-2",
  },
];

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isOpen = selectedIndex !== null;

  const { navigate } = useLightboxNavigation({
    itemCount: SCREENSHOTS.length,
    setSelectedIndex,
    setImageLoaded,
  });

  const selected = selectedIndex !== null ? SCREENSHOTS[selectedIndex] : null;

  return (
    <section id="gallery" className="py-32 bg-[#0a0a09]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-stalker-orange text-sm tracking-[0.3em] uppercase font-[family-name:var(--font-oswald)] font-light mb-4 block">
            Screenshots
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight font-[family-name:var(--font-oswald)] text-stalker-cream">
            <span className="text-stalker-orange">MEDIA</span> GALLERY
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-3">
          {SCREENSHOTS.map((screenshot, index) => (
            <motion.div
              key={screenshot.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative h-[300px] md:h-[400px] overflow-hidden group cursor-pointer border border-stalker-cream/5 ${screenshot.span || ""}`}
              onClick={() => { setImageLoaded(false); setSelectedIndex(index); }}
            >
              <Image
                src={screenshot.url}
                alt={screenshot.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes={screenshot.span ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
              />
              <div className="absolute inset-0 bg-stalker-dark/0 group-hover:bg-stalker-dark/30 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-stalker-orange group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </Container>

      <Lightbox
        variant="image"
        open={isOpen}
        onOpenChange={(open) => !open && setSelectedIndex(null)}
        imageSrc={selected?.url ?? null}
        imageAlt={selected?.alt ?? null}
        imageLoaded={imageLoaded}
        onImageLoad={() => setImageLoaded(true)}
        onPrev={() => navigate(-1)}
        onNext={() => navigate(1)}
        caption={selected?.alt ?? ""}
        counter={`${selectedIndex !== null ? selectedIndex + 1 : 0} / ${SCREENSHOTS.length}`}
        dialogTitle="Image lightbox"
        dialogDescription="Preview and navigate gallery screenshots in a full-screen lightbox."
      />
    </section>
  );
}
