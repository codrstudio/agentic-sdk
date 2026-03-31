# Release — Nova Versão

Guia operacional para publicar novas versões. Os consumidores referenciam tags git, então uma release = commit + tag + push.

## Repositórios

| Package | Repo | Local |
|---|---|---|
| `@codrstudio/agentic-sdk` | [codrstudio/agentic-sdk](https://github.com/codrstudio/agentic-sdk) | `D:/sources/codr.studio/agentic-sdk-new` |
| `@codrstudio/agentic-chat` | [codrstudio/agentic-chat](https://github.com/codrstudio/agentic-chat) | `D:/sources/codr.studio/agentic-chat` |

Cada repo é independente. Versionamento e release são feitos separadamente.

## Build

### agentic-sdk

O `dist/` é commitado no repo. O build via `tsc` pode falhar com erros de tipo por incompatibilidades entre versões do Vercel AI SDK. Nesse caso:

- Corrigir os tipos no `src/` e rodar `tsc`, ou
- Editar o `dist/` diretamente (workaround aceito)

```bash
npx tsc
# Se falhar, o dist/ commitado já serve
```

### agentic-chat

Apenas build de CSS:

```bash
npx @tailwindcss/cli -i src/styles.css -o dist/styles.css --minify
```

Os consumidores importam TypeScript direto do `src/` (ver campo `exports` no `package.json`).

## Passo a passo

### 1. Garantir que o código está commitado

```bash
git status
# Não deve ter alterações pendentes
```

### 2. Bump de versão

```bash
npm version patch --no-git-tag-version
# ou: npm version minor / npm version major
```

### 3. Commit + tag + push

```bash
VERSION=$(node -p "require('./package.json').version")
git add -A
git commit -m "release: v${VERSION}"
git tag "v${VERSION}"
git push && git push --tags
```

### 4. Atualizar consumidores

Nos projetos que usam o package, atualizar a tag no `package.json`:

```json
"@codrstudio/agentic-sdk": "github:codrstudio/agentic-sdk#v<NOVA_VERSAO>"
```

E rodar `npm install`.

## Versionamento

- Versão segue semver: `MAJOR.MINOR.PATCH`
- Cada tag git corresponde a uma versão: `v0.1.0`, `v0.2.0`, etc.
- Os dois repos podem ter versões diferentes — são independentes

## Decisões e Contexto

- **Por que git dependency e não npm registry?** Qualquer dev faz `npm install` sem auth, sem `.npmrc`, sem config. Repos públicos no GitHub servem como distribuição.
- **Por que `dist/` commitado?** O `tsc` pode falhar com erros de tipo por incompatibilidade de versões do `ai` SDK. O `dist/` commitado garante que sempre há uma versão funcional.
- **Por que repos separados?** npm não suporta instalar subdiretório de um monorepo via git dependency. Um repo por package é o padrão do ecossistema.
