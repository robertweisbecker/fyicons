import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileTable = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileTable(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="file-table"><path fill="currentColor" d="M8.298 1a2.5 2.5 0 0 1 1.94.924l2.65 3.26.008.012.034.05.012.025a.5.5 0 0 1 .057.225L13 5.5v7a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v9.5A1.5 1.5 0 0 0 5.5 14h5a1.5 1.5 0 0 0 1.5-1.5V6h-1.5A1.5 1.5 0 0 1 9 4.5V2.177A1.5 1.5 0 0 0 8.298 2zm5.5 6a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5zm-2 3v1H10v-1zM6 12h1.5v-1H6zm2.5-2H10V9H8.5zM6 10h1.5V9H6zm4-5.5a.5.5 0 0 0 .5.5h.913L10 3.352z" /></SvgRoot>;
});
export default IconFileTable;
