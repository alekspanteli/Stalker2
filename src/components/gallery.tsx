"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface Screenshot {
  url: string;
  alt: string;
  span?: string;
}

const SCREENSHOTS: Screenshot[] = [
  {
    url: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1643320/ss_b26b36c06b2e1bb637d616c7b0a2226c18e3d467.1920x1080.jpg?t=1771271884",
    alt: "The Zone landscape",
    span: "md:col-span-2",
  },
  {
    url: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1643320/ss_3e81b58486b73000a8e3fde80c6843d6215bedef.1920x1080.jpg?t=1771271884",
    alt: "Combat encounter",
  },
  {
    url: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1643320/ss_1fe5db2c19c1deb43e442149760327db8b6876bd.1920x1080.jpg?t=1771271884",
    alt: "Exploring the exclusion zone",
  },
  {
    url: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1643320/ss_3d1db6aef02f006c4876ab6c5286128a411b93c8.1920x1080.jpg?t=1771271884",
    alt: "Anomaly fields",
  },
  {
    url: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1643320/ss_391a21364954e497894310f1980947ebf6f3182b.1920x1080.jpg?t=1771271884",
    alt: "Open world vista",
    span: "md:col-span-2",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 md:px-12 bg-[#0a0a09]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-stalker-orange text-sm tracking-[0.3em] uppercase font-['Oswald',sans-serif] font-light mb-4 block">
            Screenshots
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight font-['Oswald',sans-serif] text-stalker-cream">
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
      </div>
    </section>
  );
}
