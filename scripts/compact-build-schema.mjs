import { readFile, writeFile } from 'node:fs/promises';

const file = 'dist/icon-categories.schema.json';
const schema = JSON.parse(await readFile(file, 'utf8'));
await writeFile(file, JSON.stringify(schema) + '\n');
