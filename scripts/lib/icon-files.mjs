import {
  lstat,
  realpath,
  readdir,
  readFile,
  mkdir,
  unlink,
  writeFile,
} from 'node:fs/promises';
import path from 'node:path';

function inside(root, target) {
  const relative = path.relative(root, target);
  return (
    relative === '' ||
    (!relative.startsWith(`..${path.sep}`) &&
      relative !== '..' &&
      !path.isAbsolute(relative))
  );
}

/** Check lexical and real containment, including existing ancestors of new files. */
export async function confinedPath(root, relative) {
  if (
    typeof relative !== 'string' ||
    !relative ||
    path.isAbsolute(relative) ||
    relative.includes('\\') ||
    relative.split('/').some((part) => !part || part === '.' || part === '..')
  )
    throw new Error(`Unsafe relative path: ${relative}`);
  const base = await realpath(root);
  const target = path.resolve(root, relative);
  if (!inside(path.resolve(root), target))
    throw new Error(`Path escapes root: ${relative}`);
  let ancestor = target;
  for (;;) {
    try {
      const resolved = await realpath(ancestor);
      if (!inside(base, resolved))
        throw new Error(`Symlink path escapes root: ${relative}`);
      break;
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      // A dangling symlink must not hide an escaping destination or source.
      const entry = await lstat(ancestor).catch((failure) => {
        if (failure.code !== 'ENOENT') throw failure;
        return null;
      });
      if (entry?.isSymbolicLink())
        throw new Error(`Dangling symlink: ${relative}`);
      ancestor = path.dirname(ancestor);
    }
  }
  return target;
}

/** Decode strictly so an import cannot silently replace invalid source bytes. */
export async function readSvgFile(root, relative) {
  const bytes = await readFile(await confinedPath(root, relative));
  return new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(
    bytes,
  );
}

/** Complete output-path and stale-file preflight before publication. */
export async function preparePublication(
  root,
  expected,
  managed = ['packages/fyicons/src'],
) {
  const directories = new Map();
  const entries = async (directory) => {
    if (!directories.has(directory)) {
      const target = await confinedPath(root, directory);
      directories.set(
        directory,
        await readdir(target).catch((error) => {
          if (error.code !== 'ENOENT') throw error;
          return [];
        }),
      );
    }
    return directories.get(directory);
  };
  const obsolete = [];
  for (const directory of managed) {
    const pattern =
      directory === 'icons' ? /\.svg$/ : /^Icon[A-Za-z0-9]+\.tsx$/;
    for (const name of await entries(directory)) {
      const file = `${directory}/${name}`;
      if (pattern.test(name) && !expected.has(file)) {
        const target = await confinedPath(root, file);
        const entry = await lstat(target);
        if (!entry.isFile())
          throw new Error(`Unsafe obsolete output file: ${file}`);
        obsolete.push(file);
      }
    }
  }
  const changed = new Map();
  for (const [file, content] of expected) {
    const target = await confinedPath(root, file);
    const entry = await lstat(target).catch((error) => {
      if (error.code !== 'ENOENT') throw error;
      return null;
    });
    if (entry && !entry.isFile())
      throw new Error(`Unsafe output file: ${file}`);
    const exactCase = (await entries(path.posix.dirname(file))).includes(
      path.posix.basename(file),
    );
    const current = exactCase ? await readFile(target, 'utf8') : null;
    if (current !== content) changed.set(file, content);
  }
  return { root, changed, obsolete };
}

/** Removing aliases first gives case-only replacements their exact new casing. */
export async function publishFiles(
  { root, changed, obsolete },
  io = { mkdir, unlink, writeFile },
) {
  for (const file of obsolete) await io.unlink(path.join(root, file));
  for (const [file, content] of changed) {
    const target = path.join(root, file);
    await io.mkdir(path.dirname(target), { recursive: true });
    await io.writeFile(target, content);
  }
}
