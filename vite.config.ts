import { fileURLToPath, URL } from 'node:url';
import { readFile } from 'node:fs/promises';
import { watch } from 'node:fs';
import { updateCategorySchema } from './scripts/lib/category-schema.ts';
import path from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

async function watchCategorySchema(
  root: string,
  server: { once(event: 'close', listener: () => void): unknown } | null,
) {
  // Invalid or partially saved inventory JSON retains the last valid completions.
  const refresh = () => updateCategorySchema(root).catch(() => {});
  await refresh();
  let timer: ReturnType<typeof setTimeout>;
  let pending = Promise.resolve();
  const watcher = watch(path.join(root, 'icons'), (_event, changed) => {
    if (changed !== 'manifest.json') return;
    clearTimeout(timer);
    timer = setTimeout(() => {
      pending = pending.then(refresh);
    }, 75);
  });
  server?.once('close', () => {
    clearTimeout(timer);
    watcher.close();
  });
}

function editableCategories(): Plugin {
  return {
    name: 'editable-icon-categories',
    async configureServer(server) {
      await watchCategorySchema(server.config.root, server.httpServer);
    },
    async configurePreviewServer(server) {
      await watchCategorySchema(server.config.root, server.httpServer);
      const base = server.config.base;
      const endpoint = `${base.startsWith('/') ? base : '/'}icon-categories.json`;
      server.middlewares.use(async (request, response, next) => {
        if (request.url?.split('?')[0] !== endpoint) return next();
        response.setHeader('Cache-Control', 'no-store');
        try {
          const json = await readFile(
            path.join(server.config.publicDir, 'icon-categories.json'),
            'utf8',
          );
          response.setHeader('Content-Type', 'application/json; charset=utf-8');
          response.end(request.method === 'HEAD' ? undefined : json);
        } catch {
          response.statusCode = 503;
          response.end('Icon categories are unavailable.');
        }
      });
    },
  };
}

export default defineConfig({
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  plugins: [react(), tailwindcss(), editableCategories()],
  // Relative assets work at icons.bob.fyi and at a GitHub project subpath.
  base: './',
  build: {
    sourcemap: false,
    rolldownOptions: {
      input: ['index.html', 'library/index.html', 'examples/index.html'],
    },
  },
});
