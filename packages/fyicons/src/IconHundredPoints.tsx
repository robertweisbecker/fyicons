import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHundredPoints = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHundredPoints(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="hundred-points"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.5 14.5s2.222-1 8-1.01m-7-1.99s2.5-1 6-1m-8-7a3.3 3.3 0 0 0 1.1-.534c.846-.615 1.031-.596.728.404C3.726 5.354 2.686 8.568 2.5 9.5" /><path stroke="currentColor" strokeLinecap="round" d="M9.53 3.53c.268 4.015-1.156 5.18-2.508 5.01C4.61 8.234 5.694 2.959 8.5 2.5m6.03 1.03c.268 4.015-1.156 5.18-2.508 5.01C9.61 8.234 10.694 2.959 13.5 2.5" /></SvgRoot>;
});
export default IconHundredPoints;
