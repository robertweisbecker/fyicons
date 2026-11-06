import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCompassFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCompassFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="compass-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m3.854 3.146a.5.5 0 0 0-.552-.105L7.506 5.676a3.5 3.5 0 0 0-1.83 1.83L4.04 11.302a.5.5 0 0 0 .657.657l3.796-1.635a3.5 3.5 0 0 0 1.83-1.83l1.635-3.796a.5.5 0 0 0-.105-.552M8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2" /></SvgRoot>;
});
export default IconCompassFill;
