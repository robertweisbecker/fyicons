'use client';
import type { ReactNode } from 'react';
import { IconRendererContext } from './UIIcon';
import { Icon } from './Icon';
export function IconCatalogBoundary({ children }: { children: ReactNode }) {
  return <IconRendererContext value={Icon}>{children}</IconRendererContext>;
}
