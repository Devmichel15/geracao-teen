import React from "react";
import { Quote, Sparkles } from "lucide-react";

export default function Lideranca() {
  const leaders = [
    {
      name: "Emanuela Munana",
      role: "Líder Geral",
      bio: "Apaixonada por Deus e pelo Evangelho, Thiago dedica a sua vida a ver adolescentes encontrando um propósito verdadeiro em Jesus Cristo e crescendo na fé pentecostal.",
      verse: "Romanos 1:16",
      verseText: "Porque não me envergonho do evangelho de Cristo, pois é o poder de Deus para salvação de todo aquele que crê.",
      image: "/lider1.jpg",
      color: "border-brand-pink text-brand-pink shadow-[5px_5px_0px_#F665BE]",
    },
    {
      name: "Abrãao Ferreira",
      role: "Líder de Louvor",
      bio: "Minônima de louvor e serva do Senhor. Beatriz acredita que a adoração genuina é a ponte entre o coração do jovem e o coração de Deus, e lidera o louvor da Geração Teen com ungção.",
      verse: "Salmos 150:6",
      verseText: "Tudo o que tem fôlego louve ao Senhor. Louvai ao Senhor.",
      image: "/leader_beatriz.png",
      color: "border-brand-blue text-brand-blue shadow-[5px_5px_0px_#84C1F6]",
    },
    {
      name: "Lucas Oliveira",
      role: "Líder de Discípulos",
      bio: "Lucas é apaixonado pelo discipulado bíblico e por acompanhar jovens na sua caminhada com Deus, ajudando cada um a descobrir a sua identidade e vocação em Cristo.",
      verse: "Tiago 2:18",
      verseText: "Mostra-me a tua fé sem as tuas obras, e eu te mostrarei a minha fé pelas minhas obras.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400",
      color: "border-yellow-400 text-yellow-400 shadow-[5px_5px_0px_#facc15]",
    },
    {
      name: "Emanuela Munana",
      role: "Líder Geral",
      bio: "Apaixonada por Deus e pelo Evangelho, Thiago dedica a sua vida a ver adolescentes encontrando um propósito verdadeiro em Jesus Cristo e crescendo na fé pentecostal.",
      verse: "Romanos 1:16",
      verseText: "Porque não me envergonho do evangelho de Cristo, pois é o poder de Deus para salvação de todo aquele que crê.",
      image: "/lider1.jpg",
      color: "border-brand-pink text-brand-pink shadow-[5px_5px_0px_#F665BE]",
    },
    {
      name: "Abrãao Ferreira",
      role: "Líder de Louvor",
      bio: "Minônima de louvor e serva do Senhor. Beatriz acredita que a adoração genuina é a ponte entre o coração do jovem e o coração de Deus, e lidera o louvor da Geração Teen com ungção.",
      verse: "Salmos 150:6",
      verseText: "Tudo o que tem fôlego louve ao Senhor. Louvai ao Senhor.",
      image: "/leader_beatriz.png",
      color: "border-brand-blue text-brand-blue shadow-[5px_5px_0px_#84C1F6]",
    },
    {
      name: "Lucas Oliveira",
      role: "Líder de Discípulos",
      bio: "Lucas é apaixonado pelo discipulado bíblico e por acompanhar jovens na sua caminhada com Deus, ajudando cada um a descobrir a sua identidade e vocação em Cristo.",
      verse: "Tiago 2:18",
      verseText: "Mostra-me a tua fé sem as tuas obras, e eu te mostrarei a minha fé pelas minhas obras.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400",
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
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/85 border border-white/20 text-white font-boogaloo text-sm px-3 py-1 rounded-sm uppercase tracking-widest">
                    {leader.role}
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-fredoka font-bold text-2xl text-white mb-2 tracking-wide group-hover:text-white transition-colors">
                  {leader.name}
                </h3>

                {/* Bio */}
                <p className="font-nunito text-sm text-slate-300 leading-relaxed mb-6">
                  {leader.bio}
                </p>
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
