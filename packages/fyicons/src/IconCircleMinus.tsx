import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleMinus = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleMinus(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m3.34 5.71a.665.665 0 1 1 0 1.33H4.67a.665.665 0 0 1 0-1.33z" /></SvgRoot>;
});
export default IconCircleMinus;
