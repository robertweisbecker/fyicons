import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeading4 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeading4(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="heading-4"><path fill="currentColor" d="M12.097 9.204A.501.501 0 0 1 13 9.5v3.25h.5a.5.5 0 0 1 0 1H13v.75a.5.5 0 0 1-1 0v-.75H9.75a.502.502 0 0 1-.403-.796zm-1.36 3.546H12v-1.723zM5.5 2a.5.5 0 0 1 0 1H5v3h5V3h-.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1H11v5.5a.5.5 0 0 1-1 0V7H5v4h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H4V3h-.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconHeading4;
