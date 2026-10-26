import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSwitchOff = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSwitchOff(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10 4a4 4 0 0 1 .206 7.995L10 12H6l-.206-.005A4 4 0 0 1 6 4zM6 5a3 3 0 0 0 0 6h4a3 3 0 1 0 0-6zm0 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></SvgRoot>;
});
export default IconSwitchOff;
