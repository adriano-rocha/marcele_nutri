// src/components/home/Antropometria.tsx
'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { FT, FB, antropometria } from '../../data/nutriData';

export default function Antropometria() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const slide = slider.children[index] as HTMLElement;
    slider.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
    setActiveIndex(index);
  };

  const prev = () => scrollTo(Math.max(activeIndex - 1, 0));
  const next = () => scrollTo(Math.min(activeIndex + 1, antropometria.length - 1));

  return (
    <section
      id="antropometria"
      className="py-16 md:py-24"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Cabeçalho */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ ...FB, color: "#5e8c6a" }}
          >
            Avaliação
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ ...FT, color: "#d18e8f" }}
          >
            Avaliação Antropométrica
          </h2>
          <p
            className="mt-6 text-lg max-w-xl mx-auto"
            style={{ ...FB, color: "#372b2e" }}
          >
            Mesmo à distância, acompanhamos sua evolução de forma clara e baseada em dados.
          </p>
          <hr
            className="w-16 mx-auto mt-8"
            style={{ borderColor: "#d18e8f" }}
          />
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center mb-14 rounded-2xl p-8"
          style={{ backgroundColor: "#d8dad622", border: "1px solid #d18e8f22" }}>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/antropometria.png"
              alt="Guia de como tirar suas medidas corporais"
              width={480}
              height={360}
              className="rounded-xl object-contain w-full max-w-sm md:max-w-full"
              priority
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ ...FB, color: "#5e8c6a" }}
            >
              Como tirar suas medidas
            </p>
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ ...FT, color: "#d18e8f" }}
            >
              Guia prático para acompanhar sua evolução
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Cintura", desc: "Em posição ereta, meça com a fita métrica no local onde sua cintura é mais fina." },
                { label: "Abdômen", desc: "Em posição ereta, meça com a fita métrica na região umbilical." },
                { label: "Quadril", desc: "Em posição ereta com os pés juntos, meça em volta do ponto mais proeminente." },
                { label: "Coxa", desc: "Localize o ponto médio entre o quadril e o joelho e meça a circunferência nesse ponto." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                    style={{ backgroundColor: "#d18e8f" }}
                  >
                    ✓
                  </span>
                  <p className="text-sm leading-relaxed" style={{ ...FB, color: "#372b2e" }}>
                    <strong>{item.label}:</strong> {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile: Slider com setas e dots */}
        <div className="flex md:hidden flex-col gap-4">
          <div className="flex items-center gap-3">
            
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: "#d18e8f",
                color: "#ffffff",
                opacity: activeIndex === 0 ? 0.3 : 1,
                border: "none",
                cursor: activeIndex === 0 ? "default" : "pointer",
                fontSize: "1.25rem",
              }}
              aria-label="Anterior"
            >
              ‹
            </button>
            
            <div
              ref={sliderRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory flex-1"
              style={{ scrollbarWidth: 'none' }}
            >
              {antropometria.map((texto, i) => (
                <div
                  key={i}
                  className="min-w-full snap-start rounded-2xl p-8 bg-white border border-[#d18e8f33]"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-6 text-white font-bold text-sm"
                    style={{ backgroundColor: "#d18e8f" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="leading-relaxed text-[15px]" style={{ ...FB, color: "#372b2e" }}>
                    {texto}
                  </p>
                </div>
              ))}
            </div>
            
            <button
              onClick={next}
              disabled={activeIndex === antropometria.length - 1}
              className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: "#d18e8f",
                color: "#ffffff",
                opacity: activeIndex === antropometria.length - 1 ? 0.3 : 1,
                border: "none",
                cursor: activeIndex === antropometria.length - 1 ? "default" : "pointer",
                fontSize: "1.25rem",
              }}
              aria-label="Próximo"
            >
              ›
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-2">
            {antropometria.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Slide ${i + 1}`}
                style={{
                  width: activeIndex === i ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  backgroundColor: activeIndex === i ? '#d18e8f' : '#d18e8f55',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
          {antropometria.map((texto, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 bg-white shadow-sm border border-[#d18e8f33] hover:shadow-md transition-shadow"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-6 text-white font-bold text-sm"
                style={{ backgroundColor: "#d18e8f" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="leading-relaxed text-[15px]" style={{ ...FB, color: "#372b2e" }}>
                {texto}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}