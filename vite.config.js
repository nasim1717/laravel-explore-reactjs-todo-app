import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from "@vitejs/plugin-react";
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        react(),

    ],
    build: {
        outDir: 'public', // Output directory for the build files
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),
        },
    },
});
