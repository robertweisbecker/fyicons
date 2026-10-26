import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCheckThick = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCheckThick(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.861 4.357a.75.75 0 0 1 1.278.787l-4 6.5a.75.75 0 0 1-1.192.113l-2.75-3a.75.75 0 0 1 1.106-1.014l2.078 2.268z" /></SvgRoot>;
});
export default IconCheckThick;
