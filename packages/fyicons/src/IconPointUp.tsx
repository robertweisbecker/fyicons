import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPointUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="m7.139 3.71-4 6.782A1 1 0 0 0 4.001 12h7.998a1 1 0 0 0 .862-1.508l-4-6.781a1 1 0 0 0-1.722 0" /></SvgRoot>;
});
export default IconPointUp;
