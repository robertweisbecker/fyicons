import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSortDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSortDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M3.495 3a.5.5 0 0 1 .5.5V11h1.54a.5.5 0 0 1 .353.854l-2.043 2.043a.5.5 0 0 1-.707 0l-2.043-2.043A.5.5 0 0 1 1.448 11h1.547V3.5a.5.5 0 0 1 .5-.5M10.5 9a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm2-3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm2-3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconSortDown;
