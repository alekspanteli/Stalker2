import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    image: "https://images.unsplash.com/photo-1727462759754-1dfed461c348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZm9yZXN0JTIwZm9nJTIwYXRtb3NwaGVyaWN8ZW58MXx8fHwxNzcyMzk0OTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "IMMERSIVE SIM",
    description: "Feel the threat breathing down your neck in a constant fight for survival",
  },
  {
    image: "https://images.unsplash.com/photo-1635258512486-f9e102e74248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWRpYXRpb24lMjBoYXphcmQlMjBkYXJrJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzIzOTQ5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "DEADLY ANOMALIES",
    description: "The Zone is filled with dangerous anomalies and deadly artifacts",
  },
  {
    image: "https://images.unsplash.com/photo-1665333083246-757ac11de378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3ZpZXQlMjBicnV0YWxpc3QlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcyMzk0OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "EPIC SCALE",
    description: "Explore the vast Chornobyl Exclusion Zone like never before",
  },
  {
    image: "https://images.unsplash.com/photo-1565718814595-fc54aa6b2137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYmFuZG9uZWQlMjBmYWN0b3J5JTIwZGFya3xlbnwxfHx8fDE3NzIzOTQ5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "FACTION WARFARE",
    description: "Navigate complex relations between hostile factions",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6 md:px-12 lg:px-20 bg-black">
      <div className="max-w-[1920px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            GAME FEATURES
          </h2>
          <p className="text-gray-400 text-xl font-light max-w-3xl">
            Experience the unique blend of first-person shooter, immersive sim, and horror elements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative h-[500px] overflow-hidden group cursor-pointer"
            >
              <ImageWithFallback
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <h3 className="text-3xl font-black mb-3 tracking-tight text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 font-light text-lg">
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
