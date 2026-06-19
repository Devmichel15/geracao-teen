import React from "react";
import { motion } from "framer-motion";
import { Flame, BookOpen, HeartHandshake, Zap } from "lucide-react";

export default function Missao() {
  const cards = [
    {
      title: "Evangelizar",
      icon: Flame,
      color: "from-pink-500 to-rose-500",
      borderColor: "border-brand-pink",
      textColor: "text-brand-pink",
      description:
        "Levar a mensagem simples e poderosa do amor de Cristo a cada adolescente que ainda não conhece a Deus — na escola, na família, na vizinhança, onde o Senhor abrir portas.",
    },
    {
      title: "Discipular",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-500",
      borderColor: "border-brand-blue",
      textColor: "text-brand-blue",
      description:
        "Crescer juntos na Palavra de Deus, na oração e no caráter. Ensinar a viver a fé no cotidiano, construindo uma vida firme e fundamentada no Evangelho de Jesus Cristo.",
    },
    {
      title: "Conectar",
      icon: HeartHandshake,
      color: "from-pink-500 to-blue-500",
      borderColor: "border-purple-400",
      textColor: "text-purple-400",
      description:
        "Criar laços de amizade autêntica e comunhão cristã. Ser uma família espiritual onde todo adolescente é recebido de braços abertos, sem julgamento, com o amor de Cristo.",
    },
    {
      title: "Transformar",
      icon: Zap,
      color: "from-yellow-400 to-amber-500",
      borderColor: "border-yellow-400",
      textColor: "text-yellow-400",
      description:
        "Ser instrumento do Espírito Santo para mudar vidas, restaurar famílias e impactar a nossa cidade com o poder do Evangelho, através de oração, serviço e louvor.",
    },
  ];

  return (
    <section
      id="missao"
      className="relative min-h-screen w-full bg-[#161626] bg-dark-grid py-24 px-6 overflow-hidden flex flex-col justify-center"
    >
      {/* Decorative graffiti tags in the background */}
      <div className="absolute top-10 right-[5%] font-boogaloo text-9xl text-white/5 pointer-events-none select-none select-none rotate-6">
        PURPOSE
      </div>
      <div className="absolute bottom-10 left-[5%] font-boogaloo text-9xl text-white/5 pointer-events-none select-none select-none -rotate-6">
        COMMUNITY
      </div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="text-center mb-16">
          <span className="font-fredoka font-bold text-xs uppercase tracking-widest text-brand-pink mb-2 block">
            Nosso Propósito
          </span>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-white tracking-tight">
            Os Quatro Pilares da Geração Teen
          </h2>
          <p className="max-w-2xl mx-auto font-nunito text-slate-400 mt-4 text-base md:text-lg">
            A nossa fé é sustentada por fundamentos sólidos, baseados na Palavra de Deus, que nos capacitam a ser a diferença que o mundo precisa.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{
                  y: -10,
                  rotateX: 3,
                  rotateY: -3,
                  scale: 1.02,
                }}
                className={`relative p-8 rounded-lg bg-[#25253A]/60 border-2 ${card.borderColor} backdrop-blur-md flex flex-col justify-between h-[360px] cursor-pointer shadow-[6px_6px_0px_#000] hover:shadow-[12px_12px_0px_#000] transition-shadow duration-300 group`}
              >
                {/* Colored glowing accent on card top */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-md bg-gradient-to-r ${card.color}`} />
                
                <div>
                  {/* Icon container */}
                  <div className={`w-14 h-14 rounded-md flex items-center justify-center bg-brand-dark border-2 border-black/40 shadow-inner mb-6 group-hover:scale-110 transition-transform ${card.textColor}`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="font-fredoka font-bold text-2xl text-white mb-4 tracking-wide group-hover:text-brand-pink transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="font-nunito text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Stencil card number */}
                <div className="flex justify-end select-none">
                  <span className="font-boogaloo text-4xl text-white/10 group-hover:text-white/20 transition-colors">
                    0{idx + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
