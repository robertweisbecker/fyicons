import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudDownload = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudDownload(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 7a.5.5 0 0 1 .5.5v4.793l1.146-1.146a.5.5 0 1 1 .707.707l-2 2a.5.5 0 0 1-.707 0l-2-2a.5.5 0 1 1 .708-.707L7.5 12.293V7.5A.5.5 0 0 1 8 7M6.5 3c.866 0 1.656.317 2.266.837.03.025.073.035.111.025A3.5 3.5 0 0 1 13.25 7.25c0 .289-.038.57-.104.837A2.5 2.5 0 0 1 12.5 13H12v-1h.5a1.5 1.5 0 0 0 0-3h-.025a.5.5 0 0 1-.454-.709 2.5 2.5 0 0 0-2.892-3.46 1.13 1.13 0 0 1-1.01-.232v-.001a2.5 2.5 0 0 0-3.967 2.754.5.5 0 0 1-.407.666 2 2 0 0 0 .05 3.971L4 12v1l-.154-.004a3 3 0 0 1-.783-5.846A3.5 3.5 0 0 1 3 6.5 3.5 3.5 0 0 1 6.5 3" /></SvgRoot>;
});
export default IconCloudDownload;
