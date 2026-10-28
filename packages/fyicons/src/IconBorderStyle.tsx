import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBorderStyle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBorderStyle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="border-style"><rect width={10} height={1} x={3} y={3} fill="currentColor" rx={0.5} /><circle cx={3.5} cy={12.5} r={0.5} fill="currentColor" /><circle cx={5.5} cy={12.5} r={0.5} fill="currentColor" /><circle cx={10.5} cy={12.5} r={0.5} fill="currentColor" /><circle cx={8} cy={12.5} r={0.5} fill="currentColor" /><circle cx={12.5} cy={12.5} r={0.5} fill="currentColor" /><path fill="currentColor" d="M3 7.5h2v1H3zm4 0h2v1H7zm4 0h2v1h-2z" /></SvgRoot>;
});
export default IconBorderStyle;
