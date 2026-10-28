import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSwitchOn = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSwitchOn(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10 4a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8zm0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6" /></SvgRoot>;
});
export default IconSwitchOn;
