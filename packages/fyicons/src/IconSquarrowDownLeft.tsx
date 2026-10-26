import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquarrowDownLeft = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquarrowDownLeft(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.5 14a2.5 2.5 0 0 0 2.5-2.5V7.328c0-2.227-2.693-3.342-4.268-1.767L6 9.293V6.5a.5.5 0 0 0-1 0v4q0 .05.009.099.016.075.054.142a.5.5 0 0 0 .338.25A.5.5 0 0 0 5.5 11h4a.5.5 0 0 0 0-1H6.707l3.733-3.732c.944-.945 2.56-.276 2.56 1.06V11.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3h4a.5.5 0 0 0 0-1h-4A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14z" /></SvgRoot>;
});
export default IconSquarrowDownLeft;
