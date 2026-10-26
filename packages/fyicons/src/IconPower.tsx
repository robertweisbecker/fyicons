import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPower = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPower(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.96 2.667a.5.5 0 0 1 .707-.04A7.002 7.002 0 0 1 8 14.845 7 7 0 0 1 3.334 2.627.5.5 0 0 1 4 3.373a6 6 0 1 0 8 0 .5.5 0 0 1-.04-.706M8 1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6A.5.5 0 0 1 8 1" /></SvgRoot>;
});
export default IconPower;
