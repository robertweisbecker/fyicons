import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWifiFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWifiFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 11c.451 0 .868.15 1.202.402.207.156.19.455.008.639l-.855.855a.5.5 0 0 1-.708 0l-.856-.856c-.184-.184-.2-.483.007-.639A2 2 0 0 1 8 11m0-4c1.546 0 2.954.586 4.017 1.546a.47.47 0 0 1 .004.683l-.701.7c-.202.202-.529.192-.747.009A3.98 3.98 0 0 0 8 9c-.98 0-1.878.352-2.573.938-.218.183-.545.193-.747-.009l-.7-.7a.47.47 0 0 1 .003-.684A5.98 5.98 0 0 1 8 7M1.334 5.917a9.43 9.43 0 0 1 13.334 0 .47.47 0 0 1 0 .666l-.527.527a.526.526 0 0 1-.726.003A7.97 7.97 0 0 0 8 5a7.97 7.97 0 0 0-5.414 2.112.526.526 0 0 1-.727-.004l-.525-.525a.47.47 0 0 1 0-.666" /></SvgRoot>;
});
export default IconWifiFill;
