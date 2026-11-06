import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHookSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHookSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="hook-simple"><circle cx={4.5} cy={3.5} r={2} stroke="currentColor" strokeLinecap="round" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 5.5v5a4 4 0 0 0 8 0v-6m0 0-3 3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 7.5h1a2 2 0 0 1 2 2" /></SvgRoot>;
});
export default IconHookSimple;
