import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-20 bg-zinc-950">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl mb-8 font-black leading-tight tracking-tight">
              A STORY OF<br />YOUR OWN
            </h2>
            <p className="text-gray-400 text-lg mb-6 font-light leading-relaxed">
              Take over the role of a lone stalker and explore photorealistic seamless open world in a 64-square-kilometer radioactive zone with a variety of environments that reveal post-apocalyptic atmosphere from different angles.
            </p>
            <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
              Make your way to the heart of Chornobyl and investigate a conspiracy with far-reaching consequences for the entire world. Your choices will determine the fate of the Zone and everyone within it.
            </p>
            <motion.button
              whileHover={{ x: 10 }}
              className="text-white font-medium text-lg flex items-center gap-3 group"
            >
              Learn more about the game
              <span className="group-hover:translate-x-2 transition-transform text-2xl">→</span>
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px]"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1592367249429-e1760a50f750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXMlMjBtYXNrJTIwZGFyayUyMGF0bW9zcGhlcmV8ZW58MXx8fHwxNzcyMzk0MjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Gas Mask"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
