import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShapesPlus = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShapesPlus(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><rect x={2.5} y={9.5} width={4} height={4} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 9.5V13.5M13.5 11.5H9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 2L14.0981 6.5H8.90192L11.5 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.5 1.5L7.5 4.5L4.5 7.5L1.5 4.5L4.5 1.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconShapesPlus;
