import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGaugeMin = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGaugeMin(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="gauge-min"><path fill="currentColor" d="M8.001 6a2 2 0 0 0-1.722 3.014l-4.133 4.133a.501.501 0 0 0 .708.707l4.132-4.133A2 2 0 1 0 8.001 6M8 1a7 7 0 0 0-6.865 8.365l.042.186.864-.864A6 6 0 0 1 4.667 3.01a6 6 0 0 1 7.575 9.231.501.501 0 0 0 .708.708A7.002 7.002 0 0 0 8 1m.001 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />{props.children}</SvgRoot>;
});
export default IconGaugeMin;
