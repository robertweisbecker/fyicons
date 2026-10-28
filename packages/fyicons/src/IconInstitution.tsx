import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconInstitution = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconInstitution(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="institution"><path fill="currentColor" d="M7.463 1.749a1 1 0 0 1 1.074 0l4.933 3.138A1.147 1.147 0 0 1 13 6.99V13h.5a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1H3V6.99a1.144 1.144 0 0 1-.47-2.102zM4 12.999h8V7H4zm1.5-5a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5M8 8a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 8 8m2.5 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5M3.067 5.732A.146.146 0 0 0 3.145 6h9.71a.146.146 0 0 0 .078-.269L8 2.592zM8 4.001a.75.75 0 1 1 0 1.5A.75.75 0 0 1 8 4" /></SvgRoot>;
});
export default IconInstitution;
