import { motion } from "motion/react";

const editions = [
  {
    name: "STANDARD EDITION",
    price: "$59.99",
    features: [
      "Full game",
      "Digital artbook",
      "Original soundtrack",
    ]
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
    featured: true
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
    ]
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-32 px-6 md:px-12 lg:px-20 bg-zinc-950">
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
          {editions.map((edition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`bg-black border p-10 ${
                edition.featured 
                  ? 'border-white md:scale-105' 
                  : 'border-zinc-800 hover:border-white'
              } transition-all`}
            >
              {edition.featured && (
                <div className="text-xs tracking-widest mb-4 text-white">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-black mb-4 tracking-tight">
                {edition.name}
              </h3>
              <div className="text-4xl font-black mb-8">{edition.price}</div>
              
              <ul className="space-y-3 mb-10">
                {edition.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-400 font-light flex items-start gap-3">
                    <span className="text-white mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 font-medium tracking-wide transition-colors ${
                  edition.featured
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'border border-white text-white hover:bg-white hover:text-black'
                }`}
              >
                PRE-ORDER
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
