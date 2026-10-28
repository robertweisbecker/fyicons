import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCursorFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCursorFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M1.69536 3.60374C1.28834 2.42169 2.42105 1.29016 3.60258 1.69749L13.0655 4.96018C14.4646 5.44303 14.3931 7.44675 12.9629 7.82834L11.045 8.33909L13.3526 10.6467C14.0998 11.3943 14.0997 12.6063 13.3526 13.3537C12.6051 14.1008 11.393 14.1008 10.6456 13.3537L8.33598 11.0442L7.82524 12.9651C7.44312 14.3943 5.44213 14.4658 4.95903 13.0676L1.69536 3.60374Z" fill="currentColor" /></SvgRoot>;
});
export default IconCursorFill;
