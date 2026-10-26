import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPencil = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPencil(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.086 2.207a2 2 0 0 1 2.828 0l.879.88a2 2 0 0 1 0 2.827l-6.497 6.497a4.5 4.5 0 0 1-2.545 1.273l-2.18.311a.5.5 0 0 1-.566-.565l.311-2.18A4.5 4.5 0 0 1 3.59 8.703zm-5.79 7.204a3.5 3.5 0 0 0-.99 1.98l-.217 1.52 1.52-.217a3.5 3.5 0 0 0 1.98-.99L11.793 6.5 9.5 4.207zm7.911-6.497a1 1 0 0 0-1.414 0l-.586.586L12.5 5.793l.586-.586a1 1 0 0 0 0-1.414z" /></SvgRoot>;
});
export default IconPencil;
