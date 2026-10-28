import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolderAdd = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolderAdd(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="folder-add"><path fill="currentColor" d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 1.5a.5.5 0 0 0-.5.5v.995h-1a.5.5 0 0 0 0 1h1V14a.5.5 0 0 0 1 0v-1.005h1a.5.5 0 0 0 0-1h-1V11a.5.5 0 0 0-.5-.5M4.672 2a2.5 2.5 0 0 1 1.767.732L7.707 4H12.5A2.5 2.5 0 0 1 15 6.5v2.258a4.5 4.5 0 0 0-1-.501V8H2v3.5A1.5 1.5 0 0 0 3.5 13h4.528q.06.521.23 1H3.5A2.5 2.5 0 0 1 1 11.5v-7A2.5 2.5 0 0 1 3.5 2zM3.5 3A1.5 1.5 0 0 0 2 4.5V7h12v-.5A1.5 1.5 0 0 0 12.5 5H7.293l-1.56-1.56A1.5 1.5 0 0 0 4.671 3z" /></SvgRoot>;
});
export default IconFolderAdd;
