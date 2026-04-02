# @codrstudio/agentic-sdk

Agent runtime powered by [Vercel AI SDK](https://sdk.vercel.ai/) + [OpenRouter](https://openrouter.ai/). Async generator streaming, built-in tools, context management, and MCP support.

Part of the [codrstudio](https://github.com/codrstudio) ecosystem, alongside [@codrstudio/agentic-chat](https://github.com/codrstudio/agentic-chat).

## Install

```bash
npm install @codrstudio/agentic-sdk@github:codrstudio/agentic-sdk#v0.1.0
```

Or in `package.json`:

```json
{
  "dependencies": {
    "@codrstudio/agentic-sdk": "github:codrstudio/agentic-sdk#v0.1.0"
  }
}
```

## Quick Start

### Run an agent

```typescript
import { runAgent } from "@codrstudio/agentic-sdk";

for await (const event of runAgent({
  model: "anthropic/claude-sonnet-4",
  apiKey: process.env.OPENROUTER_API_KEY,
  prompt: "Fix the bug in src/main.ts",
})) {
  if (event.type === "text") process.stdout.write(event.content);
}
```

### Structured output

```typescript
import { aiGenerateObject } from "@codrstudio/agentic-sdk";
import { z } from "zod";

const result = await aiGenerateObject({
  model: "anthropic/claude-sonnet-4",
  apiKey: process.env.OPENROUTER_API_KEY,
  schema: z.object({
    title: z.string(),
    summary: z.string(),
  }),
  prompt: "Extract title and summary from: ...",
});
```

## API

### `runAgent(options)` — Primary API

Async generator that yields `AgentEvent` items. Validates input, resolves providers, runs the agentic loop with tool calls, and streams results.

```typescript
async function* runAgent(options: AgentRunOptions): AsyncGenerator<AgentEvent>
```

**Options:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `model` | `string` | yes | Model ID (e.g. `"anthropic/claude-sonnet-4"`) |
| `apiKey` | `string` | yes | API key (OpenRouter by default) |
| `prompt` | `string` | yes | User message |
| `system` | `string` | | System prompt override |
| `tools` | `Record<string, Tool>` | | Extra AI SDK tools to inject |
| `sessionId` | `string` | | Session identifier |
| `sessionDir` | `string` | | Directory for session persistence (JSONL) |
| `maxTurns` | `number` | | Max agentic steps (default: 100) |
| `role` | `string` | | Agent role label |
| `provider` | `string` | | Provider name (default: `"openrouter"`) |
| `providers` | `Record<string, { baseURL, apiKey }>` | | Additional provider configs |
| `providerConfig` | `Record<string, any>` | | Provider-specific params (temperature, webSearch, etc.) |
| `messageMeta` | `Record<string, unknown>` | | Metadata attached to user message |
| `contentParts` | `unknown[]` | | Multi-modal content parts |

**Events (`AgentEvent`):**

| Type | Fields | Description |
|------|--------|-------------|
| `init` | `sessionId?` | Session started |
| `text` | `content` | Text delta |
| `reasoning` | `content` | Extended thinking delta |
| `tool-call` | `toolCallId, toolName, args` | Tool invocation |
| `tool-result` | `toolCallId, toolName, result` | Tool execution result |
| `step_finish` | | Agent step completed |
| `result` | `content` | Final assembled response |
| `usage` | `usage: UsageData` | Token/cost metrics |

### `runAiAgent(prompt, options)` — Extended API

Lower-level async generator with full control over MCP, callbacks, context compaction, telemetry, and middleware.

```typescript
async function* runAiAgent(prompt: string, options: AiAgentOptions): AsyncGenerator<AiAgentEvent>
```

Key extra options beyond `runAgent`:
- `mcpServers` — MCP server connections (stdio or HTTP)
- `onAskUser` / `onWebSearch` / `onCodeSearch` — pluggable callbacks
- `prepareStep(ctx)` — customize model/tools per step
- `stopWhen(event)` — early termination condition
- `middleware` — Vercel AI SDK middleware pipeline
- `reasoning` — extended thinking (`true` or `{ budgetTokens }`)
- `contextWindow` / `compactThreshold` / `disableCompaction` — context management
- `telemetry` — OpenTelemetry tracing

### `aiGenerateObject(options)` — Structured Output

```typescript
async function aiGenerateObject<T extends z.ZodType>(options: AiObjectOptions<T>): Promise<z.infer<T>>
```

### `aiStreamObject(options)` — Streaming Structured Output

```typescript
async function* aiStreamObject<T extends z.ZodType>(options: AiObjectOptions<T>): AsyncGenerator<Partial<z.infer<T>>>
```

## Built-in Tools

19 coding tools automatically available to agents:

| Tool | Description |
|------|-------------|
| `Read` | Read files |
| `Write` | Create files |
| `Edit` | Edit files (exact string replacement) |
| `MultiEdit` | Batch file editing |
| `Bash` | Shell command execution |
| `Glob` | File pattern matching |
| `Grep` | Content search (regex) |
| `ListDir` | Directory listing |
| `ApplyPatch` | Git-style patch application |
| `WebFetch` | HTTP fetch with parsing |
| `WebSearch` | Web search (pluggable provider) |
| `CodeSearch` | Code snippet search |
| `HttpRequest` | HTTP requests |
| `ApiSpec` | OpenAPI spec retrieval |
| `Task` | Sub-agent delegation |
| `Batch` | Parallel tool execution |
| `AskUser` | Interactive prompts |
| `TodoWrite/TodoRead` | Task management |
| `Diagnostics` | Language diagnostics |

Plus 19 **display tools** for rich UI rendering (charts, tables, products, galleries, etc.).

## Provider Registry

```typescript
import { createAiProviderRegistry } from "@codrstudio/agentic-sdk";

const providers = createAiProviderRegistry({
  apiKey: process.env.OPENROUTER_API_KEY,
  providers: {
    groq: { baseURL: "https://api.groq.com/openai/v1", apiKey: process.env.GROQ_API_KEY },
  },
});

// Built-in aliases: "fast" → claude-haiku-4.5, "balanced" → claude-sonnet-4, "strong" → claude-opus-4.6
const model = providers.model("fast");
```

## Context Management

- **Auto-compaction**: when context usage exceeds threshold (default 65%), older messages are summarized
- **Token counting**: `js-tiktoken` with GPT-4o encoding
- **30+ model context windows**: automatically resolved by model ID

```typescript
import { getContextUsage, compactMessages } from "@codrstudio/agentic-sdk";
```

## Session Persistence

When `sessionDir` is provided, messages are persisted as JSONL files and automatically resumed on next run.

## Guides

- [Installation & Usage](guides/usage/GUIDE.md) — install, configure, and consume the packages
- [Release](guides/release/GUIDE.md) — how to publish new versions

## License

MIT
