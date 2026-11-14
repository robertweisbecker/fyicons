import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCarFront = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCarFront(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="car-front"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m3.053 5.357.696-1.878A1.5 1.5 0 0 1 5.155 2.5h5.69a1.5 1.5 0 0 1 1.406.979l.696 1.878a.848.848 0 0 1-.795 1.143H3.848a.848.848 0 0 1-.795-1.143" /><path stroke="currentColor" strokeLinecap="square" d="M1.5 13v-1.5h1V13a.5.5 0 0 1-1 0Zm12 0v-1.5h1V13a.5.5 0 0 1-1 0Z" /><path stroke="currentColor" strokeLinejoin="round" d="M12.5 6.5h-9a2 2 0 0 0-2 2v3h13v-3a2 2 0 0 0-2-2Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13 5.5h1.5M3 5.5H1.5" /><path stroke="currentColor" strokeLinecap="square" d="M8.5 9.5h-1" /><circle cx={12.25} cy={8.75} r={0.75} fill="currentColor" /><circle cx={3.75} cy={8.75} r={0.75} fill="currentColor" />{props.children}</SvgRoot>;
});
export default IconCarFront;
