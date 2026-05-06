// src/components/home/Servicos.tsx
import { FT, FB, inclusos } from '../../data/nutriData';

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="py-16 md:py-24"
      style={{ backgroundColor: "#d8dad6" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ ...FB, color: "#5e8c6a" }}
          >
            O que está incluído
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-2"
            style={{ ...FT, color: "#372b2e" }}
          >
            Um acompanhamento completo,
          </h2>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ ...FT, color: "#d18e8f", fontStyle: "italic" }}
          >
            não só uma dieta.
          </h2>
          <p
            className="mt-6 text-lg max-w-xl mx-auto"
            style={{ ...FB, color: "#372b2e" }}
          >
            Aqui, você recebe suporte em todas as etapas, com estratégia, 
            personalização e foco em resultados que você consegue manter.
          </p>
          <hr
            className="w-16 mx-auto mt-8"
            style={{ borderColor: "#d18e8f" }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {inclusos.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 bg-white border border-[#d8dad6] hover:-translate-y-1"
            >
              <div className="text-4xl mb-5">{item.icon}</div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ ...FT, color: "#d18e8f" }}
              >
                {item.titulo}
              </h3>
              <p
                className="leading-relaxed text-[15px]"
                style={{ ...FB, color: "#372b2e" }}
              >
                {item.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}