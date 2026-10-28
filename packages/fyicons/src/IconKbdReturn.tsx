import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconKbdReturn = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconKbdReturn(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="kbd-return"><path fill="currentColor" d="M12 3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3.707l2.146 2.146a.5.5 0 1 1-.707.707l-3-3a.5.5 0 0 1 0-.707l3-3a.5.5 0 1 1 .707.708L3.707 9H12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconKbdReturn;
