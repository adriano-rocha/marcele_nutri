import Header from '@/components/Header';
import WhatsAppButtonFloat from '@/components/WhatsAppButtonFloat';

// ─── DADOS (edite aqui facilmente) ───────────────────────────────────────────
const NOME = "Marcele Asevedo";
const CRN = "CRN-3: 010101010101"; // substitua pelo número real
const WHATSAPP = "5511983554617";
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de agendar uma consulta.");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP}?text=${WHATSAPP_MSG}`;

const especialidades = [
  {
    icon: "⚖️",
    titulo: "Emagrecimento Saudável",
    descricao:
      "Plano alimentar individualizado focado em emagrecimento real e sustentável, sem dietas restritivas que prejudicam sua relação com a comida.",
  },
  {
    icon: "🏃",
    titulo: "Nutrição Esportiva",
    descricao:
      "Performance, recuperação e composição corporal para atletas e praticantes de atividade física de todos os níveis.",
  },
  {
    icon: "🌿",
    titulo: "Nutrição Funcional",
    descricao:
      "Tratamento de desequilíbrios causados por excesso ou carência nutricional, com cardápio balanceado e individualizado.",
  },
  {
    icon: "✨",
    titulo: "Nutrição e Estética",
    descricao:
      "A beleza começa de dentro. Condutas nutricionais que potencializam resultados estéticos e promovem bem-estar.",
  },
  {
    icon: "🔬",
    titulo: "Intolerâncias Alimentares",
    descricao:
      "Identificação e manejo de alergias e intolerâncias alimentares com dieta adequada e sem abrir mão do prazer de comer.",
  },
  {
    icon: "💊",
    titulo: "Nutrição Ortomolecular",
    descricao:
      "Equilíbrio molecular do organismo por meio da análise e correção de excessos ou deficiências de nutrientes.",
  },
];

const formacao = [
  "Graduação em Nutrição — [Universidade]",
  "Pós-graduação em Nutrição Esportiva — [Instituição]",
  "Pós-graduação em Nutrição Funcional — [Instituição]",
  "Curso de Extensão em Bioquímica aplicada à Nutrição",
  "Curso de Suplementação e Fitoterapia Clínica",
];

