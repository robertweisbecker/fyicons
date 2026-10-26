import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDownloadWide = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDownloadWide(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M14.5 9a.5.5 0 0 1 .5.5V12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9.5a.5.5 0 0 1 1 0V12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9.5a.5.5 0 0 1 .5-.5M8 2a.5.5 0 0 1 .5.5v6.293l2.646-2.647a.5.5 0 1 1 .707.708l-3.5 3.5a.5.5 0 0 1-.707 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 8.793V2.5A.5.5 0 0 1 8 2" /></SvgRoot>;
});
export default IconDownloadWide;
