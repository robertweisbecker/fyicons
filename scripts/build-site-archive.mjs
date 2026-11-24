import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { decodeCatalog } from '../apps/site/src/lib/catalog-codec.ts';
import {
  categorizeIcons,
  parseIconCategories,
} from '../apps/site/src/lib/icon-categories.ts';
import { createIconArchive } from '../apps/site/src/lib/icon-archive.ts';

const root = new URL('../', import.meta.url);
const defaultOutput = new URL('apps/site/public/downloads/fyicons.zip', root);

/** Build the same complete archive as selection downloads, outside the browser. */
export async function buildSiteArchive(output = defaultOutput) {
  const [compact, rules, readme, license] = await Promise.all([
    readFile(new URL('apps/site/src/data/catalog-runtime.json', root), 'utf8'),
    readFile(new URL('apps/site/public/icon-categories.json', root), 'utf8'),
    readFile(new URL('apps/site/src/data/README.txt', root), 'utf8'),
    readFile(new URL('LICENSE', root), 'utf8'),
  ]);
  const catalog = decodeCatalog(JSON.parse(compact));
  const exported = [];
  for (let index = 0; index < catalog.icons.length; index += 24) {
    exported.push(
      ...(await Promise.all(
        catalog.icons.slice(index, index + 24).map(async (icon) => {
          const svg = await readFile(
            new URL(`packages/fyicons/svg/${icon.filename}`, root),
            'utf8',
          );
          if (
            !/^[a-f0-9]{64}$/.test(icon.sha256) ||
            createHash('sha256').update(svg).digest('hex') !== icon.sha256
          )
            throw new Error(`SVG checksum mismatch: ${icon.filename}`);
          return { ...icon, svg };
        }),
      )),
    );
  }
  const { icons, categories } = categorizeIcons(
    exported,
    parseIconCategories(JSON.parse(rules)),
  );
  const metadata = {
    ...catalog,
    categories,
    icons: icons.map(({ svg: _svg, ...record }) => record),
  };
  const archive = createIconArchive(icons, metadata, readme, license);
  const sourceDirectory = new URL('../icon-sources/', output);
  await mkdir(sourceDirectory, { recursive: true });
  for (let index = 0; index < icons.length; index += 24) {
    await Promise.all(
      icons
        .slice(index, index + 24)
        .map((icon) =>
          writeFile(new URL(`${icon.sha256}.svg`, sourceDirectory), icon.svg),
        ),
    );
  }
  await mkdir(dirname(fileURLToPath(output)), { recursive: true });
  await writeFile(output, archive);
  return { count: icons.length, bytes: archive.byteLength };
}

if (
  process.argv[1] &&
  pathToFileURL(process.argv[1]).href === import.meta.url
) {
  const { count, bytes } = await buildSiteArchive();
  console.log(`Built website download: ${count} icons, ${bytes} bytes.`);
}
