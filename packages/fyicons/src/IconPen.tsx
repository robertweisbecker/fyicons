import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pen"><path fill="currentColor" d="M10.397 1.897a2.621 2.621 0 0 1 3.707 3.707L7.768 11.94a6.5 6.5 0 0 1-3.677 1.838l-1.52.217a.5.5 0 0 1-.566-.565l.218-1.52A6.5 6.5 0 0 1 4.06 8.232zm3 .707a1.62 1.62 0 0 0-2.293 0L4.768 8.94a5.5 5.5 0 0 0-1.556 3.111l-.123.86.86-.123a5.5 5.5 0 0 0 3.112-1.555l6.336-6.336a1.62 1.62 0 0 0 0-2.293" /></SvgRoot>;
});
export default IconPen;
