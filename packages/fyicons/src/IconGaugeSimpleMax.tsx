import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGaugeSimpleMax = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGaugeSimpleMax(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 6a2 2 0 0 1 2 2c0 .37-.103.716-.279 1.014l4.133 4.133a.5.5 0 0 1-.707.707L9.014 9.72a2 2 0 0 1-1.013.279 2 2 0 1 1 0-4m.002-5a7.002 7.002 0 0 1 6.865 8.365l-.041.186-.865-.865a6 6 0 0 0-2.626-5.675 6.002 6.002 0 0 0-9.218 6.16 6 6 0 0 0 1.642 3.071.502.502 0 0 1-.708.708A7.001 7.001 0 0 1 8.001 1M8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconGaugeSimpleMax;
