import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFastBackward = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFastBackward(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M13.572 4.178a.966.966 0 0 1 1.423.852v5.941a.966.966 0 0 1-1.423.852L8.498 9.102v1.869a.966.966 0 0 1-1.423.852L1.533 8.852a.966.966 0 0 1 0-1.703l5.542-2.971a.966.966 0 0 1 1.423.852v1.868zM2.061 8l5.437 2.914V5.085zm6.497 0 5.437 2.914V5.085z" /></SvgRoot>;
});
export default IconFastBackward;
