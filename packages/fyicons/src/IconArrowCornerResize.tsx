import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowCornerResize = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowCornerResize(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5.5 2a.5.5 0 0 1 0 1h-1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-1a.5.5 0 0 1 1 0v1a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm8 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V3.707L8.707 8H10.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.793L12.293 3H10.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconArrowCornerResize;
