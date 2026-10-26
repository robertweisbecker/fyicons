import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeading1 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeading1(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.615 9.014A.5.5 0 0 1 13 9.5V14h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1h.5v-3.175a1.7 1.7 0 0 1-.75.175.5.5 0 0 1 0-1c.27 0 .518-.153.639-.395l.164-.329a.5.5 0 0 1 .562-.262M5.5 2a.5.5 0 0 1 0 1H5v3h5V3h-.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1H11v6h-1V7H5v4h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H4V3h-.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconHeading1;
