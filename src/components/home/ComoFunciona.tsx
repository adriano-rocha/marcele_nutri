// src/components/home/ComoFunciona.tsx
import { FT, FB, passos } from '../../data/nutriData';

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="py-16 md:py-24"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ ...FB, color: "#5e8c6a" }}
          >
            Como funciona
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ ...FT, color: "#d18e8f" }}
          >
            Do clique ao seu plano personalizado
          </h2>
          <hr
            className="w-16 mx-auto mt-8"
            style={{ borderColor: "#d18e8f" }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {passos.map((passo, index) => (
            <div key={index} className="text-center group">
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-2xl font-bold transition-transform group-hover:scale-110"
                style={{ ...FT, backgroundColor: "#d18e8f" }}
              >
                {passo.num}
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ ...FT, color: "#372b2e" }}
              >
                {passo.titulo}
              </h3>
              <p
                className="text-[15px] leading-relaxed px-4"
                style={{ ...FB, color: "#372b2e" }}
              >
                {passo.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}