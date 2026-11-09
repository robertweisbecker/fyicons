function visit(node, callback) {
  callback(node);
  node.children?.forEach((child) => visit(child, callback));
}

function tag(node) {
  return node.type === 'element' ? node.tagName : node.name;
}

function text(node) {
  if (node.type === 'text') return node.value;
  return node.children?.map(text).join('') ?? '';
}

function id(node) {
  return (
    node.properties?.id ??
    node.attributes?.find((attribute) => attribute.name === 'id')?.value
  );
}

function slug(title) {
  return (
    title
      .normalize('NFKD')
      .replace(/\p{M}/gu, '')
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s_-]/gu, '')
      .trim()
      .replace(/[\s_-]+/g, '-') || 'section'
  );
}

function element(tagName, properties, children = []) {
  return { type: 'element', tagName, properties, children };
}

// MDX expression attributes require both source text and its ESTree form.
function headingsAttribute(headings) {
  return {
    type: 'mdxJsxAttribute',
    name: 'headings',
    value: {
      type: 'mdxJsxAttributeValueExpression',
      value: JSON.stringify(headings),
      data: {
        estree: {
          type: 'Program',
          sourceType: 'module',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'ArrayExpression',
                elements: headings.map((heading) => ({
                  type: 'ObjectExpression',
                  properties: Object.entries(heading).map(([key, value]) => ({
                    type: 'Property',
                    kind: 'init',
                    method: false,
                    shorthand: false,
                    computed: false,
                    key: { type: 'Identifier', name: key },
                    value: { type: 'Literal', value },
                  })),
                })),
              },
            },
          ],
        },
      },
    },
  };
}

export default function rehypeDocHeadings() {
  return (tree) => {
    const owners = new Map();
    visit(tree, (node) => {
      if (typeof id(node) === 'string') owners.set(id(node), node);
    });
    const used = new Set();
    const headings = [];
    visit(tree, (node) => {
      const name = tag(node);
      if (!/^h[1-6]$/.test(name ?? '')) return;
      const title = text(node).replace(/\s+/g, ' ').trim();
      if (!title) return;
      const base = slug(title);
      let target = base;
      let suffix = 0;
      while (
        used.has(target) ||
        (owners.has(target) && owners.get(target) !== node)
      ) {
        target = `${base}-${++suffix}`;
      }
      used.add(target);
      const previous = id(node);
      if (node.type === 'element') {
        node.properties = {
          ...node.properties,
          id: target,
          'data-heading-title': title,
        };
      } else {
        node.attributes = (node.attributes ?? []).filter(
          (attribute) => attribute.name !== 'id',
        );
        node.attributes.push({
          type: 'mdxJsxAttribute',
          name: 'id',
          value: target,
        });
      }
      // Existing published fragment links remain valid when a title supplies a new ID.
      const aliases =
        previous && previous !== target
          ? [
              element('span', {
                id: previous,
                className: ['mdx-heading-alias'],
                ariaHidden: 'true',
              }),
            ]
          : [];
      node.children = [
        ...aliases,
        element(
          'a',
          {
            href: `#${target}`,
            className: ['mdx-heading-link'],
            ariaLabel: title,
          },
          node.children,
        ),
      ];
      const level = Number(name[1]);
      if (level >= 2 && level <= 4) headings.push({ id: target, title, level });
    });
    const imports = tree.children.filter((node) => node.type === 'mdxjsEsm');
    const content = tree.children.filter((node) => node.type !== 'mdxjsEsm');
    tree.children = [
      ...imports,
      {
        type: 'mdxJsxFlowElement',
        name: 'DocsArticle',
        attributes: [headingsAttribute(headings)],
        children: content,
      },
    ];
  };
}
