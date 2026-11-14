import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHdFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHdFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="hd-fill"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM6.33 5a.5.5 0 0 0-.5.5v2.25H4V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.75h1.83v1.75a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5m2.917.007a.5.5 0 0 0-.497.5v4.985a.5.5 0 0 0 .496.5l1.042.008h.004a3.3 3.3 0 0 0 1.743-.543c.669-.45 1.216-1.228 1.216-2.457 0-1.205-.476-1.988-1.129-2.45-.624-.441-1.352-.55-1.83-.55h-.004zM10.292 6c.356 0 .856.086 1.253.366.368.26.706.728.706 1.634 0 .882-.37 1.355-.774 1.627a2.3 2.3 0 0 1-1.185.372l-.542-.004V6.003z" /></SvgRoot>;
});
export default IconHdFill;
