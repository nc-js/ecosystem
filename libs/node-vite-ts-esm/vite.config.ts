import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
	build: {
		lib: {
			entry: new URL('src/index.ts', import.meta.url).pathname,
			formats: ['es'],
			fileName: () => 'index.mjs',
		},
	},
	plugins: [
		dts({
			insertTypesEntry: true,
		}),
	],
})
