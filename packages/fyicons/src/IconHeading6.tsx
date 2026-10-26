import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeading6 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeading6(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.347 9.024a.5.5 0 0 1 .482.853l-.083.059-.009.004-.05.032a4 4 0 0 0-1.075 1.093q.248-.063.513-.065A2.126 2.126 0 1 1 10 13.125v-.006a4.7 4.7 0 0 1 1.117-3.063 5 5 0 0 1 1.024-.921l.101-.064.007-.004.003-.002h.002zM12.125 12a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25M5.5 2a.5.5 0 0 1 0 1H5v3h5V3h-.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1H11v5.5a.5.5 0 0 1-1 0V7H5v4h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H4V3h-.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconHeading6;
