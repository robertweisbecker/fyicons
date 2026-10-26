import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDPad = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDPad(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.646 9.146a.5.5 0 0 1 .708 0l1.5 1.5A.5.5 0 0 1 10 11v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a.5.5 0 0 1 .146-.354zM7 11.207V13h2v-1.793l-1-1zM5 6a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5A.5.5 0 0 1 5 10H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm7.75 0c.69 0 1.25.56 1.25 1.25v1.5c0 .69-.56 1.25-1.25 1.25H11a.5.5 0 0 1-.354-.146l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5A.5.5 0 0 1 11 6zM3 7v2h1.793l1-1-1-1zm7.207 1 1 1h1.543a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25h-1.543zM9 2a1 1 0 0 1 1 1v2a.5.5 0 0 1-.146.354l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5A.5.5 0 0 1 6 5V3a1 1 0 0 1 1-1zM7 4.793l1 1 1-1V3H7z" /></SvgRoot>;
});
export default IconDPad;
