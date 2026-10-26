import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCodeRectangle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCodeRectangle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.5 3A2.5 2.5 0 0 1 15 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5v-5A2.5 2.5 0 0 1 3.5 3zm-9 1A1.5 1.5 0 0 0 2 5.5v5A1.5 1.5 0 0 0 3.5 12h9a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 4zm5.036 1.314a.5.5 0 1 1 .928.372l-2 5a.5.5 0 1 1-.928-.371zm-3.39.832a.5.5 0 1 1 .708.708L4.707 8l1.147 1.146a.5.5 0 1 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708zm5 0a.5.5 0 0 1 .707 0l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 1 1-.707-.708L11.294 8l-1.146-1.146a.5.5 0 0 1 0-.708" /></SvgRoot>;
});
export default IconCodeRectangle;
