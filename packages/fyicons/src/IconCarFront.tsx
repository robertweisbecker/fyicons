import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCarFront = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCarFront(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m2.585 6.33 1-2a1.5 1.5 0 0 1 1.342-.83h6.146a1.5 1.5 0 0 1 1.342.83l1 2a.81.81 0 0 1-.724 1.17H3.309a.81.81 0 0 1-.724-1.17" /><path stroke="currentColor" strokeLinecap="square" d="M3.382 13.5h-.764a.12.12 0 0 1-.118-.118V12a.5.5 0 0 1 1 0v1.382a.12.12 0 0 1-.118.118Zm10 0h-.764a.12.12 0 0 1-.118-.118V12a.5.5 0 0 1 1 0v1.382a.12.12 0 0 1-.118.118Z" /><path stroke="currentColor" strokeLinejoin="round" d="M13.5 7.5h-11a1 1 0 0 0-1 1v3h13v-3a1 1 0 0 0-1-1Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 6.5h1m-13 0h1" /><path stroke="currentColor" strokeLinecap="round" d="M10.5 9.5h-5" /><circle cx={12.5} cy={9.5} r={0.75} fill="currentColor" /><circle cx={3.5} cy={9.5} r={0.75} fill="currentColor" /></SvgRoot>;
});
export default IconCarFront;
