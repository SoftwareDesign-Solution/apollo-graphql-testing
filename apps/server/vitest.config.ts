/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
    root: __dirname,
    plugins: [nxViteTsPaths()],
    test: {
        globals: true, // Falls du globale Variablen wie `describe` und `it` verwendest
        environment: 'node', // Da es sich um ein Node.js-Projekt handelt
        coverage: {
            reporter: ['text', 'json', 'html'], // Coverage-Reports (optional)
            all: true, // Coverage für alle Dateien aktivieren
        },
    },
});
