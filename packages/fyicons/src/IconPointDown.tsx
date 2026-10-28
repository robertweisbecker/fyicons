import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPointDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="m7.139 12.29-4-6.782A1 1 0 0 1 4.001 4h7.998a1 1 0 0 1 .862 1.508l-4 6.781a1 1 0 0 1-1.722 0" /></SvgRoot>;
});
export default IconPointDown;
