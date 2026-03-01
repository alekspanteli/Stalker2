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

  const navigate = useCallback(
    (direction: 1 | -1) => {
      setImageLoaded(false);
      setSelectedIndex((prev) => {
        if (prev === null) return null;
        const next = prev + direction;
        if (next < 0) return SCREENSHOTS.length - 1;
        if (next >= SCREENSHOTS.length) return 0;
        return next;
      });
    },
    []
  );

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

      {/* Lightbox Dialog */}
      <Dialog open={isOpen} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent className="w-[95vw] max-w-[1400px] h-auto max-h-[90vh] p-0 border-0 bg-transparent">
          <VisuallyHidden.Root>
            <DialogPrimitive.Title>Image lightbox</DialogPrimitive.Title>
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
                  src={selected.url}
                  alt={selected.alt}
                  fill
                  className={`object-contain transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                  sizes="95vw"
                  priority
                  onLoad={() => setImageLoaded(true)}
                />
              </div>

              {/* Caption */}
              <p className="text-stalker-cream/60 text-sm font-[family-name:var(--font-oswald)] tracking-wider text-center mt-3">
                {selected.alt}
                <span className="text-stalker-cream/30 ml-3">
                  {selectedIndex! + 1} / {SCREENSHOTS.length}
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
