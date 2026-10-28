import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDownload = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDownload(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.5 10a.5.5 0 0 1 .5.5V12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.5a.5.5 0 1 1 1 0V12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1.5a.5.5 0 0 1 .5-.5M8.001 2a.5.5 0 0 1 .5.5v6.292l2.146-2.145a.501.501 0 0 1 .707.707l-3 3a.5.5 0 0 1-.708 0l-3-3a.501.501 0 0 1 .708-.708L7.5 8.793V2.5A.5.5 0 0 1 8 2" /></SvgRoot>;
});
export default IconDownload;
