import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Missão", href: "#missao" },
    { name: "Versículos", href: "#versiculos" },
    { name: "Galeria", href: "#galeria" },
    { name: "Liderança", href: "#lideranca" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/95 backdrop-blur-md border-b-2 border-brand-pink/30 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="w-40">
          <img src="/logo.svg" alt="" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-nunito font-semibold text-sm tracking-wider uppercase text-slate-300 hover:text-brand-blue relative py-1 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-pink after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#convite-final"
            className="relative inline-block px-5 py-2 font-boogaloo text-lg tracking-wider text-brand-dark bg-brand-pink rounded-sm border-2 border-black font-semibold overflow-hidden shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            FAZER PARTE
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-200 hover:text-brand-pink p-1 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1A1A2E]/95 backdrop-blur-md border-b-2 border-brand-pink/50 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-6 font-nunito uppercase tracking-widest text-center text-lg">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-semibold py-2 text-slate-200 hover:text-brand-pink transition-colors border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#convite-final"
                onClick={() => setIsOpen(false)}
                className="mt-2 block w-full py-3 font-boogaloo text-xl text-brand-dark bg-brand-blue border-2 border-black rounded-sm shadow-[3px_3px_0px_#000]"
              >
                FAZER PARTE
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
