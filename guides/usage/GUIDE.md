# Instalação e Uso

## Instalação

Os packages são distribuídos via git dependency. Não requerem registry, auth ou `.npmrc`.

```bash
npm install @codrstudio/agentic-sdk@github:codrstudio/agentic-sdk#v0.1.0
npm install @codrstudio/agentic-chat@github:codrstudio/agentic-chat#v0.1.0
```

Ou direto no `package.json`:

```json
{
  "dependencies": {
    "@codrstudio/agentic-sdk": "github:codrstudio/agentic-sdk#v0.1.0",
    "@codrstudio/agentic-chat": "github:codrstudio/agentic-chat#v0.1.0"
  }
}
```

### Atualizar versão

Trocar a tag no `package.json` e rodar `npm install`:

```json
"@codrstudio/agentic-sdk": "github:codrstudio/agentic-sdk#v0.2.0"
```

### Verificar versão instalada

```bash
node -e "console.log(require('./node_modules/@codrstudio/agentic-sdk/package.json').version)"
```

## Packages

### @codrstudio/agentic-sdk

Runtime de agentes AI via Vercel AI SDK + OpenRouter.

- `runAiAgent()` — async generator, emite `AgentEvent`
- Context compaction automática
- MCP support (stdio e http)
- Tools built-in: `Read`, `Glob`, `Grep`, `Bash`, `Write`, `Edit`, `MultiEdit`, `ApplyPatch`, `AskUser`, `WebSearch`, `WebFetch`, `CodeSearch`, `Task`, `Batch`, `ListDir`

**Repo:** https://github.com/codrstudio/agentic-sdk

### @codrstudio/agentic-chat

Componentes React para chat UI de agentes AI.

- `<Chat />` — componente principal
- Display renderers (tabelas, gráficos, cards, alertas, etc.)
- `ChatProvider` + `useBackboneChat` hook
- CSS via `@codrstudio/agentic-chat/styles.css`

**Repo:** https://github.com/codrstudio/agentic-chat

**Peer dependencies:** `react@^18||^19`, `react-dom@^18||^19`

## Exemplo de uso

```tsx
import { Chat } from "@codrstudio/agentic-chat";
import "@codrstudio/agentic-chat/styles.css";
```

```ts
import { runAiAgent } from "@codrstudio/agentic-sdk";
```
