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
    {
      id: 2,
      name: "Rayssa Rodrigues",
      tag: "Ministério de Louvor | Intercessão",
      text: "Na GT eu percebi o verdadeiro sentido da frase “ferro afia ferro”, porque é isso que nós somos; adolescentes em 1Tessalonicenses 5:11",
      avatar: "RR",
      color: "border-brand-pink text-brand-pink",
    },
    {
      id: 3,
      name: "Irmã Nílcia",
      tag: "Multimídia | Intercessão",
      text: "A Geração Tenn, para mim, representa muito mais do que um simples núcleo; é um lugar de crescimento, aprendizado e transformação. É um ambiente que, a cada dia, me inspira a ser uma pessoa melhor, a buscar a excelência em tudo o que faço e a desenvolver cada vez mais as minhas capacidades. Fazer parte da Geração Tenn motiva-me a superar limites, a aperfeiçoar os meus talentos e a brilhar com propósito, dedicação e compromisso. É um espaço onde sou constantemente incentivada a evoluir, a sonhar mais alto e a dar o meu melhor em cada desafio que surge. ✨💙",
      avatar: "IN",
      color: "border-brand-pink text-brand-pink",
    },
    {
      id: 4,
      name: "Irmã Analia",
      tag: "Voluntários",
      text: "Bem, quando entrei na geração Teen era muito tímida, fechada e preferia andar sozinha q  conversar com os irmãos (não conhecia ninguém também). Passei três meses assim, e só no dia 29/12 de 2024 eu fiz as minhas primeiras amizades q foram o Júnior e a Rolle. Graças a eles eu pude conhecer mais irmãos, conheci os líderes e pude mostrar um pouco da minha personalidade. Passei por altos e baixos, ajudei alguns irmãos, outros ajudam-me bastante, tive problemas também, mas tudo isso foi um processo de mudança para a minha vida.  Eu digo q graças a Deus, eu venci a minha timidez, consigo mostrar para outros adolescentes o verdadeiro caminho, tenho amigos q me levam para o caminho certo, líderes q reconhecem o meu esforço, uma paixão em meu coração e o mais importante q tudo, o amor incondicional de Cristo por mim.",
      avatar: "IA",
      color: "border-brand-pink text-brand-pink",
    },
    {
      id: 5,
      name: "Tadiamara Missão",
      tag: "Ministério de Louvor",
      text: "Sou a irmã Tadiamara Missão e particularmente, sinto que Deus criou a geração teen para ser a minha guia na minha caminhada profunda com Deus , aprendo bastante, sinto o carinho e atenção de Deus, foi na geração teen que eu vivi um dos momentos mais maravilhosos q foi o batismo do Espírito Santo, foi na geração teen que eu aprendi a ser mais profunda no meu relacionamento com Deus ,conheci pessoas q hoje são um grande apoio na minha caminhada com Deus, e foi na geração teen q morreu a Tadiamara morna e nasceu a Tadiamara q anseia por Cristo, e sei q ainda irei aprender muito",
      avatar: "IA",
      color: "border-brand-pink text-brand-pink",
    },
    {
      id: 6,
      name: "Cláudio Farias",
      tag: "Intercessão",
      text: "Faço parte da Geração Teen há quase dois anos, praticamente desde a sua criação. Ao longo deste percurso, sinto que tive uma evolução significativa: aprimorei as minhas ações, desenvolvi as minhas capacidades cognitivas e ganhei uma maior perceção de 'corpo' e comunidade em relação aos outros irmãos (jovens e adolescentes da minha faixa etária, tanto mais velhos como mais novos). Desde o início, o meu maior desejo sempre foi estreitar a minha relação com Deus, fortalecer a minha fé e desenvolver uma maior capacidade crítica e conhecimento relativamente à Palavra. cooperar no Ministério de Intercessão. Foi aí que percebi que manter uma vida de oração, meditar na Palavra e procurar a intimidade com Deus são processos profundos — algo que vai muito além da visão superficial que a maioria das pessoas tem. Essa vivência transformou a minha perspetiva, inclusive sobre o tema da 'Manifestação'. Antes, tendia a achar que a maioria das pessoas queria apenas aparecer ou chamar a atenção. No entanto, compreendi que há quem passe genuinamente por isso e cheguei a uma conclusão importante: O facto de alguém não manifestar visualmente não significa que o demónio não o possa estar a usar de outras formas. Infelizmente, desde que entrei para a Universidade, a gestão do tempo tornou-se um desafio. Devido à intensa carga horária semanal, precisei de reajustar o meu foco: hoje, mais do que priorizar o 'setor da intercessão', priorizo o meu relacionamento direto com Deus. Ainda assim, sinto falta daquela intensidade inicial e o meu grande anseio atual é reorganizar-me para voltar ao meu 'prime' espiritual.",
      avatar: "CF",
      color: "border-brand-blue text-brand-blue",
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
