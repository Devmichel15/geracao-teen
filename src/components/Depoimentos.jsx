import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Depoimentos() {
  const testimonials = [
    {
      id: 1,
      name: "Nataniel Antônio",
      text: "Quando eu estive pela primeira vez na geração teen não gostei muito porque não conhecia ninguém e estava lá por obrigação, mas ao longo do tempo comecei a gostar desse lugar porque encontrei pessoas que se tornaram minha família,  me ajudando em momentos difíceis e principalmente me aproximar mais de Deus, e com isso, me fizeram gostar ainda mais de ir a igreja se tornando meu lugar de refúgio",
      tag: "Ministério de Louvor",
      avatar: "NA",
      color: "border-brand-pink text-brand-pink",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="depoimentos"
      className="relative min-h-screen w-full bg-[#161626] bg-dark-grid py-24 px-6 overflow-hidden flex flex-col justify-center bg-grunge-overlay"
    >
      <div className="max-w-4xl mx-auto w-full z-10">
        <div className="text-center mb-16">
          <span className="font-fredoka font-bold text-xs uppercase tracking-widest text-brand-blue mb-2 block">
            Testemunhos de Fé
          </span>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-white tracking-tight">
            O que Deus Tem Feito
          </h2>
          <p className="max-w-xl mx-auto font-nunito text-slate-400 mt-4 text-sm md:text-base">
            Veja os testemunhos de adolescentes cuja vida foi transformada pelo poder do Espírito Santo através da Geração Teen.
          </p>
        </div>

        {/* Carousel Slide Area */}
        <div className="relative min-h-[380px] sm:min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className={`w-full p-8 md:p-12 rounded-lg bg-[#25253A]/60 border-2 ${current.color.split(" ")[0]} backdrop-blur-md shadow-[6px_6px_0px_#000] relative flex flex-col justify-between`}
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-8 text-white/5 select-none font-boogaloo text-[160px] leading-none pointer-events-none">
                "
              </div>

              <div>
                {/* Header info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-black overflow-hidden bg-brand-dark shadow-md">
                    <span className="font-bold text-2xl">{current.avatar}</span>
                  </div>
                  <div>
                    <h3 className="font-fredoka font-bold text-xl text-white flex items-center gap-2">
                      {current.name}
                      
                    </h3>
                    <span className={`font-boogaloo text-base tracking-wider uppercase ${current.color.split(" ")[1]}`}>
                      {current.tag}
                    </span>
                  </div>
                </div>

                {/* Rating stars as a decorative touch */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="font-nunito text-slate-200 text-base md:text-lg italic leading-relaxed relative z-10">
                  "{current.text}"
                </p>
              </div>

              {/* Bottom tag indicator */}
              <div className="mt-8 flex justify-end select-none">
                <MessageSquare className="w-6 h-6 opacity-20" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Nav Controls */}
        <div className="flex justify-between items-center mt-10">
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3.5 h-3.5 rounded-full transition-all border border-black ${
                  currentIndex === idx
                    ? "bg-brand-pink w-8"
                    : "bg-slate-600 hover:bg-slate-400"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-brand-dark text-slate-300 hover:text-white rounded-md border-2 border-black shadow-[2px_2px_0px_#000] active:translate-y-[2px] transition-all"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-brand-dark text-slate-300 hover:text-white rounded-md border-2 border-black shadow-[2px_2px_0px_#000] active:translate-y-[2px] transition-all"
              aria-label="Next Slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
