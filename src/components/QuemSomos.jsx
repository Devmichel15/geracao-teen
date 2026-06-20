import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { History, Eye, Target, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function QuemSomos() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId;
    let strokeIndex = 0;
    let pointIndex = 0;
    let currentX = 0;
    let currentY = 0;
    let isPainting = false;
    let drips = [];

    // Scale canvas for resolution
    canvas.width = 450;
    canvas.height = 450;

    // Define graffiti coordinates for "GT" in a stylized wildstyle script
    const strokes = [
      // 'G' outline
      [
        { x: 180, y: 150 },
        { x: 140, y: 140 },
        { x: 100, y: 160 },
        { x: 80, y: 220 },
        { x: 90, y: 280 },
        { x: 130, y: 320 },
        { x: 180, y: 310 },
        { x: 200, y: 260 },
        { x: 150, y: 260 },
      ],
      // 'G' accent line
      [
        { x: 100, y: 220 },
        { x: 150, y: 220 },
      ],
      // 'T' top bar
      [
        { x: 220, y: 160 },
        { x: 280, y: 150 },
        { x: 350, y: 170 },
      ],
      // 'T' stem
      [
        { x: 280, y: 160 },
        { x: 290, y: 220 },
        { x: 295, y: 280 },
        { x: 270, y: 320 },
        { x: 240, y: 310 },
      ],
      // Cross splash
      [
        { x: 80, y: 300 },
        { x: 360, y: 200 },
      ]
    ];

    const drawSprayBrush = (context, x, y, radius, color) => {
      context.save();
      context.fillStyle = color;
      
      // Paint concentration
      for (let i = 0; i < 35; i++) {
        const angle = Math.random() * Math.PI * 2;
        // Distribute dots heavier towards the center
        const dist = Math.pow(Math.random(), 2.2) * radius;
        const dotX = x + Math.cos(angle) * dist;
        const dotY = y + Math.sin(angle) * dist;
        const size = Math.random() * 2 + 0.5;
        
        context.globalAlpha = Math.max(0.08, 1 - (dist / radius));
        context.beginPath();
        context.arc(dotX, dotY, size, 0, Math.PI * 2);
        context.fill();
      }
      context.restore();
    };

    // Drips that slowly flow down the wall
    class Drip {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.length = Math.random() * 40 + 15;
        this.currentLength = 0;
        this.speed = Math.random() * 0.5 + 0.2;
        this.width = Math.random() * 2.5 + 1;
        this.color = color;
      }

      update() {
        if (this.currentLength < this.length) {
          this.currentLength += this.speed;
          return true;
        }
        return false;
      }

      draw(context) {
        context.save();
        context.fillStyle = this.color;
        context.globalAlpha = 0.7;
        context.beginPath();
        context.arc(this.x, this.y + this.currentLength, this.width, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    const startPainting = () => {
      isPainting = true;
      strokeIndex = 0;
      pointIndex = 0;
      if (strokes.length > 0 && strokes[0].length > 0) {
        currentX = strokes[0][0].x;
        currentY = strokes[0][0].y;
      }
      paintStep();
    };

    const paintStep = () => {
      if (!isPainting) return;

      const currentStroke = strokes[strokeIndex];
      const targetPoint = currentStroke[pointIndex];

      // Move toward target point
      const dx = targetPoint.x - currentX;
      const dy = targetPoint.y - currentY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const stepSpeed = 4.5; // speed of spray can

      const color = strokeIndex === 4 ? "#84C1F6" : "#F665BE"; // Pink for GT, Blue for highlight splash

      if (distance > stepSpeed) {
        currentX += (dx / distance) * stepSpeed;
        currentY += (dy / distance) * stepSpeed;
        
        drawSprayBrush(ctx, currentX, currentY, 14, color);

        // Occasional drip spawn
        if (Math.random() < 0.04) {
          drips.push(new Drip(currentX, currentY, color));
        }
      } else {
        // Arrived at node point, move to next point
        pointIndex++;
        if (pointIndex >= currentStroke.length) {
          // Move to next stroke
          strokeIndex++;
          if (strokeIndex < strokes.length) {
            pointIndex = 0;
            currentX = strokes[strokeIndex][0].x;
            currentY = strokes[strokeIndex][0].y;
          } else {
            isPainting = false; // completed painting!
          }
        }
      }

      // Update and draw drips
      drips.forEach((drip) => {
        drip.update();
        drip.draw(ctx);
      });

      if (isPainting || drips.some(d => d.currentLength < d.length)) {
        animFrameId = requestAnimationFrame(paintStep);
      }
    };

    // GSAP ScrollTrigger to start the canvas painting when visible
    ScrollTrigger.create({
      trigger: canvas,
      start: "top 75%",
      onEnter: () => {
        if (!isPainting && strokeIndex === 0) {
          startPainting();
        }
      },
      onLeaveBack: () => {
        // Reset canvas if scrolled back up completely
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        isPainting = false;
        strokeIndex = 0;
        pointIndex = 0;
        drips = [];
      }
    });

    // Animate text reveal
    gsap.fromTo(
      textRef.current.querySelectorAll(".reveal-item"),
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
        },
      }
    );

    return () => {
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="quem-somos"
      className="relative min-h-screen w-full bg-brand-dark py-24 px-6 overflow-hidden bg-halftone-dots"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Graffiti Canvas Side */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          {/* Concrete frame backdrop */}
          <div className="relative p-6 bg-[#25253A] border-4 border-black rounded-lg shadow-[8px_8px_0px_#000] overflow-hidden max-w-full">
            
            {/* Spray paint splatter texture on card */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-pink via-brand-blue to-transparent pointer-events-none" />
            
            {/* The Concrete Brick styling */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-grunge-overlay" />
            
            <canvas
              ref={canvasRef}
              className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] aspect-square rounded bg-[#181827] border-2 border-black/40 shadow-inner"
            />
            
            {/* Indicator label */}
            <div className="absolute bottom-2 right-4 text-xs font-nunito font-semibold tracking-wider text-slate-500 z-20 flex items-center gap-1 select-none">
              <Sparkles className="w-3.5 h-3.5 text-brand-pink" /> 
              ARTE PARA A GLÓRIA DE DEUS
            </div>
          </div>
          
          {/* Decorative stencil text */}
          <div className="absolute -top-6 -left-6 font-boogaloo text-7xl text-brand-pink/20 select-none -rotate-12 pointer-events-none">
            JESUS
          </div>
        </div>

        {/* Story & Content Side */}
        <div ref={textRef} className="lg:col-span-7 flex flex-col justify-center">
          <span className="reveal-item font-fredoka font-bold text-xs uppercase tracking-widest text-brand-blue mb-2">
            Nossa História
          </span>
          <h2 className="reveal-item font-fredoka font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
            Quem Somos Nós?
          </h2>
          
          <p className="reveal-item font-nunito text-lg text-slate-300 mb-8 leading-relaxed">
            Nascemos do coração de jovens apaixonados por Deus que desejam viver a fé de forma real e profunda. A <strong>Geração Teen</strong> é um espaço de comunhão, crescimento espiritual e discipulado. Acreditamos que Deus tem um propósito poderoso para cada adolescente e que juntos podemos ser instrumentos do Espírito Santo.
          </p>

          {/* Grid of details: Vision / Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="reveal-item p-5 bg-[#25253A]/40 border-l-4 border-brand-pink rounded-r-md backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-fredoka font-bold text-lg text-white">Nossa Visão</h3>
              </div>
              <p className="font-nunito text-sm text-slate-300 leading-relaxed">
                Ser referência em discipulado pentecostal, mostrando que adolescentes podem sim liderar um avivamento autêntico, cheio do Espírito Santo e da Palavra de Deus.
              </p>
            </div>

            <div className="reveal-item p-5 bg-[#25253A]/40 border-l-4 border-brand-blue rounded-r-md backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-fredoka font-bold text-lg text-white">Nossos Valores</h3>
              </div>
              <p className="font-nunito text-sm text-slate-300 leading-relaxed">
                Amizade genuína, verdade bíblica, oração fervorosa, louvor ao Senhor, acolhimento incondicional e amor a Jesus Cristo acima de tudo.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
