import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronsCollapse = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronsCollapse(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.484 9.02a.5.5 0 0 1 .498.497l.017 3.981a.5.5 0 0 1-1 .005l-.016-3.487L2.496 10a.5.5 0 0 1 .006-1zM9.497 2a.5.5 0 0 1 .503.498l.014 3.487L13.5 6a.5.5 0 0 1-.004 1l-3.983-.017a.5.5 0 0 1-.499-.498L9 2.502a.5.5 0 0 1 .498-.503" /></SvgRoot>;
});
export default IconChevronsCollapse;
