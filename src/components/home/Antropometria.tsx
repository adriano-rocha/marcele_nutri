// src/components/home/Antropometria.tsx
import { FT, FB, antropometria } from '../../data/nutriData';

export default function Antropometria() {
  return (
    <section
      id="antropometria"
      className="py-16 md:py-24"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-5xl mx-auto px-6">
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

        {/* Mobile: Slider horizontal */}
        <div className="antro-slider flex md:hidden gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
          {antropometria.map((texto, i) => (
            <div
              key={i}
              className="antro-slide min-w-[85%] snap-start rounded-2xl p-8 bg-white border border-[#d18e8f33]"
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

        {/* Desktop: Grid */}
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

        {/* Instrução para mobile */}
        <p
          className="text-center text-xs mt-6 md:hidden text-[#5e8c6a]"
          style={FB}
        >
          ← Deslize para ver mais →
        </p>
      </div>
    </section>
  );
}