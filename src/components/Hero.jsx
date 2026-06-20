import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const ctaRef = useRef(null);

  // Canvas particle simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const particleCount = 40;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height + canvas.height; // start below screen
        this.size = Math.random() * 3 + 1;
        this.speedY = -(Math.random() * 1.5 + 0.5);
        this.speedX = Math.random() * 1 - 0.5;
        this.alpha = Math.random() * 0.5 + 0.2;
        this.color = Math.random() > 0.5 ? "#F665BE" : "#84C1F6";
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        
        // Wrap around top/sides
        if (this.y < 0) {
          this.y = canvas.height;
          this.x = Math.random() * canvas.width;
        }
        if (this.x < 0 || this.x > canvas.width) {
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // GSAP animations for text reveal
  useEffect(() => {
    // Staggered text reveal animation
    const timeline = gsap.timeline();
    
    // Split the headline text for a word-by-word reveal
    const headline = headlineRef.current;
    if (headline) {
      const words = headline.innerText.split(" ");
      headline.innerHTML = words
        .map((word) => `<span class="inline-block translate-y-[100%] opacity-0 mr-3">${word}</span>`)
        .join("");

      timeline.to(headline.querySelectorAll("span"), {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
      });
    }

    if (subheadlineRef.current) {
      timeline.fromTo(
        subheadlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );
    }

    if (ctaRef.current) {
      timeline.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.3"
      );
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen mt-10 w-full bg-brand-dark bg-dark-grid flex items-center justify-center overflow-hidden px-6 pt-20 pb-12 bg-grunge-overlay"
    >
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Decorative Urban elements */}
      <div className="absolute top-1/4 -left-12 w-64 h-64 bg-brand-pink/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-12 w-80 h-80 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Distress Spray overlay (represented with styled divs) */}
      <div className="absolute top-[20%] right-[10%] opacity-20 pointer-events-none select-none font-boogaloo text-9xl text-brand-pink/10 rotate-12">
        FAITH
      </div>
      <div className="absolute bottom-[20%] left-[5%] opacity-20 pointer-events-none select-none font-boogaloo text-9xl text-brand-blue/10 -rotate-12">
        HOPE
      </div>

      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <div className="mb-6 px-4 py-1.5 border-2 border-brand-pink text-brand-pink font-fredoka font-semibold text-xs uppercase tracking-widest rounded-full bg-brand-pink/5 backdrop-blur-sm animate-pulse">
          #GeraçãoParaCristo
        </div>

        {/* Big Stencil Styled Geração Teen Logo/Text */}
        <h2 className="mb-2 font-boogaloo text-5xl md:text-7xl text-slate-400 select-none text-stencil tracking-wider">
          MOVIMENTO JOVEM
        </h2>

        {/* Headline with GSAP Word Reveal */}
        <h1
          ref={headlineRef}
          className="font-fredoka font-bold text-4xl sm:text-6xl md:text-8xl text-white mb-6 leading-none"
        >
          Uma geração apaixonada <br /> por Cristo.
        </h1>

        {/* Subheadline explaining the mission */}
        <p
          ref={subheadlineRef}
          className="max-w-2xl font-nunito text-lg md:text-xl text-slate-300 mb-10 leading-relaxed"
        >
          Não somos apenas mais um grupo de jovens. Somos um movimento que vive o amor de Cristo de forma real, intensa e transformadora. Prontos para crescer em Deus e impactar o mundo ao redor?
        </p>

        {/* CTA buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#convite-final"
            className="group relative inline-flex items-center gap-2 px-8 py-4 font-boogaloo text-2xl tracking-wider text-brand-dark bg-brand-pink border-3 border-black rounded-sm shadow-[5px_5px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
          >
            QUERO PARTICIPAR
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#quem-somos"
            className="px-8 py-4 font-boogaloo text-2xl tracking-wider text-white hover:text-brand-blue border-3 border-white/20 hover:border-brand-blue rounded-sm transition-all"
          >
            CONHECER O MOVIMENTO
          </a>
        </div>
      </div>

      
    </section>
  );
}
