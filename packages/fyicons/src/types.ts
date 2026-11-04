import type { ReactNode, SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement> & { size?: number | string; title?: string };

export type IconDefaults = Pick<IconProps, 'size' | 'color' | 'className' | 'style'>;
export type FyiProviderProps = IconDefaults & { children?: ReactNode };
