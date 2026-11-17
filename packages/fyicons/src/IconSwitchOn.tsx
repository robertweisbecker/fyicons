import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSwitchOn = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSwitchOn(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="switch-on"><path fill="currentColor" d="M10 3a5 5 0 0 1 0 10H6A5 5 0 0 1 6 3zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" /></SvgRoot>;
});
export default IconSwitchOn;
