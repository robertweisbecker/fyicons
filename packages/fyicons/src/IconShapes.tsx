import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShapes = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShapes(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="shapes"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 9.5h4v4h-4z" /><rect width={5} height={5} x={9} y={9} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={2.5} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.287 2.35a.25.25 0 0 1 .426 0l2.305 3.77a.25.25 0 0 1-.214.38H9.196a.25.25 0 0 1-.214-.38zM4.5 1.75 7.25 4.5 4.5 7.25 1.75 4.5z" /></SvgRoot>;
});
export default IconShapes;
