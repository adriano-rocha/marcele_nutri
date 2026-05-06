// src/components/home/CTA.tsx
import { FT, FB, WHATSAPP_LINK } from "../../data/nutriData";

export default function CTA() {
  return (
    <section
      id="contato"
      className="py-32 text-center"
      style={{ backgroundColor: "#372b2e" }}
    >
      <div className="max-w-2xl mx-auto px-6">
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-4"
          style={{ ...FB, color: "#5e8c6a" }}
        >
          Dê o primeiro passo
        </p>

        <h2
          className="text-3xl md:text-5xl font-bold mb-4"
          style={{ ...FT, color: "#d18e8f" }}
        >
          Pronta para transformar sua relação com a comida?
        </h2>

        <p
          className="text-lg mb-10"
          style={{ ...FB, color: "#d8dad6" }}
        >
          O primeiro passo é o mais importante. Escolha seu plano e em menos
          de 48h você já tem seu plano alimentar personalizado.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green px-10 py-4 rounded-full text-lg font-semibold shadow-xl"
            style={FB}
          >
            Quero iniciar agora →
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light px-10 py-4 rounded-full text-lg font-semibold"
            style={FB}
          >
            💬 Falar antes de decidir
          </a>
        </div>
      </div>
    </section>
  );
}