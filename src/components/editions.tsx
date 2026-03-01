"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
    <section id="editions" className="py-32 px-6 md:px-12 lg:px-20 bg-zinc-950">
      <div className="max-w-[1920px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            PRE-ORDER NOW
          </h2>
          <p className="text-gray-400 text-xl font-light max-w-3xl mx-auto">
            Choose your edition and prepare to enter the Zone
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {EDITIONS.map((edition, index) => (
            <motion.div
              key={edition.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={cn(
                "bg-black border p-10 transition-all",
                edition.isFeatured
                  ? "border-white md:scale-105"
                  : "border-zinc-800 hover:border-white"
              )}
            >
              {edition.isFeatured && (
                <Badge className="mb-4">MOST POPULAR</Badge>
              )}
              <h3 className="text-2xl font-black mb-4 tracking-tight">
                {edition.name}
              </h3>
              <div className="text-4xl font-black mb-8">{edition.price}</div>

              <ul className="space-y-3 mb-10">
                {edition.features.map((feature) => (
                  <li key={feature} className="text-gray-400 font-light flex items-start gap-3">
                    <span className="text-white mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={edition.isFeatured ? "default" : "outline"}
                className="w-full tracking-wide"
              >
                PRE-ORDER
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
