import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStopFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStopFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="stop-fill"><rect x={3} y={3} width={10} height={10} rx={1} fill="currentColor" /></SvgRoot>;
});
export default IconStopFill;
