import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStopFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStopFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="stop-fill"><rect width={10} height={10} x={3} y={3} fill="currentColor" rx={1} /></SvgRoot>;
});
export default IconStopFill;
