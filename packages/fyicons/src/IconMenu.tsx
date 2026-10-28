import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMenu = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMenu(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="menu"><path fill="currentColor" d="M14.5 12a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1zm0-4a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1zm0-4a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconMenu;
