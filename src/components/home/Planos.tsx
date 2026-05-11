'use client';

import { useState } from 'react';

const FB = { fontFamily: 'var(--font-lato), sans-serif' };
const FT = { fontFamily: 'var(--font-playfair), Georgia, serif' };

const WHATSAPP = "5511914344551";
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de agendar uma consulta.");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP}?text=${WHATSAPP_MSG}`;

const planos = [
  {
    nome: "Mensal",
    destaque: false,
    pix: {
      preco: "R$220",
      label: "à vista · PIX",
      media: null,
      economia: null,
    },
    cartao: {
      preco: "R$230",
      label: "1x no cartão",
      media: null,
      economia: null,
    },
    itens: [
      "1 consulta por videochamada (1h)",
      "Plano alimentar personalizado em até 48h",
      "Avaliação física",
      "Acesso ao app",
      "Suporte via WhatsApp",
    ],
    obs: "Não possui retorno incluso",
  },
  {
    nome: "Trimestral",
    destaque: true,
    pix: {
      preco: "R$550",
      label: "total · 3 meses",
      media: "Média de R$184/consulta",
      economia: null,
    },
    cartao: {
      preco: "R$590",
      label: "total · 3x no cartão",
      media: "R$197/consulta",
      economia: null,
    },
    itens: [
      "3 consultas (1h cada)",
      "Plano alimentar personalizado em até 48h",
      "Avaliação física",
      "Acesso ao app",
      "Suporte via WhatsApp",
      "Acompanhamento contínuo",
    ],
    obs: null,
  },
  {
    nome: "Semestral",
    destaque: false,
    pix: {
      preco: "R$1.000",
      label: "total · 6 meses",
      media: "Média de R$167/consulta",
      economia: null,
    },
    cartao: {
      preco: "R$1.107",
      label: "total · 6x no cartão",
      media: "R$184/consulta",
      economia: null,
    },
    itens: [
      "6 consultas (1h cada)",
      "Plano alimentar personalizado em até 48h",
      "Avaliação física",
      "Acesso ao app",
      "Suporte via WhatsApp",
      "Foco em transformação e resultado duradouro",
    ],
    obs: null,
  },
];

export default function Planos() {
  const [modo, setModo] = useState<'pix' | 'cartao'>('pix');

  return (
    <>
      <style>{`
        .toggle-wrap {
          display: inline-flex;
          border-radius: 9999px;
          padding: 4px;
          gap: 4px;
          background-color: #ffffff;
          border: 1px solid #d8dad6;
        }
        .toggle-btn {
          padding: 8px 24px;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          font-size: 0.875rem;
          transition: background-color 0.2s, color 0.2s;
        }
        .toggle-btn.active {
          background-color: #5e8c6a;
          color: #ffffff;
        }
        .toggle-btn.inactive {
          background-color: transparent;
          color: #372b2e;
        }
        .toggle-btn.inactive:hover {
          background-color: #d8dad6;
        }
        .plano-card {
          border-radius: 16px;
          padding: 32px;
          background: #ffffff;
          border: 1px solid #d8dad6;
          display: flex;
          flex-direction: column;
        }
        .plano-card.destaque {
          border: 2px solid #d18e8f !important;
          position: relative;
        }
        .btn-plano-green {
          display: block;
          text-align: center;
          background-color: #5e8c6a;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 9999px;
          font-weight: 700;
          text-decoration: none;
          transition: background-color 0.2s;
          margin-top: auto;
        }
        .btn-plano-green:hover { background-color: #4a7055; }
        .btn-plano-outline {
          display: block;
          text-align: center;
          border: 2px solid #d18e8f;
          color: #d18e8f;
          background: transparent;
          padding: 12px 24px;
          border-radius: 9999px;
          font-weight: 700;
          text-decoration: none;
          transition: background-color 0.2s, color 0.2s;
          margin-top: auto;
        }
        .btn-plano-outline:hover { background-color: #d18e8f; color: #ffffff; }
      `}</style>

      <section id="planos" className="py-24" style={{ backgroundColor: "#d8dad6" }}>
        <div className="max-w-5xl mx-auto px-6">

          {/* Cabeçalho */}
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ ...FB, color: "#5e8c6a" }}>
              Comece hoje
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ ...FT, color: "#d18e8f" }}>
              Escolha seu plano
            </h2>
            <p className="text-lg max-w-xl mx-auto mb-8" style={{ ...FB, color: "#372b2e" }}>
              Sua transformação começa com uma decisão. Escolha seu plano e, em até 48h, você recebe um plano alimentar pensado para a sua rotina.
            </p>

            {/* Toggle PIX / Cartão */}
            <div className="toggle-wrap">
              <button
                className={`toggle-btn ${modo === 'pix' ? 'active' : 'inactive'}`}
                style={FB}
                onClick={() => setModo('pix')}
              >
                PIX · À Vista
              </button>
              <button
                className={`toggle-btn ${modo === 'cartao' ? 'active' : 'inactive'}`}
                style={FB}
                onClick={() => setModo('cartao')}
              >
                Cartão de Crédito
              </button>
            </div>

            <hr className="w-16 mx-auto mt-8" style={{ borderColor: "#d18e8f" }} />
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {planos.map((plano) => {
              const info = modo === 'pix' ? plano.pix : plano.cartao;
              return (
                <div key={plano.nome} className={`plano-card ${plano.destaque ? 'destaque' : ''}`}>

                  {/* Badge */}
                  {plano.destaque && (
                    <div className="text-center mb-4">
                      <span className="text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full text-white"
                        style={{ backgroundColor: "#d18e8f" }}>
                        Mais popular
                      </span>
                    </div>
                  )}

                  {/* Label plano */}
                  <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ ...FB, color: "#5e8c6a" }}>
                    Plano
                  </p>

                  {/* Nome */}
                  <h3 className="text-2xl font-bold mb-3" style={{ ...FT, color: "#372b2e" }}>
                    {plano.nome}
                  </h3>

                  {/* Preço */}
                  <p className="text-4xl font-bold mb-1" style={{ ...FT, color: "#d18e8f" }}>
                    {info.preco}
                  </p>
                  <p className="text-sm mb-1" style={{ ...FB, color: "#372b2e" }}>
                    {info.label}
                  </p>
                  {info.media && (
                    <p className="text-sm mb-4" style={{ ...FB, color: "#5e8c6a" }}>
                      {info.media}
                    </p>
                  )}

                  <hr className="my-4" style={{ borderColor: "#d8dad6" }} />

                  {/* Itens */}
                  <ul className="space-y-3 mb-6 flex-1">
                    {plano.itens.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ ...FB, color: "#372b2e" }}>
                        <span style={{ color: "#5e8c6a", flexShrink: 0 }}>✓</span> {item}
                      </li>
                    ))}
                    {plano.obs && (
                      <li className="flex items-start gap-2 text-sm" style={{ ...FB, color: "#d18e8f" }}>
                        <span style={{ flexShrink: 0 }}>✕</span> {plano.obs}
                      </li>
                    )}
                  </ul>

                  {/* Botão */}
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={plano.destaque ? 'btn-plano-green' : 'btn-plano-outline'}
                    style={FB}
                  >
                    Escolher plano
                  </a>
                </div>
              );
            })}
          </div>

          {/* Nota sobre cartão */}
          {modo === 'cartao' && (
            <p className="text-center text-xs mt-6" style={{ ...FB, color: "#372b2e99" }}>
              * Pagamento no cartão via InfinitePay. Os valores apresentados já incluem a taxa da operadora.
            </p>
          )}
        </div>
      </section>
    </>
  );
}