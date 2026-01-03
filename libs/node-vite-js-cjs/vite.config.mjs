import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
	build: {
		lib: {
			entry: new URL('src/index.js', import.meta.url).pathname,
			formats: ['cjs'],
			fileName: () => 'index.cjs',
		},
	},
	plugins: [
		dts({
			insertTypesEntry: true,
		}),
	],
})
