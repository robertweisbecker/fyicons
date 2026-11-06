import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeading4 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeading4(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="heading-4"><path fill="currentColor" d="M13.147 8.896A.5.5 0 0 1 14 9.25V12h.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V13h-2.75a.5.5 0 0 1-.354-.854zM5.5 2a.5.5 0 0 1 0 1H5v3h5V3h-.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1H11v5.5a.5.5 0 0 1-1 0V7H5v4h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H4V3h-.5a.5.5 0 0 1 0-1zm5.957 10H13v-1.543z" /></SvgRoot>;
});
export default IconHeading4;
