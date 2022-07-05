import solidPlugin from 'vite-plugin-solid'
import { defineConfig } from 'vite'
import path from 'path'


export default defineConfig({
    plugins: [solidPlugin()],
    build: {
        target: 'esnext',
        polyfillDynamicImport: false,
    },
    resolve:{
        alias:{
            '@' : path.resolve(__dirname, './src'),
            '@/pages' : path.resolve(__dirname, './src/pages'),
            '@/components' : path.resolve(__dirname, './src/components'),
            '@/style' : path.resolve(__dirname, './src/style'),
        },
    },
})