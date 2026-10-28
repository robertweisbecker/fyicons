import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArchive = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArchive(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M13.5 2A1.5 1.5 0 0 1 15 3.5v1c0 .655-.42 1.21-1.005 1.414Q14 5.956 14 6v5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6q0-.044.004-.086A1.5 1.5 0 0 1 1 4.5v-1A1.5 1.5 0 0 1 2.5 2zM3 11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6H3zm5.75-3.25a.75.75 0 0 1 .75.75V9a.25.25 0 0 1-.25.25h-2.5A.25.25 0 0 1 6.5 9v-.5a.75.75 0 0 1 .75-.75zM2.5 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" /></SvgRoot>;
});
export default IconArchive;
