"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

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
  const pendingScrollRef = useRef<string | null>(null);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      setIsScrolled((prev) => {
        if (prev) {
          return currentY > 20;
        }
        return currentY > 70;
      });
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        isScrolled
          ? "bg-stalker-dark/95 backdrop-blur-md border-stalker-cream/10"
          : "bg-gradient-to-b from-stalker-dark/80 to-transparent border-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20 gap-8">
          <a href="#" className="flex-shrink-0 flex items-center">
            <Image
              src="/logo-S2.png"
              alt="S.T.A.L.K.E.R. 2"
              width={160}
              height={40}
              priority
              style={{ width: 160, height: 40 }}
            />
          </a>

          <div className="hidden md:flex items-center flex-shrink-0 gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stalker-cream/70 hover:text-stalker-orange transition-colors text-sm tracking-wider uppercase font-[family-name:var(--font-oswald)] font-light relative group"
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
      </Container>

      <AnimatePresence
        onExitComplete={() => {
          if (pendingScrollRef.current) {
            document.querySelector(pendingScrollRef.current)?.scrollIntoView({ behavior: "smooth" });
            pendingScrollRef.current = null;
          }
        }}
      >
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
                  onClick={(e) => {
                    e.preventDefault();
                    pendingScrollRef.current = link.href;
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-stalker-cream/70 hover:text-stalker-orange transition-colors text-lg py-2 font-[family-name:var(--font-oswald)] uppercase tracking-wider"
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
