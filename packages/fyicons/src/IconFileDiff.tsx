import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileDiff = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileDiff(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.879 1a2 2 0 0 1 1.414.586l2.121 2.121A2 2 0 0 1 13 5.121V12.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v9.5A1.5 1.5 0 0 0 5.5 14h5a1.5 1.5 0 0 0 1.5-1.5V5.121a1 1 0 0 0-.293-.707L9.586 2.293A1 1 0 0 0 8.879 2zm4.5 8a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zM8 5a.5.5 0 0 1 .5.5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1A.5.5 0 0 1 8 5" /></SvgRoot>;
});
export default IconFileDiff;
