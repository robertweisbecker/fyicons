import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShapes = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShapes(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="shapes"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 9.5h4v4h-4z" /><rect width={4.67} height={4.67} x={9.165} y={9.125} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={2.335} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.184 6.5h4.632a.25.25 0 0 0 .217-.375l-2.317-4.001a.25.25 0 0 0-.432 0l-2.317 4a.25.25 0 0 0 .217.376M4.5 1.75 7.25 4.5 4.5 7.25 1.75 4.5z" />{props.children}</SvgRoot>;
});
export default IconShapes;
