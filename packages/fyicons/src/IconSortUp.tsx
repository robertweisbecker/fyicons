import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSortUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSortUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.498 6a.5.5 0 0 1 .5.5v5.795l1.149-1.148a.5.5 0 0 1 .707.707l-2 2a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 .707-.707l1.144 1.144v-5.79a.5.5 0 0 1 .5-.5m-6.999 6a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm2-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm2-3a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm5-3a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconSortUp;
