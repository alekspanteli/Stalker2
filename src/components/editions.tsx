"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface Edition {
  name: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const EDITIONS: Edition[] = [
  {
    name: "STANDARD EDITION",
    price: "$59.99",
    features: ["Full game", "Digital artbook", "Original soundtrack"],
  },
  {
    name: "DELUXE EDITION",
    price: "$79.99",
    features: [
      "Full game",
      "Season pass",
      "Extended artbook",
      "Extended soundtrack",
      "Exclusive in-game items",
    ],
    isFeatured: true,
  },
  {
    name: "ULTIMATE EDITION",
    price: "$99.99",
    features: [
      "Full game",
      "Season pass",
      "Extended artbook",
      "Extended soundtrack",
      "Exclusive in-game items",
      "Physical collector's box",
    ],
  },
];

export function Editions() {
  return (
    <section id="editions" className="py-32 bg-stalker-dark">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-stalker-orange text-sm tracking-[0.3em] uppercase font-['Oswald',sans-serif] font-light mb-4 block">
            Available Now
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-['Oswald',sans-serif] text-stalker-cream">
            PRE-ORDER <span className="text-stalker-orange">NOW</span>
          </h2>
          <p className="text-stalker-cream/50 text-lg font-light max-w-2xl mx-auto">
            Choose your edition and prepare to enter the Zone
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {EDITIONS.map((edition, index) => (
            <motion.div
              key={edition.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={cn(
                "relative bg-[#0a0a09] border p-10 transition-all duration-500 overflow-hidden group",
                edition.isFeatured
                  ? "border-stalker-orange/50 md:scale-105"
                  : "border-stalker-cream/10 hover:border-stalker-cream/25"
              )}
            >
              {edition.isFeatured && (
                <>
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-stalker-orange" />
                  <Badge className="mb-6">Most Popular</Badge>
                </>
              )}
              <h3 className="text-2xl font-bold mb-4 tracking-tight font-['Oswald',sans-serif] text-stalker-cream">
                {edition.name}
              </h3>
              <div className="text-4xl font-bold mb-8 text-stalker-orange font-['Oswald',sans-serif]">
                {edition.price}
              </div>

              <ul className="space-y-3 mb-10">
                {edition.features.map((feature) => (
                  <li key={feature} className="text-stalker-cream/50 font-light flex items-start gap-3">
                    <span className="text-stalker-orange mt-1 text-sm">&#9670;</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={edition.isFeatured ? "default" : "outline"}
                className="w-full"
              >
                Pre-Order
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
