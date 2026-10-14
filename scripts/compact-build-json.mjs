import { readFile, writeFile } from 'node:fs/promises';

// Keep editable sources readable while avoiding whitespace in deployed JSON.
for (const name of ['icon-categories.schema.json', 'icon-categories.json']) {
  const file = `dist/${name}`;
  const value = JSON.parse(await readFile(file, 'utf8'));
  await writeFile(file, JSON.stringify(value) + '\n');
}
