import { build } from 'esbuild'

// oxlint-disable-next-line typescript-eslint(no-floating-promises)
await build({
	entryPoints: ['src/index.js'],
	outdir: 'dist',
	format: 'esm',
	external: [],
	sourcemap: true,
})
