import React from "react";
import { motion } from "framer-motion";
import { Maximize2, Tag } from "lucide-react";

export default function Galeria() {
  const posters = [
    {
      id: 1,
      title: "Arte para Deus",
      tag: "Expressão de Fé",
      imgSrc: "/gallery_graffiti.png",
      rotate: "-rotate-2",
      hoverRotate: "hover:rotate-1",
      size: "md:col-span-1 md:row-span-1",
    },
    {
      id: 2,
      title: "Propósito & Ação",
      tag: "Servindo ao Senhor",
      imgSrc: "/gallery_skater.png",
      rotate: "rotate-3",
      hoverRotate: "hover:rotate-[-1deg]",
      size: "md:col-span-1 md:row-span-2",
    },
    {
      id: 3,
      title: "Adoração Real",
      tag: "Louvor ao Senhor",
      imgSrc: "/gallery_worship.png",
      rotate: "-rotate-1",
      hoverRotate: "hover:rotate-2",
      size: "md:col-span-1 md:row-span-2",
    },
    {
      id: 4,
      title: "Família em Cristo",
      tag: "Comunhão & Amor",
      imgSrc: "/gallery_community.png",
      rotate: "rotate-2",
      hoverRotate: "hover:rotate-[-2deg]",
      size: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <section
      id="galeria"
      className="relative min-h-screen w-full bg-[#181827] bg-dark-grid py-24 px-6 overflow-hidden flex flex-col justify-center bg-grunge-overlay"
    >
      {/* Visual background details */}
      <div className="absolute top-[5%] right-[2%] opacity-10 select-none font-boogaloo text-9xl text-brand-pink/10 pointer-events-none select-none">
        POSTERS
      </div>
      <div className="absolute bottom-[5%] left-[2%] opacity-10 select-none font-boogaloo text-9xl text-brand-blue/10 pointer-events-none select-none">
        STREETS
      </div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="text-center mb-16">
          <span className="font-fredoka font-bold text-xs uppercase tracking-widest text-brand-pink mb-2 block">
            Momentos do Ministério
          </span>
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-white tracking-tight">
            Nossa Galeria
          </h2>
          <p className="max-w-2xl mx-auto font-nunito text-slate-400 mt-4 text-sm md:text-base">
            Registos de fé, louvor e comunhão: momentos reais em que Deus se manifesta no meio da nossa juventude.
          </p>
        </div>

        {/* Glued Poster Wall Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:auto-rows-[250px]">
          {posters.map((poster) => (
            <motion.div
              key={poster.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: poster.id * 0.15 }}
              whileHover={{
                scale: 1.05,
                zIndex: 10,
                boxShadow: "0px 20px 30px rgba(0,0,0,0.8)",
              }}
              className={`glued-poster relative rounded-sm cursor-pointer transition-transform duration-300 ${poster.rotate} ${poster.hoverRotate} ${poster.size} group`}
            >
              {/* Torn/Weathered margins border inside */}
              <div className="absolute inset-2 border-2 border-black/40 pointer-events-none z-20" />
              
              {/* Tape marks in corners for the glued look */}
              <div className="absolute -top-1 -left-3 w-10 h-4 bg-yellow-100/30 border border-black/10 backdrop-blur-[1px] rotate-[-35deg] pointer-events-none z-30" />
              <div className="absolute -bottom-1 -right-3 w-10 h-4 bg-yellow-100/30 border border-black/10 backdrop-blur-[1px] rotate-[-25deg] pointer-events-none z-30" />
              
              {/* Image */}
              <img
                src={poster.imgSrc}
                alt={poster.title}
                className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 transition-all duration-300"
              />

              {/* Poster info overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity z-10 flex flex-col justify-end p-5">
                
                {/* Tag */}
                <div className="flex items-center gap-1.5 text-brand-pink text-xs font-semibold uppercase tracking-wider mb-1">
                  <Tag className="w-3.5 h-3.5" />
                  {poster.tag}
                </div>

                {/* Title */}
                <h3 className="font-boogaloo text-3xl text-white tracking-wide group-hover:text-brand-blue transition-colors">
                  {poster.title}
                </h3>
              </div>

              {/* View indicator */}
              <div className="absolute top-4 right-4 bg-black/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
