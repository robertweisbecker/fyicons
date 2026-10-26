import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudX = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudX(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.5 3c.866 0 1.656.317 2.266.837.03.025.073.035.111.025A3.5 3.5 0 0 1 13.25 7.25c0 .289-.038.569-.104.837A2.5 2.5 0 0 1 12.5 13H4a3 3 0 0 1-.937-5.85A3.5 3.5 0 0 1 3 6.5 3.5 3.5 0 0 1 6.5 3m0 1a2.5 2.5 0 0 0-2.349 3.35.5.5 0 0 1-.406.666A2 2 0 0 0 4 12h8.5a1.5 1.5 0 0 0 0-3h-.025a.5.5 0 0 1-.454-.71 2.5 2.5 0 0 0-2.892-3.46 1.13 1.13 0 0 1-1.01-.232A2.5 2.5 0 0 0 6.5 4m2.646 3.146a.5.5 0 0 1 .708.707L8.707 9l1.147 1.146a.5.5 0 0 1-.708.707L8 9.707l-1.146 1.146a.5.5 0 0 1-.708-.707L7.293 9 6.146 7.853a.5.5 0 0 1 .708-.707L8 8.293z" /></SvgRoot>;
});
export default IconCloudX;