const depoimentos = [
  {
    texto:
      "Excelente profissional! Emagreci de forma saudável e aprendi a ter uma relação muito melhor com a comida. Super recomendo!",
    nome: "Ana Paula S.",
  },
  {
    texto:
      "A Marceli transformou minha performance nos treinos. Com o plano dela sinto muito mais energia e disposição durante o dia.",
    nome: "Carlos M.",
  },
  {
    texto:
      "Finalmente encontrei uma nutricionista que me ouve e respeita minha individualidade. Os resultados vieram de forma natural.",
    nome: "Fernanda L.",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Header />

      <main className="font-sans">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          id="home"
          className="relative min-h-[85vh] bg-slate-900 text-white flex items-center overflow-hidden"
        >
          {/* Foto da nutricionista */}
          <img
            src="/images/mah_01.jpeg"
            alt={NOME}
            className="absolute right-0 bottom-0 h-full w-auto max-w-[45%] object-cover object-top opacity-80 md:opacity-100"
            style={{ maskImage: "linear-gradient(to left, black 60%, transparent 100%)" }}
          />

          {/* Overlay escuro no lado esquerdo */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/90 to-transparent z-0" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 md:py-40">
            <p className="text-rose-400 text-sm font-semibold tracking-widest uppercase mb-4">
              {CRN}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              {NOME}
              <br />
              <span className="text-rose-400">Nutricionista</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-xl mb-10 leading-relaxed">
              Emagrecimento saudável, performance e qualidade de vida com um
              olhar único para a sua individualidade.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors shadow-xl"
            >
              Agende sua Consulta →
            </a>
          </div>
        </section>

        {/* ── SOBRE ────────────────────────────────────────────────────────── */}
        <section id="sobre" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-rose-400 text-sm font-semibold tracking-widest uppercase mb-3">
                Oi! Eu sou a
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Nutricionista {NOME}
              </h2>
              <hr className="border-rose-300 w-16 mb-6" />
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                <strong>Nutricionista por paixão e amor à profissão.</strong> A
                palavra equilíbrio sempre me acompanha — levo em conta as
                individualidades de cada paciente, acolhendo-a de forma
                singular, notando seu estilo de vida, desejos e desafios.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Meu objetivo é proporcionar uma vida mais saudável, prazerosa e
                com qualidade — porque saúde vai muito além da balança.
              </p>
              <a
                href="#contato"
                className="inline-block border-2 border-rose-400 text-rose-500 hover:bg-rose-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Quero saber mais
              </a>
            </div>

            {/* Foto quadrada */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-rose-100 rounded-2xl" />
              <img
                src="/images/mah_06.jpeg"
                alt={`Nutricionista ${NOME}`}
                className="relative rounded-2xl w-full h-96 object-cover shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* ── ESPECIALIDADES ───────────────────────────────────────────────── */}
        <section id="servicos" className="py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-rose-400 text-sm font-semibold tracking-widest uppercase mb-3">
                Como posso te ajudar
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Minhas Especialidades
              </h2>
              <hr className="border-rose-300 w-16 mx-auto mt-6" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {especialidades.map((item) => (
                <div
                  key={item.titulo}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.titulo}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORMAÇÃO ─────────────────────────────────────────────────────── */}
        <section id="formacao" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <img
              src="/images/mah_03.jpeg"
              alt="Formação"
              className="rounded-2xl w-full h-115 object-cover shadow-xl order-2 md:order-1"
            />

            <div className="order-1 md:order-2">
              <p className="text-rose-400 text-sm font-semibold tracking-widest uppercase mb-3">
                Qualificação
              </p>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Formação & Carreira
              </h2>
              <hr className="border-rose-300 w-16 mb-6" />
              <p className="text-slate-600 mb-8 leading-relaxed">
                Formação sólida e atualização contínua para oferecer o melhor
                cuidado nutricional, sempre com base científica e olhar humano.
              </p>
              <ul className="space-y-3">
                {formacao.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── DEPOIMENTOS ──────────────────────────────────────────────────── */}
        <section id="depoimentos" className="py-24 bg-rose-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-rose-400 text-sm font-semibold tracking-widest uppercase mb-3">
                Resultados reais
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                O que dizem minhas pacientes
              </h2>
              <hr className="border-rose-300 w-16 mx-auto mt-6" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {depoimentos.map((dep) => (
                <div
                  key={dep.nome}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-rose-100"
                >
                  <p className="text-rose-400 text-3xl font-serif leading-none mb-4">&quot;</p>
                  <p className="text-slate-600 italic leading-relaxed mb-6">
                    {dep.texto}
                  </p>
                  <p className="font-bold text-slate-800">— {dep.nome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA / CONTATO ────────────────────────────────────────────────── */}
        <section
          id="contato"
          className="py-32 bg-slate-900 text-white text-center"
        >
          <div className="max-w-2xl mx-auto px-6">
            <p className="text-rose-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Dê o primeiro passo
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronta para transformar sua saúde?
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              Agende sua consulta e comece sua jornada rumo ao equilíbrio,
              saúde e qualidade de vida.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-12 py-5 rounded-full text-xl font-semibold transition-colors shadow-xl"
            >
              Agendar pelo WhatsApp →
            </a>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────────────────── */}
        <footer className="bg-black text-slate-500 text-center py-8 text-sm">
          <p>
            © {new Date().getFullYear()} Nutricionista {NOME} · {CRN} · Todos
            os direitos reservados
          </p>
        </footer>
      </main>
      <WhatsAppButtonFloat />
    </>
  );
}