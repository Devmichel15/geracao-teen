import React from "react";
import { Quote } from "lucide-react";

export default function Versiculos() {
  const verses = [
    {
      ref: "1 Timóteo 4:12",
      text: "Ninguém despreze a tua mocidade; mas sê o exemplo dos fiéis, na palavra, no trato, no amor, no espírito, na fé, na pureza.",
      accent: "border-brand-pink text-brand-pink",
      bgClass: "from-brand-pink/5 via-transparent to-transparent",
      shadow: "shadow-[6px_6px_0px_#F665BE]",
      textShadow: "text-spray-pink",
    },
    {
      ref: "Mateus 5:14",
      text: "Vós sois a luz do mundo; não se pode esconder uma cidade edificada sobre um monte.",
      accent: "border-brand-blue text-brand-blue",
      bgClass: "from-brand-blue/5 via-transparent to-transparent",
      shadow: "shadow-[6px_6px_0px_#84C1F6]",
      textShadow: "text-spray-blue",
    },
    {
      ref: "Romanos 12:2",
      text: "Não vos conformeis com este mundo, mas transformai-vos pela renovação do vosso entendimento, para que experimenteis qual seja a boa, agradável e perfeita vontade de Deus.",
      accent: "border-yellow-400 text-yellow-400",
      bgClass: "from-yellow-400/5 via-transparent to-transparent",
      shadow: "shadow-[6px_6px_0px_#facc15]",
      textShadow: "text-shadow: 0 0 10px rgba(250,204,21,0.5)",
    },
  ];

  return (
    <section
      id="versiculos"
      className="relative min-h-screen w-full bg-brand-dark bg-halftone-dots py-24 px-6 overflow-hidden flex flex-col justify-center"
    >
      {/* Visual background details */}
      <div className="absolute top-[15%] left-[2%] opacity-15 select-none font-boogaloo text-7xl sm:text-9xl text-slate-500/25 pointer-events-none -rotate-12">
        WORD OF GOD
      </div>
      <div className="absolute bottom-[10%] right-[2%] opacity-15 select-none font-boogaloo text-7xl sm:text-9xl text-slate-500/25 pointer-events-none rotate-12">
        STENCIL ART
      </div>

      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="text-center mb-16">
          <span className="font-fredoka font-bold text-xs uppercase tracking-widest text-brand-blue mb-2 block">
            Nossa Inspiração
          </span>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-white tracking-tight">
            Versículos Claves
          </h2>
          <p className="max-w-xl mx-auto font-nunito text-slate-400 mt-4 text-sm md:text-base">
            Textos bíblicos que guiam o nosso movimento e inspiram o nosso testemunho diário na cidade.
          </p>
        </div>

        {/* Verses Stack/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verses.map((v, idx) => (
            <div
              key={v.ref}
              className={`relative p-8 rounded-lg bg-[#25253A]/50 border-3 border-black backdrop-blur-sm flex flex-col justify-between ${v.shadow} hover:-translate-y-1 hover:translate-x-[-2px] transition-all duration-300 group overflow-hidden bg-gradient-to-br ${v.bgClass}`}
            >
              {/* Splatter mark overlay */}
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-white/5 blur-xl pointer-events-none" />

              {/* Quote Icon */}
              <div className="mb-6 flex justify-between items-start">
                <Quote className={`w-10 h-10 ${v.accent} opacity-60`} />
                <span className="font-boogaloo text-5xl text-white/5 select-none">
                  #0{idx + 1}
                </span>
              </div>

              {/* Text */}
              <div className="mb-8">
                <p className="font-nunito font-semibold text-white text-lg sm:text-xl leading-relaxed italic relative z-10">
                  "{v.text}"
                </p>
              </div>

              {/* Reference tag */}
              <div className="pt-4 border-t border-white/10 flex items-center">
                <span
                  className={`font-boogaloo text-2xl tracking-wider uppercase font-semibold ${v.accent} ${v.textShadow} transition-colors group-hover:text-white`}
                >
                  {v.ref}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative callout */}
        <div className="mt-16 text-center select-none">
          <p className="font-boogaloo text-3xl tracking-widest text-white/20 uppercase">
            — NÃO TENHAS VERGONHA DO EVANGELHO —
          </p>
        </div>
      </div>
    </section>
  );
}
