# CLAUDE.md

## O que é

`@codrstudio/agentic-sdk` — runtime de agentes AI. Async generator (`runAiAgent()`) que usa Vercel AI SDK + OpenRouter com streaming SSE, context compaction, MCP e tools built-in.

Package irmão: [`@codrstudio/agentic-chat`](https://github.com/codrstudio/agentic-chat) — componentes React para chat UI.

## Guias

- [Instalação e uso](guides/usage/GUIDE.md)
- [Release](guides/release/GUIDE.md)

## Estrutura

```
src/           # TypeScript source
dist/          # Compilado (commitado — tsc pode falhar por incompatibilidade de tipos)
guides/        # Documentação operacional
```

## Comandos

```bash
npx tsc           # build (pode falhar — dist/ commitado serve como fallback)
npx tsc --watch   # dev
```

## Stack

- TypeScript (ES2022, ESM, `"moduleResolution": "bundler"`)
- Vercel AI SDK (`ai@^6`)
- Zod schemas
- Distribuição via git dependency (sem registry)
