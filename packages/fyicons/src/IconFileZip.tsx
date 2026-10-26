import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileZip = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileZip(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.5 1a2.5 2.5 0 0 1 2 1l2.4 3.2a.5.5 0 0 1 .1.3v7a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v9.5A1.5 1.5 0 0 0 5.5 14H6v-1h1v1h3.5a1.5 1.5 0 0 0 1.5-1.5V5.666L9.7 2.6A1.5 1.5 0 0 0 8.5 2H8v2h.5a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-3 0v-3a.5.5 0 0 1 .5-.5h.495v2h1V4H7V2zm3 11H7v-1h1zm-1-1H6v-1h1zm1-1H7v-1h1zm-1-1H6V9h1zm.497-3a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1" /></SvgRoot>;
});
export default IconFileZip;
