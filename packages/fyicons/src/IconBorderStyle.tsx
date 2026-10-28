import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBorderStyle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBorderStyle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="border-style"><rect x={3} y={3} width={10} height={1} rx={0.5} fill="currentColor" /><circle cx={3.5} cy={12.5} r={0.5} fill="currentColor" /><circle cx={5.5} cy={12.5} r={0.5} fill="currentColor" /><circle cx={10.5} cy={12.5} r={0.5} fill="currentColor" /><circle cx={8} cy={12.5} r={0.5} fill="currentColor" /><circle cx={12.5} cy={12.5} r={0.5} fill="currentColor" /><rect x={3} y={7.5} width={2} height={1} fill="currentColor" /><rect x={7} y={7.5} width={2} height={1} fill="currentColor" /><rect x={11} y={7.5} width={2} height={1} fill="currentColor" /></SvgRoot>;
});
export default IconBorderStyle;
