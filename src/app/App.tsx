import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { Gallery } from "./components/gallery";
import { About } from "./components/about";
import { Factions } from "./components/factions";
import { Timeline } from "./components/timeline";
import { Stats } from "./components/stats";
import { Footer } from "./components/footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navigation scrolled={scrolled} />
      <Hero />
      <Stats />
      <About />
      <Features />
      <Factions />
      <Gallery />
      <Timeline />
      <Footer />
    </div>
  );
}
