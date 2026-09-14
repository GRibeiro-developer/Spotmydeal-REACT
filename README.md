# SpotMyDeal — Sprint 3 · Front-End Design Engineering

Este repositório é a **evolução das Sprints 1 e 2** (HTML + CSS + JS puro) para uma aplicação usando React + vite e tailwind, tipada com TypeScript. — seguindo os requisitos da etapa **Front-End Design Engineering**.

## SUMÁRIO

## 1- Tecnologias utilizadas
## 2- Como rodar projeto
## 3- Páginas e rotas
## 4- Arquitetura solicitada em documento do challenge
## 5- Hooks 
## 6- Checklist — Critérios de Avaliação
## 7- O que mudou em relação ao site HTML original
## 8- Equipe
## 9- Uso de IA
--------------------------------------------------------------------------------------------------------------------------

## Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| **React** | Interface e componentização |
| **Vite** | Construção e ambiente de desenvolvimento |
| **TypeScript** | Tipagem estática em toda a aplicação |
| **Tailwind CSS** | Estilização 100% reaproveitado, sem CSS externo |
| **React Router DOM** | Navegação solicitada como (SPA) |
| **React Hook Form** |Usado para validação de formulário|
| **GitHub** | Versionamento padrão|

--------------------------------------------------------------------------------------------------------------------------

## Como rodar o projeto?


# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev
# abre em http://localhost:5173

# 3. Build de produção
npm run build

--------------------------------------------------------------------------------------------------------------------------

## Páginas / Rotas

Todas as páginas obrigatórias da Sprint 2 foram migradas e mantidas, agora como uma **SPA** com `react-router-dom`:

| Rota | Página | Observação |
|---|---|---|
| `/` | Home | Hero, prévia de ranking, stats, "Como funciona", Impacto |
| `/sobre` | Sobre | Contexto SoulUp, problema, solução, roadmap |
| `/solucao` | Solução | Gatilhos psicológicos, mecanismo, cupons, benefícios |
| `/demo` | Demo interativa | Arena de cupons + ranking em tempo real (estado real) |
| `/faq` | FAQ | Acordeão por categoria |
| `/integrantes` | Equipe | Lista dos integrantes |
| `/integrantes/:id` | **Perfil do integrante** | **Rota dinâmica** (parâmetro `id`) |
| `/contato` | Contato | Formulário com React Hook Form |
| `*` | 404 | Página não encontrada |

--------------------------------------------------------------------------------------------------------------------------

## Arquitetura solicitada em documento do challenge

```
src/
├── assets/img/          # imagens dos integrantes (importadas como módulos)
├── components/
│   ├── ui/               # design do sistema: Button, Badge, Card, Container,
│   │                     # SectionHeading, PageHero, Pill, GlowDivider,
│   │                     # StatHighlight, FormInput, FormSelect, FormTextarea
│   ├── layout/           # Navbar, Footer, Layout (Outlet do React Router)
│   ├── home/             # Hero, StatsBar, HowItWorks, ImpactSection, CtaBanner...
│   ├── sobre/            # AboutBlock, Roadmap, RoadmapItem
│   ├── solucao/          # TriggerCard, StepTimeline, CouponPreviewCard...
│   ├── demo/             # PlayerPanel, CouponArenaCard, Leaderboard, Toast
│   ├── faq/              # FaqAccordion, FaqAccordionItem
│   ├── integrantes/      # MemberCard
│   └── contato/          # ContactForm, ContactInfoList
├── pages/                # uma página por rota (compõem os componentes acima)
├── hooks/                # useNavbarScroll, useScrollToHash, useDemoGame
├── data/                 # conteúdo tipado (reaproveitado do site original)
├── types/                # interfaces TypeScript centrais do domínio
├── App.tsx               # definição das rotas
└── main.tsx              # entry point (BrowserRouter + StrictMode)
```

**Princípios seguidos:**
- Cada seção visual é um componente próprio, recebendo dados via props tipadas.
- Conteúdo (textos, listas, dados do jogo) fica separado em `src/data/*.ts`.
- Componentes de formulário (`FormInput`, `FormSelect`, `FormTextarea`) são genéricos e reutilizáveis com qualquer `register()` do React Hook Form.
- `PageHero`, `Container`, `Button`, `Card` e `SectionHeading` são reaproveitados em praticamente todas as páginas.

--------------------------------------------------------------------------------------------------------------------------

## Hooks & estado (React)

