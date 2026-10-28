import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSliders = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSliders(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sliders"><path fill="currentColor" d="M10.5 9a2.5 2.5 0 0 1 2.45 2h1.548a.5.5 0 1 1 0 1H12.95a2.501 2.501 0 0 1-4.9 0H1.5a.5.5 0 0 1 0-1h6.55a2.5 2.5 0 0 1 2.45-2m0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-5-8a2.5 2.5 0 0 1 2.45 2.004Q7.974 4 8 4h6.5a.5.5 0 1 1 0 1H8q-.025-.001-.049-.005A2.5 2.5 0 0 1 3.05 5H1.5a.5.5 0 0 1 0-1h1.55A2.5 2.5 0 0 1 5.5 2m0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /></SvgRoot>;
});
export default IconSliders;
