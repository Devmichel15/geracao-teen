import React from "react";
import { ArrowUp } from "lucide-react";

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const TiktokIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  const socialLinks = [
    { name: "Instagram", href: "#", icon: InstagramIcon, color: "hover:text-brand-pink hover:border-brand-pink" },
    { name: "YouTube", href: "#", icon: YoutubeIcon, color: "hover:text-red-500 hover:border-red-500" },
    { name: "TikTok", href: "#", icon: TiktokIcon, color: "hover:text-brand-blue hover:border-brand-blue" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0F0F1D] border-t-4 border-black py-16 px-6 overflow-hidden">
      {/* Background stencil */}
      <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 font-boogaloo text-7xl sm:text-[130px] leading-none text-slate-800/10 pointer-events-none select-none tracking-widest whitespace-nowrap z-0">
        APAIXONADOS POR CRISTO
        JESUS É O CAMINHO
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Top brand part */}
        <div className="flex flex-col items-center mb-8">
          <span className="font-boogaloo text-4xl sm:text-5xl text-white tracking-widest">
            GERAÇÃO <span className="text-brand-pink">TEEN</span>
          </span>
          <p className="font-nunito text-sm text-slate-500 mt-2 uppercase tracking-widest">
            — Ministério Cristão Jovem —
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                className={`w-12 h-12 rounded-md border-2 border-slate-700 text-slate-400 bg-brand-dark flex items-center justify-center transition-all duration-300 active:scale-95 hover:shadow-[3px_3px_0px_#000] hover:-translate-y-[2px] ${social.color}`}
                aria-label={social.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Footer Nav Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
          <a
            href="#quem-somos"
            className="font-nunito text-xs uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
          >
            Quem Somos
          </a>
          <a
            href="#missao"
            className="font-nunito text-xs uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
          >
            Missão
          </a>
          <a
            href="#versiculos"
            className="font-nunito text-xs uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
          >
            Versículos
          </a>
          <a
            href="#galeria"
            className="font-nunito text-xs uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
          >
            Galeria
          </a>
          <a
            href="#lideranca"
            className="font-nunito text-xs uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
          >
            Liderança
          </a>
          <a
            href="#como-funciona"
            className="font-nunito text-xs uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
          >
            Como Funciona
          </a>
          <a
            href="#depoimentos"
            className="font-nunito text-xs uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
          >
            Depoimentos
          </a>
        </nav>

        {/* Scroll back to top */}
        <button
          onClick={scrollToTop}
          className="mb-8 p-3 bg-brand-dark text-slate-400 hover:text-brand-pink border-2 border-black rounded-md shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-y-[3px] transition-all cursor-pointer"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* Legal & copyright */}
        <div className="text-center font-nunito text-xs text-slate-600 border-t border-slate-800/80 pt-8 w-full max-w-md">
          <p>
            © {new Date().getFullYear()} Geração Teen. Todos os direitos
            reservados.
          </p>
          <p className="mt-1">
            Feito com paixão, estilo urbano e fé em Cristo.
          </p>
        </div>
      </div>
    </footer>
  );
}
