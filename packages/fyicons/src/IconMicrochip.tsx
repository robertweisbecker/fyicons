import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMicrochip = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMicrochip(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.5 1a.5.5 0 0 1 .5.5V3a3 3 0 0 1 3 3h1.5a.5.5 0 0 1 0 1H13v2h1.5a.5.5 0 0 1 0 1H13a3 3 0 0 1-3 3v1.5a.5.5 0 0 1-1 0V13H7v1.5a.5.5 0 0 1-1 0V13a3 3 0 0 1-3-3H1.5a.5.5 0 0 1 0-1H3V7H1.5a.5.5 0 0 1 0-1H3a3 3 0 0 1 3-3V1.5a.5.5 0 0 1 1 0V3h2V1.5a.5.5 0 0 1 .5-.5M6 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm3.25 2a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-2.5A.75.75 0 0 1 6 9.25v-2.5A.75.75 0 0 1 6.75 6z" /></SvgRoot>;
});
export default IconMicrochip;
