import test from 'node:test';
import assert from 'node:assert/strict';
import { deflateSync } from 'node:zlib';
import { decodeCatalog } from '../src/lib/catalog-codec.ts';

function pack(value) {
  return deflateSync(Buffer.from(JSON.stringify(value))).toString('base64');
}

test('production decoder preserves metadata, Unicode, optional omissions and row order', () => {
  const metadata = {
    name: 'Catalogue café ☕',
    version: 'fixture-version',
    source: {
      fileKey: 'fixture-file',
      sectionId: '1:2',
      sectionName: 'Éléments',
      pageId: '3:4',
      pageName: '図形',
      exportMethod: 'fixture',
      scope: 'Two fixture icons',
      exportedAt: '2026-10-14',
    },
    count: 2,
    native16Count: 2,
    duplicateGroups: {},
    duplicatePolicy: 'Fixture policy',
  };
  const sourceSvgs = [
    '<svg><title>Café ☕ &amp; 図形</title><path d="M1 1"/></svg>\r\n',
    '<svg>\n  <path d="M2 2"/>\n</svg>\n',
  ];
  const compact = {
    ...metadata,
    iconFields: [
      'filename',
      'id',
      'name',
      'componentName',
      'aliases',
      'notes',
      'duplicate',
      'variantCount',
      'variantSetName',
      'variantProperties',
      'originalName',
      'baseName',
      'sourceSectionId',
      'sourcePageId',
      'sha256',
      'variantSetId',
    ],
    iconArchive: pack([
      [
        'café-16.svg',
        '12:34',
        'café',
        'IconCafe',
        ['coffee', '☕'],
        [],
        false,
        0,
        '',
        { Style: '図形' },
        'Café',
        'café',
        '1:2',
        '3:4',
        'first-hash',
        '56:78',
      ],
      [
        'second-16.svg',
        '90:12',
        'second',
        'IconSecond',
        [],
        [],
        true,
        2,
        null,
        null,
        'Second',
        'second',
        '1:2',
        '3:4',
        'second-hash',
        null,
      ],
    ]),
    svgArchive: pack(sourceSvgs),
  };

  assert.deepEqual(decodeCatalog(compact), {
    ...metadata,
    icons: [
      {
        filename: 'café-16.svg',
        id: '12:34',
        name: 'café',
        componentName: 'IconCafe',
        aliases: ['coffee', '☕'],
        notes: [],
        duplicate: false,
        variantCount: 0,
        variantSetName: '',
        variantProperties: { Style: '図形' },
        variantSetId: '56:78',
        originalName: 'Café',
        baseName: 'café',
        sourceSectionId: '1:2',
        sourcePageId: '3:4',
        sha256: 'first-hash',
        svg: sourceSvgs[0],
        width: 16,
        height: 16,
        file: 'icons/café-16.svg',
        sourceUrl:
          'https://www.figma.com/design/fixture-file/icons-astra?node-id=12-34',
      },
      {
        filename: 'second-16.svg',
        id: '90:12',
        name: 'second',
        componentName: 'IconSecond',
        aliases: [],
        notes: [],
        duplicate: true,
        variantCount: 2,
        originalName: 'Second',
        baseName: 'second',
        sourceSectionId: '1:2',
        sourcePageId: '3:4',
        sha256: 'second-hash',
        svg: sourceSvgs[1],
        width: 16,
        height: 16,
        file: 'icons/second-16.svg',
        sourceUrl:
          'https://www.figma.com/design/fixture-file/icons-astra?node-id=90-12',
      },
    ],
  });
});

test('production decoder keeps explicit source URLs and reconstructs absent URLs', () => {
  const compact = {
    source: { fileKey: 'fixture-file' },
    iconFields: ['id', 'filename', 'sourceUrl'],
    iconArchive: pack([
      [
        '1:2',
        'custom-16.svg',
        'https://www.figma.com/design/other-file/source?node-id=9-8',
      ],
      ['3:4', 'default-16.svg', null],
      ['5:6', 'empty-16.svg', ''],
    ]),
    svgArchive: pack(['<svg/>', '<svg/>', '<svg/>']),
  };
  assert.deepEqual(
    decodeCatalog(compact).icons.map(({ sourceUrl }) => sourceUrl),
    [
      'https://www.figma.com/design/other-file/source?node-id=9-8',
      'https://www.figma.com/design/fixture-file/icons-astra?node-id=3-4',
      '',
    ],
  );
});
