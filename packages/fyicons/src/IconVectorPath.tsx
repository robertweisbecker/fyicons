import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVectorPath = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVectorPath(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="vector-path"><path fill="currentColor" d="M8 1c1.063 0 1.93.83 1.993 1.877a5.5 5.5 0 0 1 3.13 3.129 1.998 1.998 0 0 1 0 3.987 5.5 5.5 0 0 1-3.13 3.13 1.997 1.997 0 0 1-3.987 0 5.5 5.5 0 0 1-3.13-3.13 1.997 1.997 0 0 1 0-3.987 5.5 5.5 0 0 1 3.13-3.13A2 2 0 0 1 8 1.001m0 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2m1.796-8.126a1.997 1.997 0 0 1-3.593 0 4.5 4.5 0 0 0-2.329 2.33 1.998 1.998 0 0 1 0 3.592 4.5 4.5 0 0 0 2.33 2.329 1.998 1.998 0 0 1 3.592 0 4.5 4.5 0 0 0 2.329-2.33 1.998 1.998 0 0 1 0-3.592 4.5 4.5 0 0 0-2.33-2.329M3 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconVectorPath;
