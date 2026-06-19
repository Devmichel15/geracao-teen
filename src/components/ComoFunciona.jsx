import React from "react";
import { Search, MessageSquare, Flame, MapPin } from "lucide-react";

export default function ComoFunciona() {
  const steps = [
    {
      number: "01",
      title: "Chega Junto (Conhecer)",
      description: "Visita um dos nossos encontros gerais ao fim de semana: um tempo de louvor, Palavra, oração e comunhão pensado especialmente para adolescentes. Podes também contactar-nos pelas redes sociais.",
      icon: Search,
      color: "border-brand-pink text-brand-pink bg-brand-pink/5",
    },
    {
      number: "02",
      title: "Entra na Família (Conectar)",
      description: "Junta-te a um dos nossos Grupos de Discípulos — pequenos grupos semanais de estudo bíblico, oração e vida comunitária que decorrem na nossa Igreja durante a semana.",
      icon: MessageSquare,
      color: "border-brand-blue text-brand-blue bg-brand-blue/5",
    },
    {
      number: "03",
      title: "Aprofunda a Fé (Crescer)",
      description: "Participa nos nossos discipulados, retiros e encontros de formação para aprofundar a tua vida de oração, o teu conhecimento das Escrituras e o teu caráter em Cristo.",
      icon: Flame,
      color: "border-purple-400 text-purple-400 bg-purple-400/5",
    },
    {
      number: "04",
      title: "Serve com Propósito (Impactar)",
      description: "Descobre o teu dom e usa-o ao serviço do Senhor! Louvor, pregão, intercessão, ministerio de jovens — há um lugar para cada adolescente que deseja servir a Deus na Geração Teen.",
      icon: MapPin,
      color: "border-yellow-400 text-yellow-400 bg-yellow-400/5",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="relative min-h-screen w-full bg-brand-dark bg-halftone-dots py-24 px-6 overflow-hidden flex flex-col justify-center bg-grunge-overlay"
    >
      <div className="max-w-5xl mx-auto w-full z-10">
        <div className="text-center mb-20">
          <span className="font-fredoka font-bold text-xs uppercase tracking-widest text-brand-pink mb-2 block">
            Jornada GT
          </span>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-white tracking-tight">
            Como Participar?
          </h2>
          <p className="max-w-xl mx-auto font-nunito text-slate-400 mt-4 text-sm md:text-base">
            Fazer parte da Geração Teen é muito simples. Veja os passos da nossa jornada espiritual.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central paint stripe line for desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[4px] border-l-4 border-dashed border-slate-600/40 hidden md:block" />

          {/* Timeline items */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`flex flex-col md:flex-row items-center justify-between ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content block */}
                  <div className="w-full md:w-[45%]">
                    <div
                      className={`p-6 md:p-8 rounded-lg border-2 border-black bg-[#25253A]/60 backdrop-blur-md shadow-[4px_4px_0px_#000] hover:shadow-[7px_7px_0px_#000] transition-shadow duration-300 ${
                        isEven ? "md:text-right" : ""
                      }`}
                    >
                      <div
                        className={`inline-flex items-center justify-center p-3 rounded-md mb-4 border ${
                          step.color
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      <h3 className="font-fredoka font-bold text-2xl text-white mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="font-nunito text-slate-300 text-sm md:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Node marker (drawn on the central paint line) */}
                  <div className="relative my-6 md:my-0 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-brand-dark border-3 border-black text-white font-boogaloo text-xl shadow-[2px_2px_0px_#000]">
                    <span className="text-brand-pink">{step.number}</span>
                  </div>

                  {/* Empty placeholder block to maintain layout spacing */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
