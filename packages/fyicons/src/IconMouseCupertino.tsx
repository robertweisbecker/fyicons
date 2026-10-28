import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMouseCupertino = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMouseCupertino(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="mouse-cupertino"><path d="M11.5 7.87143C11.5 6.74766 11.4061 5.32004 11.3105 4.15858C11.2072 2.90188 10.2533 1.89077 9.01091 1.67531C8.34273 1.55944 7.65843 1.55923 6.99024 1.67511C5.74704 1.8907 4.79681 2.90572 4.69439 4.16331C4.59718 5.35687 4.5 6.81449 4.5 7.87143C4.5 10.1793 4.5 12.5 5.5 13.6857C6.39181 14.7431 9.54564 14.8174 10.5 13.6857C11.5 12.5 11.5 9.98571 11.5 7.87143Z" stroke="currentColor" /><path d="M8.5 11C8.77614 11 9 11.2239 9 11.5C8.72386 11.5 8.5 11.7239 8.5 12C8.5 12.2464 8.67848 12.45 8.91309 12.4912C8.77049 12.7915 8.46589 12.9999 8.11133 13C7.49768 13 7 12.5023 7 11.8887V11.75C7 11.3358 7.33579 11 7.75 11H8.5Z" fill="currentColor" /><path d="M7.5 11.5L8.25 10.75" stroke="currentColor" strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconMouseCupertino;
