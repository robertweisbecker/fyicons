import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMerge = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMerge(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="merge"><path fill="currentColor" d="M7.501 2c.14 0 .267.058.357.151l1.996 1.995a.5.5 0 1 1-.708.708L8.001 3.708v2.549a3.5 3.5 0 0 1-1.025 2.475l-2.244 2.243A2.5 2.5 0 0 0 4 12.743v.757a.5.5 0 0 1-1 0v-.757c0-.928.369-1.819 1.025-2.475L6.27 8.025A2.5 2.5 0 0 0 7 6.257V3.706L5.854 4.854a.5.5 0 1 1-.708-.708l2-2 .077-.062.078-.042.017-.007.064-.02.018-.005.026-.004L7.5 2zm1.645 7.146a.5.5 0 0 1 .708 0l1.12 1.122A3.5 3.5 0 0 1 12 12.742v.758a.5.5 0 0 1-1 0v-.758a2.5 2.5 0 0 0-.732-1.767L9.146 9.854a.5.5 0 0 1 0-.708" /></SvgRoot>;
});
export default IconMerge;
