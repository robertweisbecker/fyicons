import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTarget = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTarget(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="target"><path fill="currentColor" d="M8 1a7.002 7.002 0 0 1 4.95 11.95A7.003 7.003 0 0 1 1 8a7 7 0 0 1 7-7m0 1a6.001 6.001 0 0 0-4.242 10.242 6 6 0 0 0 6.538 1.301 6 6 0 0 0 3.247-7.839A6 6 0 0 0 8 2m0 1.915a4 4 0 0 1 2.83 1.17 4 4 0 0 1 1.165 2.633l.005.196-.005.197a4 4 0 0 1-2.464 3.498 4 4 0 0 1-4.36-.867A3.999 3.999 0 0 1 8 3.915m0 1a3 3 0 1 0 .002 6 3 3 0 0 0-.002-6M8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2" /></SvgRoot>;
});
export default IconTarget;
