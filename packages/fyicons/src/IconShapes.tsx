import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShapes = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShapes(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="shapes"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 9.5h4v4h-4z" /><rect width={4.75} height={4.75} x={9.125} y={9.125} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={2.375} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.409 2.124a.25.25 0 0 1 .432 0l2.317 4a.25.25 0 0 1-.217.376H9.31a.25.25 0 0 1-.217-.375zM4.5 1.75 7.25 4.5 4.5 7.25 1.75 4.5z" />{props.children}</SvgRoot>;
});
export default IconShapes;
