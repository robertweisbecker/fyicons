import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSpinner = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSpinner(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1.5V4.5" stroke="currentColor" strokeLinecap="round" /><path opacity={0.9} d="M11.8208 2.74146L10.0574 5.16851" stroke="currentColor" strokeLinecap="round" /><path opacity={0.8} d="M14.1816 5.99146L11.3285 6.91851" stroke="currentColor" strokeLinecap="round" /><path opacity={0.7} d="M14.1816 10.0085L11.3285 9.08149" stroke="currentColor" strokeLinecap="round" /><path opacity={0.6} d="M11.8208 13.2585L10.0574 10.8315" stroke="currentColor" strokeLinecap="round" /><path opacity={0.5} d="M8 14.5L8 11.5" stroke="currentColor" strokeLinecap="round" /><path opacity={0.4} d="M4.1792 13.2585L5.94256 10.8315" stroke="currentColor" strokeLinecap="round" /><path opacity={0.3} d="M1.81836 10.0085L4.67153 9.08149" stroke="currentColor" strokeLinecap="round" /><path opacity={0.2} d="M1.81836 5.99146L4.67153 6.91851" stroke="currentColor" strokeLinecap="round" /><path opacity={0.1} d="M4.1792 2.74146L5.94255 5.16851" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconSpinner;
