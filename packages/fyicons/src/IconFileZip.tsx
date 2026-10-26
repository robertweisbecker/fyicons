import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileZip = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileZip(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.879 1a2 2 0 0 1 1.414.586l2.121 2.121A2 2 0 0 1 13 5.121V12.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5V3a2 2 0 0 1 2-2zM8 13H7v-1h1zm-1-1H6v-1h1zm1-1H7v-1h1zm-1-1H6V9h1zm-.005-4h1V4H7V2H5a1 1 0 0 0-1 1v9.5A1.5 1.5 0 0 0 5.5 14H6v-1h1v1h3.5a1.5 1.5 0 0 0 1.5-1.5V5.121a1 1 0 0 0-.293-.707L9.586 2.293A1 1 0 0 0 8.879 2H8v2h.5a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-3 0v-3a.5.5 0 0 1 .5-.5h.495zm.502 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1" /></SvgRoot>;
});
export default IconFileZip;
