import { build } from 'esbuild'

// oxlint-disable-next-line typescript-eslint(no-floating-promises)
build({
	entryPoints: ['src/index.ts'],
	outdir: 'dist',
	format: 'esm',
	external: [],
	sourcemap: true,
})
