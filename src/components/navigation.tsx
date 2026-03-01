"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "Game", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Factions", href: "#factions" },
  { name: "Media", href: "#gallery" },
  { name: "Editions", href: "#editions" },
] as const;

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-stalker-dark/95 backdrop-blur-md border-b border-stalker-cream/10"
          : "bg-gradient-to-b from-stalker-dark/80 to-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2">
            {/* Radiation symbol SVG as logo */}
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-stalker-orange" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3.14.69 4.22 1.78L13.41 9.6A2.98 2.98 0 0 0 12 9c-.5 0-.97.12-1.41.34L7.78 6.78A6.96 6.96 0 0 1 12 5zm-7 7c0-1.66.69-3.14 1.78-4.22l2.82 2.81A2.98 2.98 0 0 0 9 12c0 .5.12.97.34 1.41l-2.56 2.81A6.96 6.96 0 0 1 5 12zm7 7a6.96 6.96 0 0 1-4.22-1.78l2.82-2.82c.44.22.91.34 1.41.34s.97-.12 1.41-.34l2.82 2.82A6.96 6.96 0 0 1 12 19zm0-5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.66 2.72l-2.56-2.81c.22-.44.34-.91.34-1.41s-.12-.97-.34-1.41l2.82-2.82A6.96 6.96 0 0 1 19 12c0 1.66-.69 3.14-1.78 4.22z"/>
            </svg>
            <span className="text-xl font-bold tracking-wider text-stalker-cream font-['Oswald',sans-serif] uppercase">
              S.T.A.L.K.E.R. 2
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stalker-cream/70 hover:text-stalker-orange transition-colors text-sm tracking-wider uppercase font-['Oswald',sans-serif] font-light relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-stalker-orange group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <Button size="default">
              Pre-Order
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-stalker-cream"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-stalker-dark/98 backdrop-blur-lg border-t border-stalker-cream/10"
          >
            <div className="px-6 py-8 space-y-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-stalker-cream/70 hover:text-stalker-orange transition-colors text-lg py-2 font-['Oswald',sans-serif] uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full">Pre-Order</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
