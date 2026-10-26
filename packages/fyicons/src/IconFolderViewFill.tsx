import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolderViewFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolderViewFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.332 9.01a1 1 0 0 1 .754.543l.224.447H13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1.191zM2.5 1a.5.5 0 0 1 .5.5V3a1 1 0 0 0 1 1h2.5a.5.5 0 0 1 0 1H4c-.365 0-.706-.1-1-.27V10a1 1 0 0 0 1 1h2.5a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2V1.5a.5.5 0 0 1 .5-.5m7.832 1.01a1 1 0 0 1 .754.543L11.31 3H13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1.191z" /></SvgRoot>;
});
export default IconFolderViewFill;
