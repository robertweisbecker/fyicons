import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolderAdd = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolderAdd(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 1a.5.5 0 0 0-.5.5v1.495h-1.5a.5.5 0 0 0 0 1H12V14.5a.5.5 0 0 0 1 0v-1.505h1.5a.5.5 0 0 0 0-1H13V10.5a.5.5 0 0 0-.5-.5M4.672 2a2.5 2.5 0 0 1 1.767.732L7.707 4H12.5A2.5 2.5 0 0 1 15 6.5v2.268A3 3 0 0 0 13 8H3a1 1 0 0 0-1 1v2.5A1.5 1.5 0 0 0 3.5 13h4.532q.067.526.26 1H3.5A2.5 2.5 0 0 1 1 11.5v-7A2.5 2.5 0 0 1 3.5 2zM3.5 3A1.5 1.5 0 0 0 2 4.5v2.77C2.294 7.1 2.635 7 3 7h10c.365 0 .706.1 1 .27V6.5A1.5 1.5 0 0 0 12.5 5H7.293l-1.56-1.56A1.5 1.5 0 0 0 4.671 3z" /></SvgRoot>;
});
export default IconFolderAdd;
