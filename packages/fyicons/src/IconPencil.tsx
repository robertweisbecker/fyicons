import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPencil = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPencil(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.086 1.207a2 2 0 0 1 2.828 0l.879.878a2 2 0 0 1 0 2.829L7.296 12.41a4.5 4.5 0 0 1-2.545 1.272l-2.18.312a.5.5 0 0 1-.566-.566l.311-2.18A4.5 4.5 0 0 1 3.59 8.704zM4.296 9.41a3.5 3.5 0 0 0-.99 1.98l-.216 1.52 1.52-.217a3.5 3.5 0 0 0 1.98-.99L12.793 5.5 10.5 3.207zm8.911-7.497a1 1 0 0 0-1.414 0l-.586.586L13.5 4.792l.586-.585a1 1 0 0 0 0-1.415z" /></SvgRoot>;
});
export default IconPencil;
