import { transform } from '@svgr/core';

const darkPaint = new Set([
  'black',
  '#000',
  '#000000',
  '#18181b',
  '#090909',
  '#191919',
  '#171717',
  '#040404',
]);

function normalizeDisplayPaint(svg) {
  // Only rewrite artwork paint. Definitions, masks and clip paths retain their
  // source paint because it can affect luminance or masking semantics.
  let protectedDepth = 0;
  return svg.replace(/<\/?([\w:-]+)\b[^>]*>/g, (tag) => {
    const name = tag.match(/^<\/?([\w:-]+)/)?.[1]?.toLowerCase();
    if (!name) return tag;
    const closing = tag.startsWith('</');
    const protectedElement = ['defs', 'mask', 'clippath'].includes(name);
    if (closing) {
      if (protectedElement) protectedDepth = Math.max(0, protectedDepth - 1);
      return tag;
    }
    const insideProtected = protectedDepth > 0;
    if (protectedElement && !tag.endsWith('/>')) protectedDepth++;
    if (insideProtected || protectedElement) return tag;
    const changedPaint = new Set();
    const painted = tag.replace(
      /\b(fill|stroke)=(['"])(.*?)\2/gi,
      (attribute, key, quote, value) => {
        if (!darkPaint.has(value.toLowerCase())) return attribute;
        changedPaint.add(key.toLowerCase());
        return `${key}=${quote}currentColor${quote}`;
      },
    );
    return painted.replace(
      /\bstyle=(['"])(.*?)\1/gi,
      (attribute, quote, value) => {
        const next = value.replace(
          /(^|;)\s*(fill|stroke)\s*:\s*([^;]+)/gi,
          (decl, lead, key, paint) =>
            changedPaint.has(key.toLowerCase()) ||
            darkPaint.has(paint.trim().toLowerCase())
              ? `${lead}${key}:currentColor`
              : decl,
        );
        return `style=${quote}${next}${quote}`;
      },
    );
  });
}

function literal(value) {
  return { type: 'StringLiteral', value };
}

function instanceReference(prefix, id, suffix = '') {
  return {
    type: 'TemplateLiteral',
    expressions: [{ type: 'Identifier', name: 'idPrefix' }],
    quasis: [
      {
        type: 'TemplateElement',
        value: { raw: prefix, cooked: prefix },
        tail: false,
      },
      {
        type: 'TemplateElement',
        value: { raw: id + suffix, cooked: id + suffix },
        tail: true,
      },
    ],
  };
}

function addInstanceSafeIds(jsx) {
  const visit = (node) => {
    if (!node || typeof node !== 'object') return;
    if (
      node.type === 'JSXAttribute' &&
      node.name?.name === 'style' &&
      node.value?.expression?.type === 'ObjectExpression'
    ) {
      const properties = node.value.expression.properties;
      const seen = new Set();
      node.value.expression.properties = [...properties]
        .reverse()
        .filter((property) => {
          const key = property.key?.name ?? property.key?.value;
          if (key == null) return true;
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        })
        .reverse();
    }
    if (node.type === 'JSXAttribute' && node.value?.type === 'StringLiteral') {
      const name = node.name?.name;
      const value = node.value.value;
      if (name === 'id') {
        node.value = {
          type: 'JSXExpressionContainer',
          expression: {
            type: 'BinaryExpression',
            operator: '+',
            left: { type: 'Identifier', name: 'idPrefix' },
            right: literal(value),
          },
        };
      } else if (
        ['href', 'xlinkHref'].includes(name) &&
        value.startsWith('#')
      ) {
        node.value = {
          type: 'JSXExpressionContainer',
          expression: instanceReference('#', value.slice(1)),
        };
      } else if (/url\(#[^)]+\)/.test(value)) {
        const match = value.match(/^(.*?)url\(#([^)]+)\)(.*)$/);
        if (match)
          node.value = {
            type: 'JSXExpressionContainer',
            expression: instanceReference(
              match[1] + 'url(#',
              match[2],
              `)${match[3]}`,
            ),
          };
      }
    }
    if (
      node.type === 'ObjectProperty' &&
      node.value?.type === 'StringLiteral' &&
      /url\(#[^)]+\)/.test(node.value.value)
    ) {
      const value = node.value.value;
      const match = value.match(/^(.*?)url\(#([^)]+)\)(.*)$/);
      if (match)
        node.value = instanceReference(
          match[1] + 'url(#',
          match[2],
          `)${match[3]}`,
        );
    }
    for (const [key, value] of Object.entries(node)) {
      if (key === 'loc' || key === 'start' || key === 'end') continue;
      if (Array.isArray(value)) value.forEach(visit);
      else if (value && typeof value === 'object') visit(value);
    }
  };
  visit(jsx);
  const open = jsx.openingElement;
  open.attributes = open.attributes.filter(
    (attribute) => !['width', 'height'].includes(attribute.name?.name),
  );
  const attr = (name, expression) => ({
    type: 'JSXAttribute',
    name: { type: 'JSXIdentifier', name },
    value: { type: 'JSXExpressionContainer', expression },
  });
  const id = (name) => ({ type: 'Identifier', name });
  const member = (object, property) => ({
    type: 'MemberExpression',
    computed: true,
    object: id(object),
    property: literal(property),
  });
  const coalesce = (left, right) => ({
    type: 'LogicalExpression',
    operator: '??',
    left,
    right,
  });
  const label = {
    type: 'LogicalExpression',
    operator: '||',
    left: id('title'),
    right: {
      type: 'LogicalExpression',
      operator: '||',
      left: member('svgProps', 'aria-label'),
      right: member('svgProps', 'aria-labelledby'),
    },
  };
  open.attributes.push(
    { type: 'JSXSpreadAttribute', argument: id('svgProps') },
    attr('ref', id('ref')),
    attr('width', coalesce(member('svgProps', 'width'), id('size'))),
    attr('height', coalesce(member('svgProps', 'height'), id('size'))),
    attr('color', id('color')),
    attr(
      'aria-labelledby',
      coalesce(member('svgProps', 'aria-labelledby'), {
        type: 'ConditionalExpression',
        test: id('title'),
        consequent: {
          type: 'BinaryExpression',
          operator: '+',
          left: id('idPrefix'),
          right: literal('title'),
        },
        alternate: id('undefined'),
      }),
    ),
    attr('aria-label', coalesce(member('svgProps', 'aria-label'), id('title'))),
    attr(
      'role',
      coalesce(member('svgProps', 'role'), {
        type: 'ConditionalExpression',
        test: label,
        consequent: literal('img'),
        alternate: id('undefined'),
      }),
    ),
    attr(
      'aria-hidden',
      coalesce(member('svgProps', 'aria-hidden'), {
        type: 'ConditionalExpression',
        test: label,
        consequent: id('undefined'),
        alternate: { type: 'BooleanLiteral', value: true },
      }),
    ),
  );
  if (jsx.children) {
    jsx.children.unshift({
      type: 'JSXExpressionContainer',
      expression: {
        type: 'ConditionalExpression',
        test: id('title'),
        alternate: { type: 'NullLiteral' },
        consequent: {
          type: 'JSXElement',
          openingElement: {
            type: 'JSXOpeningElement',
            name: { type: 'JSXIdentifier', name: 'title' },
            attributes: [
              attr('id', {
                type: 'BinaryExpression',
                operator: '+',
                left: id('idPrefix'),
                right: literal('title'),
              }),
            ],
            selfClosing: false,
          },
          closingElement: {
            type: 'JSXClosingElement',
            name: { type: 'JSXIdentifier', name: 'title' },
          },
          children: [
            { type: 'JSXExpressionContainer', expression: id('title') },
          ],
        },
      },
    });
  }
}

function assertComponentName(name) {
  if (!/^[A-Z][A-Za-z0-9]*$/.test(name)) {
    throw new Error(`Invalid React icon component name: ${name}`);
  }
}

/** Render generated React components without writing to the filesystem. */
export async function renderReactIconFiles(icons) {
  const files = new Map();
  const exports = [];
  for (const icon of icons) {
    assertComponentName(icon.componentName);
    const componentName = icon.componentName;
    if (files.has(`src/icons/${componentName}.tsx`)) {
      throw new Error(`Duplicate React icon component: ${componentName}`);
    }
    const transformed = await transform(
      normalizeDisplayPaint(icon.svg),
      {
        typescript: true,
        jsxRuntime: 'automatic',
        expandProps: false,
        dimensions: true,
        plugins: ['@svgr/plugin-jsx'],
        prettier: false,
        svgo: false,
        template: (variables, { tpl }) => {
          addInstanceSafeIds(variables.jsx);
          return tpl`
          import * as React from 'react';
          import type { IconProps } from './types';
          const ${variables.componentName} = React.forwardRef<SVGSVGElement, IconProps>(function ${variables.componentName}(props, ref) {
            const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
            const { size = 16, color, title, ...svgProps } = props;
            return ${variables.jsx};
          });
          export default ${variables.componentName};
        `;
        },
      },
      { componentName },
    );
    const code = transformed;
    files.set(`src/icons/${componentName}.tsx`, code.trimEnd() + '\n');
    exports.push(
      `export { default as ${componentName} } from './${componentName}';`,
    );
  }
  files.set(
    'src/icons/types.ts',
    "import type { SVGProps } from 'react';\n\nexport type IconProps = SVGProps<SVGSVGElement> & { size?: number | string; title?: string };\n",
  );
  files.set(
    'src/icons/index.ts',
    "export type { IconProps } from './types';\n" + exports.join('\n') + '\n',
  );
  files.set(
    'src/icons/registry.ts',
    `import type { ComponentType } from 'react';\nimport type { IconProps } from './types';\nimport * as icons from './index';\n\nexport const iconBySourceId: Record<string, ComponentType<IconProps>> = {\n${icons.map((icon) => `  ${JSON.stringify(icon.id)}: icons.${icon.componentName},`).join('\n')}\n};\n`,
  );
  return files;
}
