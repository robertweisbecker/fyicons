import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDownload = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDownload(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="download"><path fill="currentColor" d="M13.5 10a.5.5 0 0 1 .5.5v1a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-1a.5.5 0 1 1 1 0v1A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-1a.5.5 0 0 1 .5-.5M8.001 2a.5.5 0 0 1 .5.5v6.292l1.646-1.645a.501.501 0 0 1 .707.707l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5a.501.501 0 0 1 .708-.708L7.5 8.793V2.5A.5.5 0 0 1 8 2" /></SvgRoot>;
});
export default IconDownload;
