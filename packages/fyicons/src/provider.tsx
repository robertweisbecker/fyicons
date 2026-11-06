'use client';

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
