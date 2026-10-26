import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudSlash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudSlash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M1.146 1.146a.5.5 0 0 1 .708 0l2.55 2.55A3.5 3.5 0 0 1 6.5 3c.866 0 1.656.317 2.266.837.03.025.073.035.111.025q.418-.11.873-.112a3.5 3.5 0 0 1 3.5 3.5c0 .289-.038.57-.104.837A2.5 2.5 0 0 1 15 10.5a2.5 2.5 0 0 1-1.503 2.29l1.357 1.356a.5.5 0 0 1-.707.707L12.293 13H4a3 3 0 0 1-.937-5.85 3.5 3.5 0 0 1 .633-2.747l-2.55-2.55a.5.5 0 0 1 0-.707m3.268 3.975a2.49 2.49 0 0 0-.263 2.23.5.5 0 0 1-.406.666A2 2 0 0 0 4 12h7.293zM6.5 4c-.51 0-.984.152-1.379.414l7.571 7.571A1.499 1.499 0 0 0 12.5 9h-.025a.5.5 0 0 1-.454-.71 2.5 2.5 0 0 0-2.892-3.46v.001a1.13 1.13 0 0 1-1.01-.232v-.001A2.5 2.5 0 0 0 6.5 4" /></SvgRoot>;
});
export default IconCloudSlash;
