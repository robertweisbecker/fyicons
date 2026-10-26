import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.646 2.646a2.621 2.621 0 0 1 3.707 3.707L7.769 11.94a6.5 6.5 0 0 1-3.677 1.838l-1.52.218a.5.5 0 0 1-.566-.566l.218-1.52A6.5 6.5 0 0 1 4.06 8.232zm3 .707a1.62 1.62 0 0 0-2.293 0L4.769 8.94a5.5 5.5 0 0 0-1.556 3.111l-.123.86.86-.122a5.5 5.5 0 0 0 3.112-1.556l5.586-5.586a1.62 1.62 0 0 0 0-2.293" /></SvgRoot>;
});
export default IconPen;
