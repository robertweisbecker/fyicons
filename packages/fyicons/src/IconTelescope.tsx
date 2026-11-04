import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTelescope = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTelescope(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="telescope"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7.5 9.5 4 4m-4-4-2 4" /><path stroke="currentColor" strokeLinejoin="round" d="M1.603 8.233A1 1 0 0 1 2.17 7l7.08-2.941 1.295 4.83-7.333 1.442a1 1 0 0 1-1.144-.671z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m4.5 6.5 1 3.25" /><rect width={3} height={7} x={8.992} y={3.093} stroke="currentColor" strokeLinejoin="round" rx={1} transform="rotate(-15 8.992 3.093)" /></SvgRoot>;
});
export default IconTelescope;
