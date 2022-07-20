import solidPlugin from 'vite-plugin-solid'
import { defineConfig } from 'vite'
import path from 'path'
import dts from 'vite-plugin-dts'


export default defineConfig({
    plugins: [solidPlugin(), dts()],
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
            '@/context' : path.resolve(__dirname, './src/context'),
        },
    },
})