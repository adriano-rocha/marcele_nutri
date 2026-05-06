// src/components/home/Sobre.tsx
import { FT, FB, NOME } from "../../data/nutriData";

const credenciais = [
  "Formada há mais de 10 anos com aperfeiçoamento em Nutrição Aplicada ao Consultório e Interpretação de Exames Bioquímicos pela Escola de Nutrição Aplicada",
  "Atendimento Online para todo o Brasil",
  "Nutricionista com atuação em emagrecimento e nutrição clínica da mulher",
];

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="py-24"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ ...FB, color: "#5e8c6a" }}
          >
            Sobre mim
          </p>

          <h2
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ ...FT, color: "#372b2e" }}
          >
            Por trás de cada plano,
          </h2>

          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ ...FT, color: "#d18e8f", fontStyle: "italic" }}
          >
            existe um olhar individual.
          </h2>

          <hr className="w-16 mb-6" style={{ borderColor: "#d18e8f" }} />

          <p
            className="text-lg leading-relaxed mb-4"
            style={{ ...FB, color: "#372b2e" }}
          >
            Sou <strong>Marcele Asevedo</strong>, nutricionista com atuação
            voltada para <strong>saúde da mulher e emagrecimento sem restrições</strong>.
            Atendo de forma online, com foco em um acompanhamento próximo e personalizado.
          </p>

          <p
            className="text-lg leading-relaxed mb-4"
            style={{ ...FB, color: "#372b2e" }}
          >
            Acredito em uma nutrição possível — sem extremismos e sem padrões inalcançáveis.
            Um cuidado que se adapta à sua rotina e promove resultados consistentes ao longo do tempo.
          </p>

          <p
            className="text-lg leading-relaxed mb-8"
            style={{ ...FB, color: "#372b2e" }}
          >
            Com base na ciência e em constante atualização, desenvolvo estratégias pensadas
            para você, respeitando sua individualidade em cada etapa do processo.
          </p>

          <ul className="space-y-3 mb-8">
            {credenciais.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3"
                style={{ ...FB, color: "#372b2e" }}
              >
                <span className="font-bold mt-0.5" style={{ color: "#5e8c6a" }}>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#planos"
            className="btn-outline-rose px-8 py-3 rounded-full font-semibold inline-flex items-center"
            style={FB}
          >
            Ver planos
          </a>
        </div>

        <div className="relative">
          <div
            className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
            style={{ backgroundColor: "#d8dad6" }}
          />
          <img
            src="/images/mah_06.jpeg"
            alt={`Nutricionista ${NOME}`}
            className="relative rounded-2xl w-full h-96 object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}