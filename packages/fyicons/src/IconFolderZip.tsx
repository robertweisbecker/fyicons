import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolderZip = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolderZip(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="folder-zip"><path fill="currentColor" d="M4.672 2a2.5 2.5 0 0 1 1.767.732L7.707 4H12.5A2.5 2.5 0 0 1 15 6.5v5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 11.5v-7A2.5 2.5 0 0 1 3.5 2zM3.5 3A1.5 1.5 0 0 0 2 4.5v7A1.5 1.5 0 0 0 3.5 13H10v-1h1v1h1.5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 5H11a1 1 0 0 1 1 1v1.5a1.5 1.5 0 0 1-3 0V6a1 1 0 0 1 .995-1v1h1V5H7.293l-1.56-1.56A1.5 1.5 0 0 0 4.671 3zm6.5 9H9v-1h1zm1-1h-1v-1h1zm-1-1H9V9h1zm.497-3a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1" /></SvgRoot>;
});
export default IconFolderZip;
