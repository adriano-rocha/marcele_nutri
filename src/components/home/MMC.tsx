'use client';

import { useState } from 'react';

const FB = { fontFamily: 'var(--font-lato), sans-serif' };
const FT = { fontFamily: 'var(--font-playfair), Georgia, serif' };

const WHATSAPP = "5511914344551";

type ResultadoIMC = {
  valor: number;
  classificacao: string;
  cor: string;
  emoji: string;
  mensagem: string;
  cta: string;
};

function calcularIMC(peso: number, altura: number): ResultadoIMC {
  const imc = peso / (altura * altura);

  if (imc < 18.5) return {
    valor: imc,
    classificacao: "Abaixo do peso",
    cor: "#5e8c6a",
    emoji: "⚠️",
    mensagem: "Seu IMC indica que você está abaixo do peso ideal. Um acompanhamento nutricional pode ajudar a recuperar sua saúde de forma segura e equilibrada.",
    cta: "Quero ganhar peso com saúde",
  };

  if (imc < 25) return {
    valor: imc,
    classificacao: "Peso normal",
    cor: "#5e8c6a",
    emoji: "✅",
    mensagem: "Parabéns! Seu IMC está na faixa ideal. Manter esse equilíbrio com acompanhamento profissional garante resultados duradouros.",
    cta: "Quero manter minha saúde",
  };

  if (imc < 30) return {
    valor: imc,
    classificacao: "Sobrepeso",
    cor: "#d18e8f",
    emoji: "📊",
    mensagem: "Seu IMC indica sobrepeso. Com um plano alimentar personalizado e sem restrições, é possível alcançar o equilíbrio de forma leve e sustentável.",
    cta: "Quero emagrecer com saúde",
  };

  if (imc < 35) return {
    valor: imc,
    classificacao: "Obesidade Grau I",
    cor: "#d18e8f",
    emoji: "💪",
    mensagem: "Seu IMC indica obesidade grau I. Com acompanhamento nutricional individualizado, você pode transformar sua saúde com estratégias que cabem na sua rotina.",
    cta: "Quero iniciar minha transformação",
  };

  if (imc < 40) return {
    valor: imc,
    classificacao: "Obesidade Grau II",
    cor: "#d18e8f",
    emoji: "🌱",
    mensagem: "Seu IMC indica obesidade grau II. Um acompanhamento próximo e personalizado faz toda a diferença nessa etapa. Cada pequeno passo conta.",
    cta: "Quero dar o primeiro passo",
  };

  return {
    valor: imc,
    classificacao: "Obesidade Grau III",
    cor: "#d18e8f",
    emoji: "🤝",
    mensagem: "Seu IMC indica obesidade grau III. Você merece um cuidado especial e individualizado. Estou aqui para te acompanhar com respeito e ciência.",
    cta: "Quero um acompanhamento personalizado",
  };
}

