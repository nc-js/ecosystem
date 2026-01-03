const esbuild = require('esbuild')
const build = esbuild.build

// oxlint-disable-next-line typescript-eslint(no-floating-promises)
build({
	entryPoints: ['src/index.js'],
	outdir: 'dist',
	format: 'cjs',
	external: [],
	sourcemap: true,
})