| Hook | Onde | O que faz |
|---|---|---|
| `useState` | Navbar, FaqAccordion, `useDemoGame` | menu mobile, item aberto do FAQ, estado do jogo |
| `useEffect` | `useNavbarScroll`, `useScrollToHash`, `useDemoGame` | scroll da navbar, navegação fluida por âncora, `setInterval` com **cleanup** simulando outros players |
| `useMemo` | `useDemoGame` | ranking ordenado e progresso de nível, recalculados só quando necessário |
| `useCallback` | `useDemoGame` | handlers estáveis (`collectCoupon`, `addPoints`, `triggerToast`) |
| `useNavigate` | `MemberCard`, `MemberDetail` | navegação programática para o perfil e botão "Voltar" |
| `useParams` | `MemberDetail` | leitura do parâmetro dinâmico `:id` da rota |

A página **Demo** é o ponto alto da interatividade: todo o estado do "loot tracker" (pontos, inventário, cupons coletados, ranking ao vivo, toast) vive no hook `useDemoGame`, mantendo os componentes de apresentação (`PlayerPanel`, `CouponArenaCard`, `Leaderboard`) livres de lógica — eles só recebem dados e callbacks via props.

--------------------------------------------------------------------------------------------------------------------------

## ✅ Checklist — Critérios de Avaliação (Sprint 3)

- [x] **Bloco 1 — Conversão para React + Vite + TypeScript**: todas as páginas obrigatórias convertidas, SPA com `react-router-dom`, estrutura em `/src/components` e `/src/pages`, TypeScript em 100% dos arquivos.
- [x] **Bloco 2 — Componentização, modularidade e reutilização**: +50 componentes pequenos e reutilizáveis, divisão lógica por domínio, nomenclatura consistente.
- [x] **Bloco 3 — Hooks, props e navegação de dados**: `useState` e `useEffect` em múltiplos componentes, `useNavigate`/`useParams`, rotas estáticas e **rota dinâmica** (`/integrantes/:id`), props tipadas em todo lugar.
- [x] **Bloco 4 — Estilização e responsividade com Tailwind**: 100% Tailwind (sem CSS externo além do `@tailwind` base), responsivo em mobile (≤480px), tablet (768px) e desktop (992px+).
- [x] **Bloco 5 — Formulários com React Hook Form**: `useForm` tipado com `ContactFormValues`, validações (obrigatório, e-mail, mínimo de caracteres), mensagens de erro, estado de envio.

--------------------------------------------------------------------------------------------------------------------------

## 🔁 O que mudou em relação ao site HTML original

- Removida a dependência do **Google Translate / i18n** (fora do escopo desta sprint, focada em React/TS/Tailwind); o conteúdo permanece 100% em pt-BR.
- Scripts soltos (`main.js`, `faq.js`, `contato.js`, `troca.js`) foram substituídos por **hooks e estado React**.
- CSS customizado (`style.css`, `responsive.css`) foi substituído por **Tailwind CSS** utilitário.
- Todo o conteúdo textual (Sobre, Solução, FAQ, Integrantes) foi **preservado e reaproveitado**, apenas reorganizado em dados tipados (`src/data`).

--------------------------------------------------------------------------------------------------------------------------

## 👥 Equipe

| Nome | RM | função |
|---|---|---|
| Gabriel Augusto | 573120 | Front-End · UI/UX · Gamificação |
| Nycolas Escobar | 573052 | Produto & Estratégia |
| Rodrigo Banharelli | 570539 | Back-end |
| Tayna Jimenes | 569337 | UX Research · Conteúdo |

**Turma:** 1TDSPW · FIAP 2026
<<<<<<< HEAD

link do repositorio Github: https://github.com/GRibeiro-developer/Spotmydeal-REACT
=======
link do Github: https://github.com/GRibeiro-developer/Spotmydeal-REACT
>>>>>>> d4edcc9b4f324bb07f3e18eefff9f6ffea1807dd

--------------------------------------------------------------------------------------------------------------------------

## Uso de IA
- Auxílio de escritura do README.MD (nomenclaturas e estruturação de documentação do codigo)
- Migração do codigo de .HTML para .TSX via extensão (.html to tsx no vscode)
- transcrição do codigo antigo em .JS para TS (via Claude)
- auxilio na estruturação do código
- auxilio na criação dos hooks (via claude)
- reestruturação de partes do js. (a parte em que eram os cards flutuantes e fotos dos integrantes (VIA CLAUDE) )
