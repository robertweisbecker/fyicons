import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconLightnessLow = React.forwardRef<SVGSVGElement, IconProps>(function IconLightnessLow(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><circle cx={14} cy={10} r={0.75} fill="currentColor" /><circle cx={12} cy={7} r={0.75} fill="currentColor" /><circle cx={8} cy={6} r={0.75} fill="currentColor" /><circle cx={4} cy={7} r={0.75} fill="currentColor" /><circle cx={2} cy={10} r={0.75} fill="currentColor" /><path d="M10.5 10.5H5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconLightnessLow;
