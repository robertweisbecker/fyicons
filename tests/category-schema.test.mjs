import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import {
  createCategorySchema,
  updateCategorySchema,
} from '../scripts/lib/category-schema.ts';

test('schema suggests sidebar icons and keywords without depending on category definitions', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'fyicons-schema-'));
  try {
    await mkdir(path.join(root, 'apps/site/public'), { recursive: true });
    await mkdir(path.join(root, 'icons'));
    const saveInventory = async (names) => {
      await writeFile(
        path.join(root, 'icons/manifest.json'),
        JSON.stringify({ icons: names.map((name) => ({ name })) }),
      );
      await updateCategorySchema(root);
      const content = await readFile(
        path.join(root, 'apps/site/public/icon-categories.schema.json'),
        'utf8',
      );
      assert.equal(
        content,
        JSON.stringify(createCategorySchema(names), null, 2) + '\n',
      );
      return JSON.parse(content);
    };
    let schema = await saveInventory(['anchor', 'arrow-up']);
    assert.deepEqual(schema.required, ['categories']);
    assert.ok(!('icons' in schema.properties));
    assert.ok(!('categoryId' in schema.definitions));
    assert.deepEqual(schema.definitions.iconName.enum, ['anchor', 'arrow-up']);
    assert.deepEqual(schema.properties.categories.items.required, [
      'id',
      'name',
      'icon',
      'keywords',
    ]);
    const keywordSchema =
      schema.properties.categories.items.properties.keywords.items;
    assert.equal(keywordSchema.type, 'string');
    assert.ok(
      !('enum' in keywordSchema),
      'new keywords are allowed before an icon exists',
    );
    assert.deepEqual(keywordSchema.examples, ['anchor', 'arrow', 'up']);
    assert.deepEqual(
      schema.properties.categories.items.properties.exactNames.items.anyOf[0],
      { $ref: '#/definitions/iconName' },
      'exact name completions share the catalog icon list',
    );
    await writeFile(
      path.join(root, 'apps/site/public/icon-categories.json'),
      '{ unfinished category edit',
    );
    schema = await saveInventory(['anchor', 'arrow-up', 'file-new']);
    assert.deepEqual(schema.definitions.iconName.enum, [
      'anchor',
      'arrow-up',
      'file-new',
    ]);
    assert.ok(
      schema.properties.categories.items.properties.keywords.items.examples.includes(
        'file',
      ),
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
