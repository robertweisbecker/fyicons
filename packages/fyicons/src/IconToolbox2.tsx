import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconToolbox2 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconToolbox2(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 1 11 3.5V5h.5A3.5 3.5 0 0 1 15 8.5v3a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 11.5v-3A3.5 3.5 0 0 1 4.5 5H5V3.5A1.5 1.5 0 0 1 6.5 2zm-5 4a2.5 2.5 0 0 0-2.45 2H3.5a.5.5 0 0 1 0 1H2v2.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V9h-1.5a.5.5 0 0 1 0-1h1.45a2.5 2.5 0 0 0-2.45-2zm5 2a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm-3-5a.5.5 0 0 0-.5.5V5h4V3.5a.5.5 0 0 0-.5-.5z" /></SvgRoot>;
});
export default IconToolbox2;
