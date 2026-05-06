// src/components/home/Hero.tsx
import { FT, FB, WHATSAPP_LINK, CRN, NOME } from "../../data/nutriData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#372b2e" }}
    >
      {/* Mobile image */}
      <img
        src="/images/mah_01.jpeg"
        alt={NOME}
        className="w-full md:hidden h-[280px] object-cover object-center"
      />

      {/* Desktop image with mask */}
      <img
        src="/images/mah_01.jpeg"
        alt={NOME}
        className="hidden md:block absolute right-0 bottom-0 h-full w-auto max-w-[45%] object-cover object-top"
        style={{
          maskImage: "linear-gradient(to left, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 60%, transparent 100%)",
        }}
      />

      {/* Overlay gradient */}
      <div
        className="hidden md:block absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to right, #372b2e 50%, #372b2ecc 75%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-40 flex flex-col justify-center md:min-h-[85vh]">
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-3"
          style={{ ...FB, color: "#5e8c6a" }}
        >
          {CRN}
        </p>

        <h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-4"
          style={{ ...FT, color: "#d8dad6" }}
        >
          Nutrição que funciona
          <br />
          <span style={{ color: "#d18e8f", fontStyle: "italic" }}>
            na sua rotina.
          </span>
        </h1>

        <h2
          className="text-2xl md:text-3xl font-bold mb-6"
          style={{ ...FT, color: "#d8dad6" }}
        >
          Resultado que você consegue manter.
        </h2>

        <p
          className="text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          style={{ ...FB, color: "#d8dad6cc" }}
        >
          Acompanhamento personalizado, leve e baseado em ciência — sem dietas restritivas.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
            style={FB}
          >
            Quero iniciar agora →
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light px-8 py-4 rounded-full text-lg font-semibold"
            style={FB}
          >
            💬 Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}