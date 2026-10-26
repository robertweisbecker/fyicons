import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeartAltFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeartAltFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.267 14.81a.46.46 0 0 1-.54.008C6.435 13.93 1 9.965 1 6c0-2.21 1.798-4.179 4-4 1.403.114 2.5 1 3 2a3.72 3.72 0 0 1 3-2c2.202-.179 3.983 1.79 4 4 .028 3.69-5.448 7.878-6.733 8.81" /></SvgRoot>;
});
export default IconHeartAltFill;
