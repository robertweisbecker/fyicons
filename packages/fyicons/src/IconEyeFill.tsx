import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEyeFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEyeFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 3c2.044 0 3.669 1.006 4.81 2.063a11.4 11.4 0 0 1 2.06 2.574c.13.225.13.5 0 .726a11.4 11.4 0 0 1-2.06 2.575C11.669 11.994 10.045 13 8 13s-3.668-1.006-4.81-2.062a11.4 11.4 0 0 1-2.06-2.575.73.73 0 0 1 0-.726 11.4 11.4 0 0 1 2.06-2.574C4.332 4.005 5.956 3 8 3m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></SvgRoot>;
});
export default IconEyeFill;
