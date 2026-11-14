import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridRuler = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGridRuler(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="grid-ruler"><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" d="m8.116 15.116-1.232-1.232a1.25 1.25 0 0 1 0-1.768l5.232-5.232a1.25 1.25 0 0 1 1.768 0l1.232 1.232a1.25 1.25 0 0 1 0 1.768l-5.232 5.232a1.25 1.25 0 0 1-1.768 0ZM11.5 7.5l1.25 1.25M9.5 9.5l1.25 1.25m-3.25.75 1.25 1.25" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.5 13.5v-11m10 1h-11" /><path fill="currentColor" d="M8.5 8H9V7h-.5zm-6-1a.5.5 0 0 0 0 1zm6 .5V7h-6v1h6zm-4 5.5H5v-1h-.5zm-2-1a.5.5 0 0 0 0 1zm2 .5V12h-2v1h2z" /><path fill="currentColor" d="M8 8.5V9H7v-.5zm-1-6a.5.5 0 0 1 1 0zm.5 6H7v-6h1v6zm5.5-4V5h-1v-.5zm-1-2a.5.5 0 0 1 1 0zm.5 2H12v-2h1v2z" />{props.children}</SvgRoot>;
});
export default IconGridRuler;
