import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGaugeMin = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGaugeMin(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="gauge-min"><path fill="currentColor" d="M8 6a2 2 0 0 0-2 2c0 .37.104.716.28 1.014l-4.134 4.133a.501.501 0 0 0 .708.707l4.133-4.133C7.284 9.896 7.63 10 8 10a2 2 0 1 0 0-4m0-5a7 7 0 0 0-6.865 8.365l.042.186.864-.864A6 6 0 0 1 4.667 3.01a6.002 6.002 0 0 1 9.218 6.16 6 6 0 0 1-1.642 3.071.501.501 0 0 0 .708.708A7.003 7.003 0 0 0 8 1m0 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />{props.children}</SvgRoot>;
});
export default IconGaugeMin;
