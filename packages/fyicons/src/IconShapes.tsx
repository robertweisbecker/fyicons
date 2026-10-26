import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShapes = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShapes(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 9.5h4v4h-4z" /><rect width={5} height={5} x={9.5} y={8.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={2.5} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.79 2.574a.25.25 0 0 1 .42 0l2.29 3.54a.25.25 0 0 1-.21.386H9.71a.25.25 0 0 1-.21-.386zM4.5 1.5l3 3-3 3-3-3z" /></SvgRoot>;
});
export default IconShapes;
