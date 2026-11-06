import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLaptop = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLaptop(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="laptop"><path fill="currentColor" d="M6 10.5h4V10h3V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5h3zM2 11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1h-3.135a1 1 0 0 1-.865.5H6a1 1 0 0 1-.865-.5zm12-1a1 1 0 0 1 1 1 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2 1 1 0 0 1 1-1V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" /></SvgRoot>;
});
export default IconLaptop;
