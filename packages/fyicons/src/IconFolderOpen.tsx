import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolderOpen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolderOpen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.672 2a2.5 2.5 0 0 1 1.767.732L7.707 4H11a2.5 2.5 0 0 1 2.5 2.5V8h.382a1.5 1.5 0 0 1 1.342 2.17l-1.085 2.172A3 3 0 0 1 11.455 14H3.5A2.5 2.5 0 0 1 1 11.5v-7A2.5 2.5 0 0 1 3.5 2zm1.985 7c-.475 0-.898.305-1.049.756a6.9 6.9 0 0 1-2.27 3.234q.081.01.162.01h7.955a2 2 0 0 0 1.79-1.105l1.084-2.171A.5.5 0 0 0 13.882 9zM3.5 3A1.5 1.5 0 0 0 2 4.5v7c0 .373.138.714.363.977l.233-.173A5.9 5.9 0 0 0 4.66 9.439 2.105 2.105 0 0 1 6.657 8H12.5V6.5A1.5 1.5 0 0 0 11 5H7.293l-1.56-1.56A1.5 1.5 0 0 0 4.671 3z" /></SvgRoot>;
});
export default IconFolderOpen;
