import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolderOpen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolderOpen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="folder-open"><path fill="currentColor" d="M5.672 2c.663 0 1.3.264 1.768.732L8.708 4H11a2.5 2.5 0 0 1 2.5 2.5V8h.381a1.5 1.5 0 0 1 1.342 2.17l-1.085 2.172A3 3 0 0 1 11.456 14h-7.13a2.5 2.5 0 0 1-2.489-2.273l-.636-7A2.5 2.5 0 0 1 3.69 2zm.917 7c-.435 0-.821.279-.959.691l-.086.257a5.75 5.75 0 0 1-2.039 2.806 1.5 1.5 0 0 0 .822.246h7.129c.757 0 1.45-.428 1.789-1.105l1.085-2.171A.5.5 0 0 0 13.882 9zM3.691 3a1.5 1.5 0 0 0-1.494 1.636l.636 7q.016.168.067.323a4.75 4.75 0 0 0 1.696-2.327l.086-.257A2.01 2.01 0 0 1 6.59 8h5.912V6.5A1.5 1.5 0 0 0 11 5H8.5a.5.5 0 0 1-.354-.146L6.733 3.439A1.5 1.5 0 0 0 5.673 3z" />{props.children}</SvgRoot>;
});
export default IconFolderOpen;
