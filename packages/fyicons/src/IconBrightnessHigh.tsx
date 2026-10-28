import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBrightnessHigh = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBrightnessHigh(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="brightness-high"><path d="M8 3.5V6.5M0.5 10.5H2.5M13.5 10.5H15.5M2.5 5.5L4.5 7.5M11.5 7.5L13.5 5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 10.5H5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconBrightnessHigh;
