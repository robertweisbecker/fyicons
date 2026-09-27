import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  plugins: [react(), tailwindcss()],
  // Relative assets work at icons.bob.fyi and at a GitHub project subpath.
  base: './',
  build: {
    sourcemap: false,
    rolldownOptions: { input: ['index.html', 'examples/index.html'] },
  },
});
