import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronsCollapse = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronsCollapse(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chevrons-collapse"><path fill="currentColor" d="M6.484 9.019a.5.5 0 0 1 .498.498l.017 3.98a.5.5 0 0 1-1 .005l-.016-3.487L2.496 10a.5.5 0 0 1 .006-1zm3.014-7.02c.276 0 .502.223.503.499l.014 3.487L13.502 6a.5.5 0 0 1-.004 1l-3.983-.016a.5.5 0 0 1-.499-.499L9 2.502A.5.5 0 0 1 9.498 2" />{props.children}</SvgRoot>;
});
export default IconChevronsCollapse;
