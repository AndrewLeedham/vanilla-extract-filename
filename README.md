# vanilla-extract-filename

Repro for Vanilla Extract `__filename` issue.

1. Run `pnpm install && pnpm dev`
2. Open `http://localhost:3000`
3. See the below error.

```
[vite] Internal server error: __filename is not defined
  Plugin: vanilla-extract
  File: <redacted>/vanilla-extract-filename/src/main.css.ts
      at <redacted>/vanilla-extract-filename/src/main.css.ts:42:17
      at Script.runInContext (node:vm:139:12)
      at Script.runInNewContext (node:vm:144:17)
      at Object.module.exports [as default] (<redacted>/vanilla-extract-filename/node_modules/.pnpm/eval@0.1.6/node_modules/eval/eval.js:74:12)
      at Object.processVanillaFile (<redacted>/vanilla-extract-filename/node_modules/.pnpm/@vanilla-extract+integration@3.0.1/node_modules/@vanilla-extract/integration/dist/vanilla-extract-integration.cjs.dev.js:108:50)
      at TransformContext.transform (<redacted>/vanilla-extract-filename/node_modules/.pnpm/@vanilla-extract+vite-plugin@3.1.4_vite@2.9.5/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.dev.js:192:26)
      at processTicksAndRejections (node:internal/process/task_queues:96:5)
      at async Object.transform (<redacted>/vanilla-extract-filename/node_modules/.pnpm/vite@2.9.5/node_modules/vite/dist/node/chunks/dep-27bc1ab8.js:36672:30)
      at async doTransform (<redacted>/vanilla-extract-filename/node_modules/.pnpm/vite@2.9.5/node_modules/vite/dist/node/chunks/dep-27bc1ab8.js:55662:29)
```
