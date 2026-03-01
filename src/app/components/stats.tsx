import { motion } from "motion/react";

const stats = [
  { value: "64", label: "Square kilometers of seamless open world", suffix: "km²" },
  { value: "Non-linear", label: "Story with multiple endings", suffix: "" },
  { value: "Advanced", label: "Day and night cycle with weather", suffix: "" },
  { value: "Unique", label: "Blend of FPS, horror and immersive sim", suffix: "" }
];

export function Stats() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 bg-black">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="text-left"
            >
              <div className="text-5xl md:text-6xl mb-4 font-black text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-gray-400 font-light leading-relaxed max-w-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
