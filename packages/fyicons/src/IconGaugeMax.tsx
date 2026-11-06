import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGaugeMax = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGaugeMax(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="gauge-max"><path fill="currentColor" d="M8 6a2 2 0 0 1 1.72 3.014l4.133 4.133a.5.5 0 0 1-.707.707L9.014 9.72C8.717 9.897 8.371 10 8 10a2 2 0 0 1 0-4m0-5a7 7 0 0 1 6.866 8.365q-.019.093-.041.186l-.865-.865a6 6 0 0 0-2.626-5.675 6.001 6.001 0 0 0-9.218 6.16 6 6 0 0 0 1.642 3.071.501.501 0 0 1-.708.708A7.002 7.002 0 0 1 8 1m0 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconGaugeMax;
