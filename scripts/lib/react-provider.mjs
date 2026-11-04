/** Generate the opt-in context entry without adding context to static icons. */
export function renderReactProviderFiles(icons) {
  return new Map([
    [
      'packages/fyicons/src/provider.tsx',
      `'use client';

import * as React from 'react';
import type { IconDefaults, IconProps, FyiProviderProps } from './types';

const IconDefaultsContext = /* @__PURE__ */ React.createContext<IconDefaults>({});

function mergeDefaults(parent: IconDefaults, local: IconDefaults): IconDefaults {
  return {
    size: local.size ?? parent.size,
    color: local.color ?? parent.color,
    className: [parent.className, local.className].filter(Boolean).join(' ') || undefined,
    style: parent.style || local.style ? { ...parent.style, ...local.style } : undefined,
  };
}

export function FyiProvider({ children, size, color, className, style }: FyiProviderProps) {
  const parent = React.useContext(IconDefaultsContext);
  const value = React.useMemo(
    () => mergeDefaults(parent, { size, color, className, style }),
    [parent, size, color, className, style],
  );
  return <IconDefaultsContext.Provider value={value}>{children}</IconDefaultsContext.Provider>;
}

export function createClientIcon(Icon: React.ComponentType<IconProps>, name: string) {
  const ClientIcon = React.forwardRef<SVGSVGElement, IconProps>(function FyiIcon(props, ref) {
    const defaults = React.useContext(IconDefaultsContext);
    return <Icon {...props} {...mergeDefaults(defaults, props)} ref={ref} />;
  });
  ClientIcon.displayName = name;
  return ClientIcon;
}
`,
    ],
    [
      'packages/fyicons/src/client.tsx',
      `'use client';

import { createClientIcon } from './provider';
export { FyiProvider } from './provider';
export type { IconProps, IconDefaults, FyiProviderProps } from './types';

${icons
  .map(
    ({ componentName }) =>
      `import Static${componentName} from './${componentName}';\nexport const ${componentName} = /* @__PURE__ */ createClientIcon(Static${componentName}, '${componentName}');`,
  )
  .join('\n')}
`,
    ],
  ]);
}
