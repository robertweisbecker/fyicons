import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShapes = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShapes(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><rect x={2.5} y={9.5} width={4} height={4} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><rect x={9} y={9} width={5} height={5} rx={2.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 2L14.0981 6.5H8.90192L11.5 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.5 1.5L7.5 4.5L4.5 7.5L1.5 4.5L4.5 1.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconShapes;
