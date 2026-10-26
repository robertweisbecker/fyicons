import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBrightnessHigh = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBrightnessHigh(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 3.5v3m-7.5 4h2m11 0h2m-13-5 2 2m7 0 2-2m-3 5h-5" /></SvgRoot>;
});
export default IconBrightnessHigh;
