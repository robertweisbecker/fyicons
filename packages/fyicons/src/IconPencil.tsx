import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPencil = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPencil(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pencil"><path fill="currentColor" d="M10.586 1.707a2 2 0 0 1 2.828 0l.879.88a2 2 0 0 1 0 2.827L7.46 12.247a4.5 4.5 0 0 1-2.3 1.23l-2.562.514a.5.5 0 0 1-.588-.588l.512-2.563a4.5 4.5 0 0 1 1.23-2.3zM4.46 9.247a3.5 3.5 0 0 0-.957 1.788l-.366 1.828 1.828-.366a3.5 3.5 0 0 0 1.788-.957L12.293 6 10 3.707zm8.247-6.833a1 1 0 0 0-1.414 0L10.707 3 13 5.293l.586-.586a1 1 0 0 0 0-1.414z" /></SvgRoot>;
});
export default IconPencil;
