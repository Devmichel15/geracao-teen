import React from "react";
import { Quote, Sparkles } from "lucide-react";

export default function Lideranca() {
  const leaders = [
    {
      name: "Emanuela Munana",
      role: "Líder Geral",
      verse: "II Coríntios 5:17",
      verseText:
        "Assim que, se alguém está em Cristo, nova Criatura é: as coisas velhas já passaram e eis que tudo se fez novo",
      image: "/lider1.jpg",
      color: "border-brand-pink text-brand-pink shadow-[5px_5px_0px_#F665BE]",
    },
    {
      name: "Abrãao Ferreira",
      role: "Líder do Louvor",
      verse: "João 11:35 || Isaías 40:31",
      verseText: "E Jesus Chorou ! || Mas os que esperam no Senhor renovarão as suas forças e subirão com asas como águias, correrão e não se cansarão, caminharão e não se fatigarão",
      avatar: "AF",
      color: "border-brand-pink text-brand-pink shadow-[5px_5px_0px_#F665BE]",
    },
    {
      name: "Gelson Paka",
      role: "Líder da Intercessão",
      verse: "Oséias 6:1-3",
      verseText:
        "1 Vinde, e tornemos ao Senhor, porque ele despedaçou, e nos sarará; feriu, e nos atará a ferida. 2 Depois de dois dias nos dará a vida; ao terceiro dia nos ressuscitará, e viveremos diante dele.",
      image: "/lider2.png",
      color: "border-yellow-400 text-yellow-400 shadow-[5px_5px_0px_#facc15]",
    },
    {
      name: "Tikaylane Gerry",
      role: "Líder dos Voluntários",
      verse: "Romanos 12:2",
      verseText:
        "Não vos conformeis com este mundo, mas transformai-vos pela renovação do vosso entendimento, para que experimenteis qual seja a boa, agradável e perfeita vontade de Deus.",
      image: "/lider3.png",
      color: "border-yellow-400 text-yellow-400 shadow-[5px_5px_0px_#facc15]",
    },
  ];

  return (
    <section
      id="lideranca"
      className="relative min-h-screen w-full bg-[#161626] bg-dark-grid py-24 px-6 overflow-hidden flex flex-col justify-center"
    >
      {/* Background decorations */}
      <div className="absolute top-[10%] left-[2%] opacity-15 select-none font-boogaloo text-9xl text-white/5 pointer-events-none select-none">
        LEADERS
      </div>
      <div className="absolute bottom-[10%] right-[2%] opacity-15 select-none font-boogaloo text-9xl text-white/5 pointer-events-none select-none">
        CREW
      </div>

      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="text-center mb-16">
          <span className="font-fredoka font-bold text-xs uppercase tracking-widest text-brand-blue mb-2 block">
            Nossa Equipe
          </span>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-white tracking-tight">
            Quem Serve o Ministério
          </h2>
          <p className="max-w-xl mx-auto font-nunito text-slate-400 mt-4 text-sm md:text-base">
            Servos comprometidos com o crescimento espiritual, a ungção do Espírito Santo e a edificação dos adolescentes da Geração Teen.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className={`relative bg-[#25253A]/40 border-3 border-black rounded-lg p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between ${leader.color}`}
            >
              <div>
                {/* Photo container */}
                <div className="relative w-full aspect-square mb-6 border-2 border-black rounded-md overflow-hidden bg-brand-dark shadow-inner">
                  {leader.image ? <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                : <span className="flex items-center justify-center text-6xl h-full">
                  {leader.avatar}
                </span>
                }
                  
                  <div className="absolute top-3 left-3 bg-black/85 border border-white/20 text-white font-boogaloo text-sm px-3 py-1 rounded-sm uppercase tracking-widest">
                    {leader.role}
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-fredoka font-bold text-2xl text-white mb-2 tracking-wide group-hover:text-white transition-colors">
                  {leader.name}
                </h3>

                
              </div>

              {/* Verse Overlay on Hover */}
              <div className="pt-4 border-t border-white/10 flex flex-col">
                <div className="flex items-center gap-1.5 mb-1.5 opacity-80">
                  <Quote className="w-4 h-4" />
                  <span className="font-fredoka font-bold text-xs uppercase tracking-wider">
                    Versículo Favorito
                  </span>
                </div>
                <p className="font-nunito text-xs text-slate-400 italic mb-2 leading-relaxed">
                  "{leader.verseText}"
                </p>
                <span className="font-boogaloo text-lg tracking-wider font-semibold self-end">
                  — {leader.verse}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
