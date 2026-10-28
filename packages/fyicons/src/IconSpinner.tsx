import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSpinner = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSpinner(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="spinner"><path stroke="currentColor" strokeLinecap="round" d="M8 1.5v3" /><path stroke="currentColor" strokeLinecap="round" d="M11.82 2.741 10.058 5.17" opacity={0.9} /><path stroke="currentColor" strokeLinecap="round" d="m14.182 5.991-2.854.928" opacity={0.8} /><path stroke="currentColor" strokeLinecap="round" d="m14.182 10.009-2.854-.928" opacity={0.7} /><path stroke="currentColor" strokeLinecap="round" d="m11.82 13.259-1.763-2.427" opacity={0.6} /><path stroke="currentColor" strokeLinecap="round" d="M8 14.5v-3" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" d="m4.18 13.259 1.763-2.427" opacity={0.4} /><path stroke="currentColor" strokeLinecap="round" d="m1.818 10.009 2.854-.928" opacity={0.3} /><path stroke="currentColor" strokeLinecap="round" d="m1.818 5.991 2.854.928" opacity={0.2} /><path stroke="currentColor" strokeLinecap="round" d="M4.18 2.741 5.942 5.17" opacity={0.1} /></SvgRoot>;
});
export default IconSpinner;
