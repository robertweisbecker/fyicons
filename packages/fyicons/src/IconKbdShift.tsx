import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconKbdShift = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconKbdShift(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="kbd-shift"><path stroke="currentColor" d="M7.823 2.677a.25.25 0 0 1 .353 0l5.397 5.396a.25.25 0 0 1-.177.427h-2.898v4a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-4H2.605a.25.25 0 0 1-.178-.427z" />{props.children}</SvgRoot>;
});
export default IconKbdShift;
