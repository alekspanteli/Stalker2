import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const factions = [
  {
    name: "DUTY",
    description: "Protecting the world from the Zone",
  },
  {
    name: "FREEDOM",
    description: "Free access to the Zone for everyone",
  },
  {
    name: "LONERS",
    description: "Independent stalkers seeking fortune",
  },
  {
    name: "MONOLITH",
    description: "Fanatical protectors of the center",
  },
];

export function Factions() {
  return (
    <section id="factions" className="py-32 px-6 md:px-12 lg:px-20 bg-zinc-950">
      <div className="max-w-[1920px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            THE ZONE'S<br />INHABITANTS
          </h2>
          <p className="text-gray-400 text-xl font-light max-w-3xl">
            Meet the factions fighting for control and survival in the Exclusion Zone. Your choices will shape alliances and determine enemies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {factions.map((faction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black border border-zinc-800 p-8 hover:border-white transition-all group"
            >
              <h3 className="text-2xl font-black mb-3 tracking-tight text-white group-hover:text-gray-300 transition-colors">
                {faction.name}
              </h3>
              <p className="text-gray-400 font-light">
                {faction.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
