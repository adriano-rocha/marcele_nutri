// src/components/home/Planos.tsx
import { FT, FB, planos, WHATSAPP_LINK } from "../../data/nutriData";

export default function Planos() {
  return (
    <section
      id="planos"
      className="py-16 md:py-24"
      style={{ backgroundColor: "#d8dad6" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ ...FB, color: "#5e8c6a" }}
          >
            Comece hoje
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ ...FT, color: "#d18e8f" }}
          >
            Escolha seu plano
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ ...FB, color: "#372b2e" }}
          >
            Sua transformação começa com uma decisão. Escolha seu plano e, em
            até 48h, você recebe um plano alimentar pensado para a sua rotina.
          </p>
          <hr
            className="w-16 mx-auto mt-8"
            style={{ borderColor: "#d18e8f" }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 items-start">
          {planos.map((plano, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 md:p-10 bg-white shadow-sm transition-all duration-300 hover:shadow-xl ${
                plano.destaque ? "plano-destaque scale-105 md:scale-110" : ""
              }`}
              style={{ border: "1px solid #d8dad6" }}
            >
              {plano.destaque && (
                <div className="text-center mb-6">
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full text-white"
                    style={{ backgroundColor: "#d18e8f" }}
                  >
                    Mais escolhido
                  </span>
                </div>
              )}

              <h3
                className="text-2xl font-bold mb-1"
                style={{ ...FT, color: "#372b2e" }}
              >
                {plano.nome}
              </h3>

              {plano.media && (
                <p className="text-sm mb-2" style={{ ...FB, color: "#5e8c6a" }}>
                  {plano.media}
                </p>
              )}

              <p
                className="text-4xl md:text-5xl font-bold mb-1"
                style={{ ...FT, color: "#d18e8f" }}
              >
                {plano.preco}
              </p>
              <p className="text-sm mb-8" style={{ ...FB, color: "#372b2e" }}>
                {plano.periodo}
              </p>

              <ul className="space-y-4 mb-10">
                {plano.itens.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[15px]"
                    style={{ ...FB, color: "#372b2e" }}
                  >
                    <span style={{ color: "#5e8c6a" }}>✓</span> {item}
                  </li>
                ))}
                {plano.obs && (
                  <li
                    className="flex items-start gap-2 text-sm pt-4 border-t"
                    style={{ ...FB, color: "#d18e8f" }}
                  >
                    <span>✕</span> {plano.obs}
                  </li>
                )}
              </ul>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-4 rounded-full font-semibold text-base transition-all hover:scale-105 ${
                  plano.destaque ? "btn-green" : "btn-outline-rose"
                }`}
                style={FB}
              >
                Escolher plano
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
