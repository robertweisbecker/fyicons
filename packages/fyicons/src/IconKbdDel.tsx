import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconKbdDel = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconKbdDel(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="kbd-del"><path fill="currentColor" d="M12.5 3A2.5 2.5 0 0 1 15 5.5v5a2.5 2.5 0 0 1-2.5 2.5H5.796a2.5 2.5 0 0 1-1.72-.685L.672 9.089a1.5 1.5 0 0 1 0-2.178l3.404-3.225A2.5 2.5 0 0 1 5.796 3zM5.796 4a1.5 1.5 0 0 0-1.032.411L1.359 7.637a.5.5 0 0 0 0 .726l3.405 3.226A1.5 1.5 0 0 0 5.796 12H12.5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 4zm5.1 1.396a.5.5 0 1 1 .707.708L9.707 8l1.896 1.896a.5.5 0 1 1-.707.707L9 8.708l-1.897 1.896a.5.5 0 1 1-.707-.707L8.293 8 6.396 6.104a.5.5 0 1 1 .707-.708L9 7.293z" /></SvgRoot>;
});
export default IconKbdDel;
