import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdtemp, mkdir, writeFile, rm, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { verifyPackedRelease } from '../../scripts/verify-packed-release.mjs';

async function fixture(t) {
  const directory = await mkdtemp(
    path.join(tmpdir(), 'fyicons-packed-release-'),
  );
  t.after(() => rm(directory, { recursive: true, force: true }));
  const artifact = path.join(directory, 'artifact');
  await mkdir(path.join(artifact, 'packages'), { recursive: true });
  const bytes = Buffer.from('verified tarball fixture');
  const verification = {
    package: 'fyicons',
    version: '0.3.0',
    integrity: `sha512-${createHash('sha512').update(bytes).digest('base64')}`,
  };
  const release = {
    kind: 'publish',
    name: 'fyicons',
    version: '0.3.0',
    tarball: {
      path: 'packages/fyicons-0.3.0.tgz',
      integrity: `sha256-${createHash('sha256').update(bytes).digest('base64')}`,
    },
  };
  const plan = { version: 1, plan: [[release]] };
  const verificationFile = path.join(directory, 'verification.json');
  await writeFile(verificationFile, JSON.stringify(verification));
  await writeFile(path.join(artifact, release.tarball.path), bytes);
  const writePlan = () =>
    writeFile(path.join(artifact, 'publish-plan.json'), JSON.stringify(plan));
  await writePlan();
  return {
    directory,
    artifact,
    bytes,
    verification,
    verificationFile,
    release,
    plan,
    writePlan,
    verify: () => verifyPackedRelease(artifact, verificationFile),
  };
}

test('the publishing tarball must equal the checked tarball', async (t) => {
  const f = await fixture(t);
  assert.deepEqual(await f.verify(), f.verification);
  const changed = Buffer.from('repacked after consumer verification');
  await writeFile(path.join(f.artifact, f.release.tarball.path), changed);
  f.release.tarball.integrity = `sha256-${createHash('sha256').update(changed).digest('base64')}`;
  await f.writePlan();
  await assert.rejects(f.verify(), /differs from the verified release tarball/);
});

test('the publishing plan must identify only the verified package and version', async (t) => {
  const f = await fixture(t);
  for (const [field, value, message] of [
    ['kind', 'tag-only', /Expected a publish release/],
    ['name', 'other-package', /Package name changed/],
    ['version', '0.3.1', /Package version changed/],
  ]) {
    const original = f.release[field];
    f.release[field] = value;
    await f.writePlan();
    await assert.rejects(f.verify(), message);
    f.release[field] = original;
  }
  f.plan.plan[0].push({ ...f.release });
  await f.writePlan();
  await assert.rejects(f.verify(), /Expected exactly one package/);
  for (const plan of [
    null,
    {},
    { version: 2, plan: [] },
    { version: 1, plan: [{}] },
  ]) {
    await writeFile(
      path.join(f.artifact, 'publish-plan.json'),
      JSON.stringify(plan),
    );
    await assert.rejects(f.verify(), /publish plan/);
  }
});

test('tarball paths cannot escape the downloaded artifact, including through symlinks', async (t) => {
  const f = await fixture(t);
  const outside = path.join(f.directory, 'outside.tgz');
  await writeFile(outside, f.bytes);
  for (const target of [
    '../outside.tgz',
    outside,
    'packages/../../outside.tgz',
    '..\\outside.tgz',
  ]) {
    f.release.tarball.path = target;
    await f.writePlan();
    await assert.rejects(f.verify(), /path must stay inside/);
  }
  await symlink(outside, path.join(f.artifact, 'packages', 'linked.tgz'));
  f.release.tarball.path = 'packages/linked.tgz';
  await f.writePlan();
  await assert.rejects(f.verify(), /path must stay inside/);
});

test('the publishing tarball must also match its plan integrity', async (t) => {
  const f = await fixture(t);
  f.release.tarball.integrity = 'sha256-wrong';
  await f.writePlan();
  await assert.rejects(f.verify(), /does not match the publish plan/);
});
