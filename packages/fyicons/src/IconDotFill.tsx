import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDotFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDotFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><circle cx={8} cy={8} r={3} fill="currentColor" /></SvgRoot>;
});
export default IconDotFill;
