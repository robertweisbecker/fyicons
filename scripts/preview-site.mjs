import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const { values } = parseArgs({
  options: {
    port: { type: 'string', default: '4173' },
    host: { type: 'string', default: '127.0.0.1' },
  },
});
const root = fileURLToPath(new URL('../apps/site/out/', import.meta.url));
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
};

await stat(resolve(root, 'index.html'));
createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, 'http://localhost').pathname,
    );
    if (
      basePath &&
      pathname !== basePath &&
      !pathname.startsWith(basePath + '/')
    )
      throw new Error('Not found');
    const relative = pathname.slice(basePath.length);
    let file = resolve(root, '.' + relative);
    if (file !== root.slice(0, -1) && !file.startsWith(root))
      throw new Error('Not found');
    if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
    const body = await readFile(file);
    response.writeHead(200, {
      'Content-Type': types[extname(file)] || 'application/octet-stream',
    });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch {
    const body = await readFile(resolve(root, '404.html')).catch(() =>
      Buffer.from('Not found'),
    );
    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(request.method === 'HEAD' ? undefined : body);
  }
}).listen(Number(values.port), values.host, () => {
  console.log(
    `Static preview: http://${values.host}:${values.port}${basePath}/`,
  );
});
