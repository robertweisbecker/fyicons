import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPencil = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPencil(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pencil"><path fill="currentColor" d="M10.586 1.707a2 2 0 0 1 2.828 0l.879.88a2 2 0 0 1 0 2.827l-6.998 6.998a4.5 4.5 0 0 1-2.544 1.272l-2.181.312a.5.5 0 0 1-.566-.566l.312-2.18a4.5 4.5 0 0 1 1.272-2.545zm-6.29 7.705a3.5 3.5 0 0 0-.99 1.979l-.218 1.52 1.52-.217a3.5 3.5 0 0 0 1.98-.99L12.293 6 10 3.707zm8.41-6.998a1 1 0 0 0-1.413 0L10.707 3l2.292 2.293.586-.586a1 1 0 0 0 0-1.414z" /></SvgRoot>;
});
export default IconPencil;
