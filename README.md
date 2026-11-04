# SpotMyDeal — React + Vite + TypeScript (SPA)

Migração do site estático antigo para uma Single Page Application.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + build em /dist
npm run preview    # testa o build localmente
```

## Deploy na Vercel

1. Suba o projeto para um repositório (GitHub/GitLab/Bitbucket).
2. Na Vercel: **Add New → Project** e importe o repositório.
3. O preset **Vite** é detectado automaticamente (build `npm run build`, saída `dist`).
4. **Deploy.**

O `vercel.json` já traz o rewrite de SPA (qualquer rota abre o `index.html`, então
recarregar `/demo` não dá 404), redirects das URLs antigas (`/sobre.html` → `/sobre`) e cache dos assets.

Via CLI: `npm i -g vercel && vercel --prod`.

## Estrutura

```
src/
  main.tsx, App.tsx          # entrada e rotas (lazy)
  components/                # Layout, Navbar, Footer, ScrollManager
  pages/                     # Home, Sobre, Solucao, Demo, Faq, Integrantes, Contato, NotFound (+ .css de cada)
  i18n/                      # translations.ts (PT/EN) e LanguageContext
  hooks/usePageMeta.ts       # título/description por página
  styles/                    # global.css e responsive.css (originais)
public/img/                  # imagens
```

## Notas

- O idioma (PT/EN) vale para o site todo e fica salvo no `localStorage`.
- O formulário de contato **simula** o envio (como no site antigo). Para enviar de verdade, troque o
  `setTimeout` em `src/pages/Contato.tsx` por um `fetch` para um backend ou serviço de formulários.
- Para adicionar uma página: crie o componente em `src/pages`, registre a rota em `App.tsx` e o link em `Navbar.tsx`.
