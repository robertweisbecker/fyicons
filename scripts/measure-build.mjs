import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
async function files(dir) {
  const items = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(items.map(item => item.isDirectory() ? files(path.join(dir, item.name)) : path.join(dir, item.name)))).flat();
}
const output = await files('dist');
const bytes = (await Promise.all(output.map(async file => (await stat(file)).size))).reduce((a, b) => a + b, 0);
console.log('Static deployment: ' + output.length + ' files, ' + (bytes / 1024 / 1024).toFixed(2) + ' MiB (' + bytes + ' bytes). No server functions.');
if (bytes > 3 * 1024 * 1024) throw new Error('Build exceeds the 3 MiB deployment budget. Check for duplicate icon data or media.');
