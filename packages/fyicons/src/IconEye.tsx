import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEye = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEye(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 3c2.044 0 3.669 1.006 4.81 2.063a11.4 11.4 0 0 1 2.06 2.574c.13.225.13.5 0 .726a11.4 11.4 0 0 1-2.06 2.575C11.67 11.994 10.045 13 8 13s-3.668-1.006-4.81-2.062a11.4 11.4 0 0 1-2.06-2.575.73.73 0 0 1 0-.726 11.4 11.4 0 0 1 2.06-2.574C4.332 4.005 5.956 3 8 3m0 1c-1.699 0-3.092.835-4.132 1.797A10.5 10.5 0 0 0 2.08 8c.257.425.866 1.35 1.79 2.203C4.907 11.165 6.3 12 8 12s3.092-.835 4.132-1.797A10.5 10.5 0 0 0 13.92 8a10.5 10.5 0 0 0-1.788-2.203C11.092 4.836 9.699 4 8 4m.001 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4" /></SvgRoot>;
});
export default IconEye;
