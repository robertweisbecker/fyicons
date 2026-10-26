import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconKbdCommandSquare = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconKbdCommandSquare(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3z" /><path fill="currentColor" d="M10 4.5a1.5 1.5 0 0 1 0 3h-.5v1h.5A1.5 1.5 0 1 1 8.5 10v-.5h-1v.5A1.5 1.5 0 1 1 6 8.5h.5v-1H6A1.5 1.5 0 1 1 7.5 6v.5h1V6A1.5 1.5 0 0 1 10 4.5m-4 5a.5.5 0 1 0 .5.5v-.5zm3.5.5a.5.5 0 1 0 .5-.5h-.5zm-2-1.5h1v-1h-1zM6 5.5a.5.5 0 0 0 0 1h.5V6a.5.5 0 0 0-.5-.5m4 0a.5.5 0 0 0-.5.5v.5h.5a.5.5 0 0 0 0-1" /></SvgRoot>;
});
export default IconKbdCommandSquare;
