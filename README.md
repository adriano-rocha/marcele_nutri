# 🥗 Marcele Asevedo Nutri

Site profissional de nutrição desenvolvido com **Next.js 16**, **TypeScript** e **Tailwind CSS**. Focado em performance, acessibilidade e conversão para atendimento online.

---

## ✨ Funcionalidades

- Landing page completa com seções otimizadas para conversão
- Totalmente responsivo (mobile-first)
- Imagens otimizadas com `next/image`
- Links diretos para WhatsApp e Instagram
- SEO com metadata e Open Graph configurados
- Animações suaves e design elegante

---

## 🗂️ Estrutura do Projeto

```
marcele_nutri/
├── public/
│   └── images/              # Fotos da nutricionista
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globais e variáveis
│   │   ├── layout.tsx       # Layout raiz + metadata/SEO
│   │   └── page.tsx         # Página principal
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero.tsx         # Seção inicial com CTA
│   │   │   ├── Sobre.tsx        # Apresentação da nutricionista
│   │   │   ├── Antropometria.tsx# Seção de avaliação antropométrica
│   │   │   ├── ComoFunciona.tsx # Passo a passo do atendimento
│   │   │   ├── Servicos.tsx     # Serviços oferecidos
│   │   │   ├── Planos.tsx       # Planos e preços
│   │   │   ├── FAQ.tsx          # Perguntas frequentes
│   │   │   ├── CTA.tsx          # Call to action final
│   │   │   └── Footer.tsx       # Rodapé com redes sociais
│   │   └── ui/
│   │       ├── Header.tsx       # Navegação principal
│   │       ├── CookieBanner.tsx # Banner de cookies
│   │       └── WhatsAppButton.tsx # Botão flutuante WhatsApp
│   └── data/
│       └── nutriData.ts     # Dados centralizados (nome, CRN, links, fontes)
├── next.config.ts
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🚀 Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.3 | Framework React com SSR/SSG |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Estilização utilitária |
| [Turbopack](https://turbo.build/pack) | — | Bundler ultrarrápido (dev) |

---

## ⚙️ Como rodar localmente

**Pré-requisitos:** Node.js 18+ e npm

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/marcele_nutri.git
cd marcele_nutri

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## 📦 Scripts disponíveis

```bash
npm run dev      # Inicia em modo desenvolvimento (Turbopack)
npm run build    # Gera build de produção
npm run start    # Inicia o servidor de produção
npm run lint     # Verifica erros de lint (ESLint)
```

---

## 📁 Dados centralizados

Todas as informações da nutricionista ficam em `src/data/nutriData.ts`, facilitando manutenção:

```ts
export const NOME = "Marcele Asevedo";
export const CRN = "CRN-X · XXXXX";
export const WHATSAPP_LINK = "https://wa.me/...";
// fontes, cores e outros dados
```

---

## 📱 Seções da Landing Page

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação principal com CTA para WhatsApp |
| **Sobre** | Trajetória e credenciais da nutricionista |
| **Antropometria** | Explicação sobre avaliação corporal |
| **Como Funciona** | Passo a passo do atendimento online |
| **Serviços** | Especialidades e áreas de atuação |
| **Planos** | Opções de acompanhamento e valores |
| **FAQ** | Dúvidas frequentes dos pacientes |
| **CTA** | Chamada final para agendamento |

---

## 🌐 Deploy

O projeto está configurado para deploy na [Vercel](https://vercel.com/), plataforma oficial do Next.js.

```bash
npm run build   # Valide o build antes do deploy
```

---

## 📸 Redes Sociais

- Instagram: [@marceleasevedo.nutri](https://www.instagram.com/marceleasevedo.nutri)

---

## 📄 Licença

Projeto de uso privado — todos os direitos reservados à **Marcele Asevedo Nutrição**.