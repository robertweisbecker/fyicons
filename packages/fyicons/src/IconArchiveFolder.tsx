import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArchiveFolder = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArchiveFolder(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6 2a1.5 1.5 0 0 1 1.2.6l.15.2a.5.5 0 0 0 .4.2h2.75A1.5 1.5 0 0 1 12 4.5V5h.5A1.5 1.5 0 0 1 14 6.5V11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a1 1 0 0 1 .898-.995L3 5V3.5A1.5 1.5 0 0 1 4.5 2zm-3 9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6.5a.5.5 0 0 0-.5-.5H3zm5.751-3.25a.75.75 0 0 1 .75.75V9a.25.25 0 0 1-.25.25h-2.5A.25.25 0 0 1 6.5 9v-.5a.75.75 0 0 1 .75-.75zM4.501 3a.5.5 0 0 0-.5.5V5h7v-.5a.5.5 0 0 0-.5-.5H7.75a1.5 1.5 0 0 1-1.2-.6l-.15-.2A.5.5 0 0 0 6 3z" /></SvgRoot>;
});
export default IconArchiveFolder;
