import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolders = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolders(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.933 1c.504 0 .985.218 1.317.598L9.477 3H13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1v2a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h.933L4 5.003V3a2 2 0 0 1 2-2zM3 6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H6.023l-.149-.17-1.377-1.574A.75.75 0 0 0 3.933 6zm3-4a1 1 0 0 0-1 1v2.364q.136.104.25.234L6.477 7H10a2 2 0 0 1 2 2v1h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.023l-.149-.17-1.377-1.574A.75.75 0 0 0 6.933 2z" /></SvgRoot>;
});
export default IconFolders;
