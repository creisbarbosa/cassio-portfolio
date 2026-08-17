# Cassio Barbosa — Portfólio

> Site pessoal de um Product Manager de produtos financeiros B2B. Não é uma lista de cargos: é um **decision log** — cada seção fecha com uma decisão assumida por escrito.

<p>
  <img alt="TanStack Start" src="https://img.shields.io/badge/TanStack_Start-1.168-ff4154?style=flat-square&logo=react&logoColor=white">
  <img alt="React 19" src="https://img.shields.io/badge/React-19-149eca?style=flat-square&logo=react&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.8-3178c6?style=flat-square&logo=typescript&logoColor=white">
  <img alt="Tailwind CSS 4" src="https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite&logoColor=white">
  <img alt="Bun" src="https://img.shields.io/badge/Bun-lockfile-fbf0df?style=flat-square&logo=bun&logoColor=black">
</p>

---

## O que é

Um portfólio de duas páginas, bilíngue (PT/EN), construído em torno de um argumento: **processo importa porque é ele que se repete quando o contexto muda.**

| Página | Rota | O que tem |
| --- | --- | --- |
| Home | `/` | Hero com terminal de decisões, stats animados, "Como eu trabalho", case em destaque, trajetória em formato de log de commits, ferramentas, formação e contato |
| Case | `/case/retencao` | Case completo *"O hábito que não se forma"* — diagnóstico de coortes, discovery, priorização com veto, rollout com guardas, o "não" à diretoria e curadoria de IA |

O case é a peça central: retenção vazando numa plataforma B2B de marketing por dados, resolvida em 5 dias — com gráficos de coorte, matriz RICE e as decisões registradas ato a ato.

## Stack

- **[TanStack Start](https://tanstack.com/start)** — SSR + roteamento por arquivos (`src/routes/`)
- **React 19** + **TypeScript**
- **Tailwind CSS 4** com design tokens em `src/styles.css` (tema claro/escuro via classe no `<html>`)
- **[shadcn/ui](https://ui.shadcn.com)** (Radix primitives) em `src/components/ui/`
- **Framer Motion** para reveals, stagger e count-up
- **Recharts** para os gráficos do case
- **Bun** como gerenciador de pacotes · **ESLint + Prettier** no lint/format
- Build servido por **Nitro** (target Cloudflare por padrão)

## Rodando localmente

Requer [Bun](https://bun.sh) (ou Node 20+ com npm).

```bash
git clone https://github.com/creisbarbosa/cassio-portfolio.git
cd cassio-portfolio
bun install
bun run dev
```

O dev server sobe em **`http://localhost:8080`** — a porta é fixada pelo preset `@lovable.dev/vite-tanstack-config`, não é a 5173 padrão do Vite.

<details>
<summary>Usando npm em vez de Bun</summary>

```bash
npm install
npm run dev
```

Funciona igual. Só note que o `bun.lock` não é lido pelo npm — as versões são resolvidas de novo a partir do `package.json`, e um `package-lock.json` é gerado.
</details>

### Scripts

| Comando | O que faz |
| --- | --- |
| `dev` | Dev server com HMR em `:8080` |
| `build` | Build de produção (SSR + client) |
| `build:dev` | Build em modo development |
| `preview` | Serve o build local |
| `lint` | ESLint em todo o projeto |
| `format` | Prettier `--write` |

Prefixe com `bun run` ou `npm run`.

## Estrutura

```
src/
├── routes/              # roteamento por arquivo (TanStack Start)
│   ├── __root.tsx       # shell: providers de tema e idioma, error boundary, 404
│   ├── index.tsx        # home
│   └── case.retencao.tsx
├── i18n/                # dicionários pt.ts / en.ts + LanguageProvider
├── components/
│   ├── site/            # Navbar, DecisionTerminal, DecisionLog, CaseActs, Sparkline…
│   ├── case/            # gráficos e navegação de seções do case
│   ├── motion/          # Reveal, CountUp, Glow, Spotlight
│   └── ui/              # shadcn/ui
├── lib/                 # theme, motion, chart-theme, utils, error capture
└── styles.css           # tokens de design, @font-face, base
```

`src/routeTree.gen.ts` é gerado automaticamente — não editar à mão.

## Detalhes de implementação

**Conteúdo é dado, não JSX.** Todo o texto das duas páginas vive em `src/i18n/pt.ts` e `src/i18n/en.ts` — mesmo shape, tipado por `Dictionary`. Os componentes só renderizam. Trocar de idioma não recarrega a página e não duplica rota.

**Idioma na URL.** `?lang=en` fixa o inglês; sem o parâmetro, vale o que estiver na `sessionStorage`. O padrão é PT-BR.

**Tema sem flash.** Um script inline (`themeBootstrapScript`) aplica a classe `light`/`dark` no `<html>` antes do primeiro paint, respeitando `prefers-color-scheme` e a escolha salva.

**Acessibilidade.** Seções expansíveis usam `aria-expanded`/`aria-controls`, o terminal do hero pausa no hover e as animações respeitam `prefers-reduced-motion`.

**SEO.** Meta e Open Graph por rota via `head()` do TanStack Router, com `sitemap.xml`, `robots.txt` e `og-cover.jpg` em `public/`.

## Notas para quem clonar

- As fontes **PolySans** são auto-hospedadas em `public/fonts/` (quatro pesos, ~128 KB no total), declaradas nos `@font-face` de `src/styles.css` e pré-carregadas em `src/routes/__root.tsx`. Os arquivos em `src/assets/*.asset.json` são metadados herdados do editor do Lovable e não são usados por nenhum código.
- O console do dev mostra um aviso de *hydration mismatch* no `<html>`: é esperado. O `themeBootstrapScript` aplica a classe de tema antes do React hidratar, justamente pra evitar flash — o servidor não tem como prever a preferência do cliente.
- `public/robots.txt` e `public/sitemap.xml` apontam para o domínio de preview — troque pelo domínio final antes de publicar.
- O projeto foi iniciado no [Lovable](https://lovable.dev) e mantém a integração: reescrever histórico já publicado (force push, rebase/squash de commits enviados) quebra a sincronia. Veja `AGENTS.md`.

## Contato

- LinkedIn — [creisbarbosa](https://www.linkedin.com/in/creisbarbosa/)
- E-mail — [creisbarbosa@gmail.com](mailto:creisbarbosa@gmail.com)

---

O código é livre para estudo e referência. O **conteúdo** — textos, case e identidade visual — é meu; se for reaproveitar como base, troque por sua própria história.
