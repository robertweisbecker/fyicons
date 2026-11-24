import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCarFront = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCarFront(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="car-front"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 5.652c0 .468.38.848.848.848h8.304a.848.848 0 0 0 .795-1.143l-.695-1.878a1.5 1.5 0 0 0-1.407-.979h-5.69a1.5 1.5 0 0 0-1.406.979l-.696 1.878A.9.9 0 0 0 3 5.652" /><path stroke="currentColor" strokeLinecap="square" d="M2.5 11.5V13a.5.5 0 0 1-1 0v-1.5zm12 0V13a.5.5 0 0 1-1 0v-1.5z" /><path stroke="currentColor" strokeLinejoin="round" d="M1.5 11.5v-3a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v3z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13 5.5h1.5M3 5.5H1.5" /><path stroke="currentColor" strokeLinecap="square" d="M8.5 9.5h-1" /><circle cx={12.25} cy={8.75} r={0.75} fill="currentColor" /><circle cx={3.75} cy={8.75} r={0.75} fill="currentColor" />{props.children}</SvgRoot>;
});
export default IconCarFront;
