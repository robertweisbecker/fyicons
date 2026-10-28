import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShapes = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShapes(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="shapes"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 9.5h4v4h-4z" /><rect width={5} height={5} x={8.5} y={8.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={2.5} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.785 2.616a.25.25 0 0 1 .43 0l2.063 3.507a.25.25 0 0 1-.215.377H8.937a.25.25 0 0 1-.215-.377zM4.5 1.75 7.25 4.5 4.5 7.25 1.75 4.5z" /></SvgRoot>;
});
export default IconShapes;
