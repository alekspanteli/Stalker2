import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const screenshots = [
  {
    url: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYmFuZG9uZWQlMjBidWlsZGluZyUyMGZvZ3xlbnwxfHx8fDE3NzIzOTQyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Explore abandoned structures",
  },
  {
    url: "https://images.unsplash.com/photo-1593642532400-2682810df593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWluJTIwZm9yZXN0JTIwZGFya3xlbnwxfHx8fDE3NzIzOTQyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Survive harsh environments",
  },
  {
    url: "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXN0eSUyMGZvcmVzdHxlbnwxfHx8fDE3NzIzOTQyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Navigate dangerous terrain",
  },
  {
    url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWlucyUyMGFwb2NhbHlwdGljfGVufDF8fHx8MTc3MjM5NDI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Discover hidden secrets",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 md:px-12 lg:px-20 bg-black">
      <div className="max-w-[1920px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            MEDIA
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative h-[600px] overflow-hidden group cursor-pointer"
            >
              <ImageWithFallback
                src={screenshot.url}
                alt={screenshot.alt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
