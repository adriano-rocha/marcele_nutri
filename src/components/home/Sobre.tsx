// src/components/home/Sobre.tsx
import Image from "next/image";
import { FT, FB, NOME } from "../../data/nutriData";

const credenciais = [
  "Formada há mais de 10 anos com aperfeiçoamento em Nutrição Aplicada ao Consultório e Interpretação de Exames Bioquímicos pela Escola de Nutrição Aplicada",
  "Atendimento Online para todo o Brasil",
  "Nutricionista com atuação em emagrecimento e nutrição clínica da mulher",
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="mx-auto grid max-w-5xl items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-widest"
            style={{ ...FB, color: "#5e8c6a" }}
          >
            Sobre mim
          </p>

          <h2
            className="mb-2 text-3xl font-bold md:text-4xl"
            style={{ ...FT, color: "#372b2e" }}
          >
            Por trás de cada plano,
          </h2>

          <h2
            className="mb-6 text-3xl font-bold italic md:text-4xl"
            style={{ ...FT, color: "#d18e8f" }}
          >
            existe um olhar individual.
          </h2>

          <hr className="mb-6 w-16 border-[#d18e8f]" />

          <p className="mb-4 text-lg leading-relaxed" style={{ ...FB, color: "#372b2e" }}>
            Sou <strong>Marcele Asevedo</strong>, nutricionista com atuação voltada para{" "}
            <strong>saúde da mulher e emagrecimento sem restrições</strong>. Atendo de forma online,
            com foco em um acompanhamento próximo e personalizado.
          </p>

          <p className="mb-4 text-lg leading-relaxed" style={{ ...FB, color: "#372b2e" }}>
            Acredito em uma nutrição possível — sem extremismos e sem padrões inalcançáveis.
            Um cuidado que se adapta à sua rotina e promove resultados consistentes ao longo do tempo.
          </p>

          <p className="mb-8 text-lg leading-relaxed" style={{ ...FB, color: "#372b2e" }}>
            Com base na ciência e em constante atualização, desenvolvo estratégias pensadas para você,
            respeitando sua individualidade em cada etapa do processo.
          </p>

          <ul className="mb-8 space-y-3">
            {credenciais.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3"
                style={{ ...FB, color: "#372b2e" }}
              >
                <span className="mt-0.5 font-bold" style={{ color: "#5e8c6a" }}>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#planos"
            className="btn-outline-rose inline-flex items-center rounded-full px-8 py-3 font-semibold"
            style={FB}
          >
            Ver planos
          </a>
        </div>

        <div className="relative">
          <div
            className="absolute -left-4 -top-4 h-full w-full rounded-2xl"
            style={{ backgroundColor: "#d8dad6" }}
          />
          <div className="relative h-120 w-full overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/marcele_02.jpeg"
              alt={`Nutricionista ${NOME}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}