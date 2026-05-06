// src/data/nutriData.ts

// ─── DADOS PRINCIPAIS ─────────────────────────────────────────────────────
export const NOME = "Marcele Asevedo";
export const CRN = "CRN-3 46017";
export const WHATSAPP = "5511914344551";

export const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Gostaria de agendar uma consulta."
);

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP}?text=${WHATSAPP_MSG}`;

// ─── FONTES ───────────────────────────────────────────────────────────────
import type { CSSProperties } from 'react';

export const FT: CSSProperties = { fontFamily: "var(--font-playfair), Georgia, serif" };
export const FB: CSSProperties = { fontFamily: "var(--font-lato), sans-serif" };

// ─── DADOS DAS SEÇÕES ─────────────────────────────────────────────────────
export const inclusos = [
  {
    icon: "🕐",
    titulo: "Consulta de 1 hora",
    descricao:
      "Um momento totalmente dedicado a você, onde entendo sua rotina, hábitos, histórico e objetivos. Aqui já começamos a construir mudanças práticas.",
  },
  {
    icon: "🥗",
    titulo: "Plano alimentar personalizado",
    descricao:
      "Você recebe tudo pelo app, com sugestões adaptadas à sua realidade, além de acompanhamento de metas.",
  },
  {
    icon: "📊",
    titulo: "Avaliação física",
    descricao:
      "Feita de forma online, com orientação guiada para coleta de circunferências. Também é possível utilizar medidas e/ou bioimpedância já realizadas em outro local, além do envio de fotos (opcional).",
  },
  {
    icon: "💬",
    titulo: "Suporte via WhatsApp",
    descricao:
      "Você não fica sozinha no processo. Tem acompanhamento direto comigo para dúvidas e ajustes.",
  },
];

export const passos = [
  {
    num: "01",
    titulo: "Escolha seu plano",
    descricao:
      "Encontre o acompanhamento ideal para o seu momento, sua rotina e seus objetivos.",
  },
  {
    num: "02",
    titulo: "Realize o pagamento",
    descricao:
      "PIX à vista com desconto ou cartão de crédito pelo link seguro da InfinitePay.",
  },
  {
    num: "03",
    titulo: "Preencha o questionário",
    descricao:
      "Acesse o formulário completo e me conte sobre sua rotina, histórico e objetivos.",
  },
  {
    num: "04",
    titulo: "Consulta e plano personalizado",
    descricao:
      "Agendamos sua consulta de 1h. Em até 48h você recebe seu plano alimentar no app, com suporte via WhatsApp.",
  },
];

export const planos = [
  {
    nome: "Mensal",
    preco: "R$220",
    periodo: "à vista",
    media: null,
    destaque: false,
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
    preco: "R$550",
    periodo: "3 meses",
    media: "Média de R$184 por consulta",
    destaque: true,
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
    preco: "R$1.000",
    periodo: "6 meses",
    media: "Média de R$167 por consulta",
    destaque: false,
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

export const faqs = [
  {
    pergunta: "O atendimento é presencial ou online?",
    resposta:
      "O acompanhamento é realizado de forma online, por videochamada, permitindo atender você com praticidade, independentemente da sua localização. Com a mesma qualidade de um atendimento presencial, mas com o conforto de onde você estiver. A avaliação física é feita com orientação detalhada, podendo incluir medidas, dados de bioimpedância já realizados previamente e fotos (opcional).",
  },
  {
    pergunta: "O que está incluído em cada consulta?",
    resposta:
      "Cada consulta tem duração de 1 hora e é totalmente personalizada, com foco na sua rotina, hábitos e objetivos. Você recebe acesso ao app com seu plano alimentar, suporte contínuo via WhatsApp e acompanhamento próximo ao longo do processo. Quando necessário, são solicitados exames bioquímicos e incluídas estratégias de suplementação.",
  },
  {
    pergunta: "Depois do pagamento, o que acontece?",
    resposta:
      "Após a confirmação, você recebe acesso ao questionário pré-consulta para me contar sobre sua rotina, histórico e objetivos. Com base nessas informações, inicio a preparação do seu plano e entro em contato via WhatsApp para agendar sua primeira consulta.",
  },
  {
    pergunta: "Em quanto tempo vejo resultado?",
    resposta:
      "Os resultados dependem da sua rotina e consistência, mas é comum observar as primeiras mudanças entre 2 a 4 semanas. Para resultados sólidos e duradouros, o acompanhamento contínuo, especialmente nos planos trimestral ou semestral, faz toda a diferença.",
  },
  {
    pergunta: "Você atende condições de saúde específicas?",
    resposta:
      "Sim. Atendo pessoas com diferentes condições de saúde, como síndrome dos ovários policísticos (SOP), resistência à insulina, diabetes, hipertensão e alterações intestinais, entre outras. O acompanhamento é sempre individualizado, considerando sua rotina, exames e necessidades clínicas.",
  },
  {
    pergunta: "Qual o público atendido?",
    resposta:
      "Não realizo atendimentos para gestantes, crianças, idosos acima de 70 anos ou pacientes com dieta vegetariana/vegana.",
  },
];

export const antropometria = [
  "Na consulta online, é totalmente possível acompanhar sua evolução de forma eficaz por meio de métodos práticos de avaliação, como a antropometria básica. Esse acompanhamento inclui medidas simples, como peso e altura, além do registro de fotos e circunferências corporais.",
  "As medidas de peso e altura ajudam a acompanhar mudanças no peso corporal, enquanto as fotos permitem visualizar alterações na composição corporal, como redução de gordura e ganho de massa muscular. Já as circunferências auxiliam na avaliação da distribuição de gordura no corpo.",
  "Embora existam métodos mais detalhados, como bioimpedância ou avaliação de dobras cutâneas, na maioria dos casos a antropometria básica já é suficiente para um acompanhamento eficaz no atendimento online. Essas estratégias são práticas, acessíveis e podem ser realizadas por você em casa.",
  "Em alguns casos específicos, pode ser interessante complementar com uma avaliação física mais detalhada, como bioimpedância ou acompanhamento com educador físico. Quando necessário, esses dados podem ser utilizados para enriquecer ainda mais a análise durante o atendimento.",
  "Dessa forma, mesmo à distância, é possível acompanhar sua evolução de forma clara, consistente e baseada em dados.",
];