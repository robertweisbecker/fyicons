import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudUpload = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudUpload(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.646 7.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 1 1-.708.708L8.5 8.707V13.5a.5.5 0 0 1-1 0V8.707L6.354 9.854a.5.5 0 1 1-.708-.708zM6.5 3c.866 0 1.656.317 2.266.837.03.025.073.035.111.025A3.5 3.5 0 0 1 13.25 7.25c0 .289-.038.57-.104.837A2.5 2.5 0 0 1 12.5 13H10v-1h2.5a1.5 1.5 0 0 0 0-3h-.025a.5.5 0 0 1-.454-.709 2.5 2.5 0 0 0-2.892-3.46 1.13 1.13 0 0 1-1.01-.232v-.001a2.5 2.5 0 0 0-3.967 2.754.5.5 0 0 1-.407.666A2 2 0 0 0 4 12h2v1H4a3 3 0 0 1-.937-5.85A3.5 3.5 0 0 1 3 6.5 3.5 3.5 0 0 1 6.5 3" /></SvgRoot>;
});
export default IconCloudUpload;
