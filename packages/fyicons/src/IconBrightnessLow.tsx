import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBrightnessLow = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBrightnessLow(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><circle cx={14} cy={10} r={0.75} fill="currentColor" /><circle cx={12} cy={7} r={0.75} fill="currentColor" /><circle cx={8} cy={6} r={0.75} fill="currentColor" /><circle cx={4} cy={7} r={0.75} fill="currentColor" /><circle cx={2} cy={10} r={0.75} fill="currentColor" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 10.5h-5" /></SvgRoot>;
});
export default IconBrightnessLow;
