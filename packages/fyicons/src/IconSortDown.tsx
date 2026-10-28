import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSortDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSortDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sort-down"><path fill="currentColor" d="M11.499 5a.5.5 0 0 1 .5.5v6.795l2.149-2.149a.5.5 0 1 1 .707.707l-3 3a.5.5 0 0 1-.707 0l-3-3a.5.5 0 0 1 .706-.707L11 12.292V5.5a.5.5 0 0 1 .5-.5m-7 3a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm3-3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm6-3a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconSortDown;
