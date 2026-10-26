import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCompass = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCompass(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m3.302 2.041a.5.5 0 0 1 .657.657l-1.635 3.796a3.5 3.5 0 0 1-1.83 1.83L4.698 11.96a.5.5 0 0 1-.657-.657l1.635-3.796a3.5 3.5 0 0 1 1.83-1.83zM8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconCompass;
