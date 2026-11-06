import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, realpath } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// The Changesets pack action can run prepack again. Verify its actual output
// against the tarball that passed the consumer checks before allowing publish.
export async function verifyPackedRelease(
  artifactDirectory,
  verificationFile = path.join(root, 'artifacts/verification.json'),
) {
  const directory = await realpath(artifactDirectory);
  const verification = JSON.parse(await readFile(verificationFile, 'utf8'));
  assert.equal(verification.package, 'fyicons', 'Unexpected verified package.');
  assert.equal(typeof verification.version, 'string');
  assert.match(verification.integrity, /^sha512-[A-Za-z0-9+/]{86}==$/);

  const plan = JSON.parse(
    await readFile(path.join(directory, 'publish-plan.json'), 'utf8'),
  );
  assert.equal(plan?.version, 1, 'Unsupported publish plan version.');
  assert.ok(
    Array.isArray(plan.plan) && plan.plan.every(Array.isArray),
    'Malformed publish plan groups.',
  );
  const releases = plan.plan.flat();
  assert.equal(releases.length, 1, 'Expected exactly one package to publish.');
  const [release] = releases;
  assert.equal(release?.kind, 'publish', 'Expected a publish release.');
  assert.equal(release.name, verification.package, 'Package name changed.');
  assert.equal(
    release.version,
    verification.version,
    'Package version changed.',
  );
  const relative = release.tarball?.path;
  assert.ok(
    typeof relative === 'string' &&
      relative.endsWith('.tgz') &&
      !path.isAbsolute(relative) &&
      !relative.includes('\\') &&
      relative
        .split('/')
        .every((part) => part && part !== '.' && part !== '..'),
    'Tarball path must stay inside the downloaded artifact.',
  );
  const tarball = await realpath(path.join(directory, relative));
  const resolvedRelative = path.relative(directory, tarball);
  assert.ok(
    resolvedRelative &&
      resolvedRelative !== '..' &&
      !resolvedRelative.startsWith(`..${path.sep}`) &&
      !path.isAbsolute(resolvedRelative),
    'Tarball path must stay inside the downloaded artifact.',
  );
  const bytes = await readFile(tarball);
  assert.equal(
    `sha256-${createHash('sha256').update(bytes).digest('base64')}`,
    release.tarball.integrity,
    'Tarball does not match the publish plan.',
  );
  const integrity = `sha512-${createHash('sha512').update(bytes).digest('base64')}`;
  assert.equal(
    integrity,
    verification.integrity,
    'Changesets tarball differs from the verified release tarball.',
  );
  return { package: release.name, version: release.version, integrity };
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
) {
  assert.ok(
    process.argv.length === 3 || process.argv.length === 4,
    'Usage: node scripts/verify-packed-release.mjs <artifact-directory> [verification-file]',
  );
  const result = await verifyPackedRelease(process.argv[2], process.argv[3]);
  console.log(
    `Verified publishing tarball: ${result.package}@${result.version}.`,
  );
}
