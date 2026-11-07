import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeading4 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeading4(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="heading-4"><path fill="currentColor" d="M13.135 9.16A.5.5 0 0 1 14 9.5v3.25h.5a.5.5 0 0 1 0 1H14v.75a.5.5 0 0 1-1 0v-.75h-3a.501.501 0 0 1-.365-.84zm-1.985 3.59H13v-1.982zM5.5 2a.5.5 0 0 1 0 1H5v3h5V3h-.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1H11v5.5a.5.5 0 0 1-1 0V7H5v4h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H4V3h-.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconHeading4;
