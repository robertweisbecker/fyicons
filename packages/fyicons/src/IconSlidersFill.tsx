import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSlidersFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSlidersFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sliders-fill"><path fill="currentColor" d="M10.75 9a2.25 2.25 0 0 1 2.235 2h1.513a.5.5 0 1 1 0 1h-1.629a2.248 2.248 0 0 1-4.238 0H1.5a.5.5 0 0 1 0-1h7.015a2.25 2.25 0 0 1 2.235-2M6 2.5c.98 0 1.81.627 2.12 1.5h6.379a.5.5 0 0 1 0 1H8.235a2.25 2.25 0 0 1-4.47 0H1.5a.5.5 0 0 1 0-1h2.38A2.25 2.25 0 0 1 6 2.5" /></SvgRoot>;
});
export default IconSlidersFill;
