import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeading4 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeading4(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.356 8.941a.501.501 0 0 1 .894.309v3h.25a.5.5 0 0 1 0 1h-.25v1.25a.5.5 0 0 1-1 0v-1.25H10a.5.5 0 0 1-.394-.809zM11.03 12.25h1.221v-1.555zM5.5 2a.5.5 0 0 1 0 1H5v3h5V3h-.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1H11v5.5a.5.5 0 0 1-1 0V7H5v4h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H4V3h-.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconHeading4;
