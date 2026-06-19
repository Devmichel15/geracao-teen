import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Send, CheckCircle } from "lucide-react";

export default function ConviteFinal() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    interest: "conexao",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp) return;

    // Trigger canvas confetti explosion
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      // Confetti shooting from left and right
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#F665BE", "#84C1F6", "#ffffff"],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#F665BE", "#84C1F6", "#ffffff"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    setSubmitted(true);
  };

  return (
    <section
      id="convite-final"
      className="relative min-h-screen w-full bg-brand-dark bg-dark-grid py-24 px-6 overflow-hidden flex flex-col justify-center bg-grunge-overlay"
    >
      {/* Decorative graffiti elements */}
      <div className="absolute top-[20%] left-[-5%] font-boogaloo text-9xl text-brand-pink/5 select-none -rotate-12 pointer-events-none">
        RISE UP
      </div>
      <div className="absolute bottom-[20%] right-[-5%] font-boogaloo text-9xl text-brand-blue/5 select-none rotate-12 pointer-events-none">
        BE THE LIGHT
      </div>

      <div className="max-w-4xl mx-auto w-full z-10">
        {/* Main Flyer Box */}
        <div className="relative bg-[#25253A]/70 border-3 border-black rounded-lg p-8 md:p-12 backdrop-blur-md shadow-[8px_8px_0px_#000] overflow-hidden">
          
          {/* Neon side lines */}
          <div className="absolute top-0 bottom-0 left-0 w-2 bg-brand-pink" />
          <div className="absolute top-0 bottom-0 right-0 w-2 bg-brand-blue" />
          
          <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-yellow-400 rotate-45 border-b-2 border-black flex items-end justify-center pb-2 pointer-events-none shadow-[2px_2px_0px_rgba(0,0,0,0.15)] z-25">
            <span className="font-boogaloo text-brand-dark text-lg tracking-wider -rotate-45 mb-1 font-bold">
              JOIN!
            </span>
          </div>

          {!submitted ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Flyer CTA text */}
              <div className="lg:col-span-6">
                <span className="font-fredoka font-bold text-xs uppercase tracking-widest text-brand-pink mb-2 block">
                  Faça Parte do Movimento
                </span>
                <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-white tracking-tight leading-none mb-6">
                Faz Parte do Movimento!
              </h2>
              <p className="font-nunito text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                Preenche o formulário e entraremos em contacto contigo por WhatsApp em menos de 24 horas para te integrar no grupo de discípulos mais próximo da tua área!
              </p>
              <div className="flex flex-col gap-2 font-nunito text-xs text-slate-400">
                <p>✔ Encontros semanais de louvor e Palavra</p>
                <p>✔ Grupos de discípulos biológicos próximos de ti</p>
                <p>✔ Retiros espirituais e formação em liderança</p>
              </div>
              </div>

              {/* Flyer Form */}
              <form onSubmit={handleSubmit} className="lg:col-span-6 space-y-5">
                <div>
                  <label htmlFor="name" className="block font-fredoka font-semibold text-sm text-slate-300 mb-2">
                    Teu Nome ou Apelido
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Matheus (Mata)"
                    className="w-full px-4 py-3 rounded-md bg-brand-dark border-2 border-slate-700 text-white font-nunito placeholder-slate-500 focus:outline-none focus:border-brand-pink focus:shadow-[2px_2px_0px_#F665BE] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block font-fredoka font-semibold text-sm text-slate-300 mb-2">
                    Teu WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="Ex: 920 000 000"
                    className="w-full px-4 py-3 rounded-md bg-brand-dark border-2 border-slate-700 text-white font-nunito placeholder-slate-500 focus:outline-none focus:border-brand-blue focus:shadow-[2px_2px_0px_#84C1F6] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block font-fredoka font-semibold text-sm text-slate-300 mb-2">
                    O que mais te atrai?
                  </label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-brand-dark border-2 border-slate-700 text-white font-nunito focus:outline-none focus:border-purple-400 focus:shadow-[2px_2px_0px_#c084fc] transition-all cursor-pointer"
                  >
                    <option value="discipulado">Grupos de Discípulos</option>
                    <option value="louvor">Ministério de Louvor</option>
                    <option value="intercessao">Intercessão e Oração</option>
                    <option value="evangelismo">Evangelismo</option>
                    <option value="servico">Serviço e Apoio Comunitário</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 font-boogaloo text-2xl tracking-wider text-brand-dark bg-brand-pink hover:bg-brand-blue border-3 border-black rounded-sm shadow-[4px_4px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  QUERO FAZER PARTE!
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          ) : (
            /* Success State */
            <div className="text-center py-12 flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-blue/10 border-2 border-brand-blue text-brand-blue rounded-full flex items-center justify-center mb-6 animate-bounce">
                <CheckCircle className="w-12 h-12" />
              </div>
              <h2 className="font-boogaloo text-5xl text-brand-pink tracking-wider text-spray-pink mb-4">
                BEM-VINDO AO MINISTÉRIO!
              </h2>
              <p className="font-fredoka font-semibold text-xl text-white mb-6">
                Que alegria, {formData.name}! A tua inscrição foi recebida com sucesso.
              </p>
              <p className="max-w-md font-nunito text-slate-300 leading-relaxed">
                Guardamos o teu WhatsApp <strong>{formData.whatsapp}</strong>. Nas próximas horas, um dos nossos líderes entrará em contacto contigo para te dar as boas-vindas e partilhar os detalhes do próximo encontro!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 px-6 py-2.5 font-boogaloo text-lg tracking-wider text-white hover:text-brand-pink border-2 border-white/20 hover:border-brand-pink rounded-sm transition-all"
              >
                ENVIAR OUTRO CONTATO
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