// Barra de IMC visual
function BarraIMC({ valor }: { valor: number }) {
  // IMC de 10 a 45 para representar a barra
  const min = 10, max = 45;
  const pct = Math.min(Math.max(((valor - min) / (max - min)) * 100, 0), 100);

  const faixas = [
    { label: 'Abaixo', ate: 18.5, cor: '#a8d5b5' },
    { label: 'Normal', ate: 25,   cor: '#5e8c6a' },
    { label: 'Sobrepeso', ate: 30, cor: '#d18e8f' },
    { label: 'Ob. I',  ate: 35,   cor: '#c47878' },
    { label: 'Ob. II', ate: 40,   cor: '#b56060' },
    { label: 'Ob. III', ate: 45,  cor: '#a04848' },
  ];

  return (
    <div className="mb-6">
      {/* Barra */}
      <div className="relative h-4 rounded-full overflow-hidden mb-2" style={{ backgroundColor: "#d8dad6" }}>
        {/* Gradiente de fundo */}
        <div className="absolute inset-0 rounded-full" style={{
          background: 'linear-gradient(to right, #a8d5b5 0%, #5e8c6a 25%, #d18e8f 45%, #c47878 65%, #b56060 80%, #a04848 100%)'
        }} />
        {/* Indicador */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-md"
          style={{
            left: `calc(${pct}% - 8px)`,
            backgroundColor: '#372b2e',
            transition: 'left 0.5s ease',
            zIndex: 2,
          }}
        />
      </div>

      {/* Labels das faixas */}
      <div className="flex justify-between text-xs" style={{ ...FB, color: "#372b2e99" }}>
        {faixas.map(f => (
          <span key={f.label}>{f.label}</span>
        ))}
      </div>
    </div>
  );
}

export default function MMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState<ResultadoIMC | null>(null);
  const [erro, setErro] = useState('');

  const calcular = () => {
    const p = parseFloat(peso.replace(',', '.'));
    const a = parseFloat(altura.replace(',', '.'));

    if (!p || !a) { setErro('Preencha o peso e a altura.'); return; }
    if (p < 20 || p > 300) { setErro('Digite um peso válido (kg).'); return; }
    if (a < 1 || a > 2.5) { setErro('Digite a altura em metros (ex: 1,65).'); return; }

    setErro('');
    setResultado(calcularIMC(p, a));
  };

  const resetar = () => {
    setPeso('');
    setAltura('');
    setResultado(null);
    setErro('');
  };

  const whatsappMsg = resultado
    ? encodeURIComponent(`Olá! Calculei meu IMC pelo site e obtive ${resultado.valor.toFixed(1)} (${resultado.classificacao}). Gostaria de um acompanhamento personalizado!`)
    : '';

  return (
    <section
      id="mmc"
      className="py-16 md:py-24"
      style={{ backgroundColor: "#ffffff", scrollMarginTop: "72px" }}
    >
      <div className="max-w-2xl mx-auto px-6">

        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ ...FB, color: "#5e8c6a" }}>
            Descubra seu resultado
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ ...FT, color: "#d18e8f" }}>
            Calculadora de IMC
          </h2>
          <p className="text-lg" style={{ ...FB, color: "#372b2e" }}>
            Descubra seu índice de massa corporal e veja o que ele significa para a sua saúde.
          </p>
          <hr className="w-16 mx-auto mt-6" style={{ borderColor: "#d18e8f" }} />
        </div>

        {!resultado ? (
          /* ── Formulário ── */
          <div className="rounded-2xl p-8 shadow-sm" style={{ backgroundColor: "#d8dad622", border: "1px solid #d18e8f33" }}>
            <div className="grid grid-cols-2 gap-6 mb-6">

              {/* Peso */}
              <div>
                <label className="block text-sm font-bold mb-2" style={{ ...FB, color: "#372b2e" }}>
                  Peso <span style={{ color: "#5e8c6a" }}>(kg)</span>
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={peso}
                  onChange={e => { setPeso(e.target.value); setErro(''); }}
                  placeholder="Ex: 68,5"
                  className="w-full rounded-xl px-4 py-3 text-lg outline-none"
                  style={{
                    ...FB,
                    border: "2px solid #d8dad6",
                    color: "#372b2e",
                    backgroundColor: "#ffffff",
                  }}
                  onFocus={e => e.target.style.borderColor = '#d18e8f'}
                  onBlur={e => e.target.style.borderColor = '#d8dad6'}
                />
              </div>

              {/* Altura */}
              <div>
                <label className="block text-sm font-bold mb-2" style={{ ...FB, color: "#372b2e" }}>
                  Altura <span style={{ color: "#5e8c6a" }}>(m)</span>
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={altura}
                  onChange={e => { setAltura(e.target.value); setErro(''); }}
                  placeholder="Ex: 1,65"
                  className="w-full rounded-xl px-4 py-3 text-lg outline-none"
                  style={{
                    ...FB,
                    border: "2px solid #d8dad6",
                    color: "#372b2e",
                    backgroundColor: "#ffffff",
                  }}
                  onFocus={e => e.target.style.borderColor = '#d18e8f'}
                  onBlur={e => e.target.style.borderColor = '#d8dad6'}
                />
              </div>
            </div>

            {erro && (
              <p className="text-sm mb-4" style={{ ...FB, color: "#d18e8f" }}>⚠ {erro}</p>
            )}

            <button
              onClick={calcular}
              className="w-full py-4 rounded-full text-white font-bold text-lg transition-colors"
              style={{ ...FB, backgroundColor: "#5e8c6a", border: "none", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#4a7055'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#5e8c6a'}
            >
              Calcular meu IMC →
            </button>

            <p className="text-center text-xs mt-4" style={{ ...FB, color: "#372b2e66" }}>
              O IMC é uma referência geral. Para uma avaliação completa, consulte uma nutricionista.
            </p>
          </div>

        ) : (
          /* ── Resultado ── */
          <div className="rounded-2xl p-8 shadow-sm" style={{ backgroundColor: "#ffffff", border: `2px solid ${resultado.cor}33` }}>

            {/* Valor do IMC */}
            <div className="text-center mb-6">
              <p className="text-6xl mb-2">{resultado.emoji}</p>
              <p className="text-6xl font-bold mb-1" style={{ ...FT, color: resultado.cor }}>
                {resultado.valor.toFixed(1)}
              </p>
              <p className="text-xl font-bold" style={{ ...FT, color: "#372b2e" }}>
                {resultado.classificacao}
              </p>
            </div>

            {/* Barra visual */}
            <BarraIMC valor={resultado.valor} />

            {/* Mensagem personalizada */}
            <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: `${resultado.cor}11`, border: `1px solid ${resultado.cor}33` }}>
              <p className="leading-relaxed text-sm" style={{ ...FB, color: "#372b2e" }}>
                {resultado.mensagem}
              </p>
            </div>

            {/* CTA WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full py-4 rounded-full text-white font-bold text-lg mb-4"
              style={{ ...FB, backgroundColor: "#5e8c6a", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#4a7055'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#5e8c6a'}
            >
              💬 {resultado.cta}
            </a>

            {/* Recalcular */}
            <button
              onClick={resetar}
              className="w-full py-3 rounded-full font-semibold text-sm"
              style={{ ...FB, backgroundColor: "transparent", border: "2px solid #d8dad6", color: "#372b2e", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#d18e8f'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#d8dad6'}
            >
              Calcular novamente
            </button>
          </div>
        )}
      </div>
    </section>
  );
}