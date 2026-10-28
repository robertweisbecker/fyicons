import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconScale = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconScale(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.5 6q.05 0 .097.009.09.019.165.066l.014.007q.042.028.078.064l.063.079q.044.07.064.148c.01.04.02.083.02.127v3a.5.5 0 0 1-1 0V7.707l-3 3V14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3.292l3-3H6.5a.5.5 0 0 1 0-1zM2 14h3v-3H2zm7.5-1a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm4-2a.5.5 0 0 1 .5.5 2.5 2.5 0 0 1-2.5 2.5.5.5 0 1 1 0-1 1.5 1.5 0 0 0 1.5-1.5.5.5 0 0 1 .5-.5m0-5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m-11 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5m2-4a.5.5 0 0 1 0 1A1.5 1.5 0 0 0 3 4.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 4.5 2m7 0A2.5 2.5 0 0 1 14 4.5a.5.5 0 0 1-1 0A1.5 1.5 0 0 0 11.5 3a.5.5 0 1 1 0-1m-2 0a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconScale;
