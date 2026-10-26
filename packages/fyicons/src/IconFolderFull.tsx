import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolderFull = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolderFull(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.95 1.023a1.5 1.5 0 0 1 1.825.97L9.11 3h2.4c.667 0 1.233.437 1.428 1.04A2.5 2.5 0 0 1 15 6.5v5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 11.5v-7A2.5 2.5 0 0 1 3.5 2h.312q.217-.164.493-.242zM3 8a1 1 0 0 0-1 1v2.5A1.5 1.5 0 0 0 3.5 13h9a1.5 1.5 0 0 0 1.5-1.5V9a1 1 0 0 0-1-1zm.217-4.974A1.5 1.5 0 0 0 2 4.5v2.77c.294-.171.635-.27 1-.27h1.11l-.86-3.434a1.5 1.5 0 0 1-.034-.54M13.009 7c.361.001.699.1.991.27V6.5a1.5 1.5 0 0 0-.991-1.41zM7.5 4a.5.5 0 0 0-.5.5V7h5.009V4.5a.5.5 0 0 0-.5-.5zm-.282-2.014-2.645.734a.5.5 0 0 0-.352.605L5.14 7H6V4.5A1.5 1.5 0 0 1 7.5 3h.556l-.23-.69a.5.5 0 0 0-.608-.324" /></SvgRoot>;
});
export default IconFolderFull;
