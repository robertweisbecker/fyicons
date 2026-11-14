import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBell2Slash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBell2Slash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bell-2-slash"><path fill="currentColor" d="M8 1a1.75 1.75 0 0 1 1.644 2.346A4.1 4.1 0 0 1 12.1 7.1v2.228l.87 1.902a1.248 1.248 0 0 1-.916 1.747l.858 1.239a.5.5 0 0 1-.823.568L10.854 13h-.853l-.011.204a2 2 0 0 1-3.98 0L6 13H4.167a1.25 1.25 0 0 1-1.136-1.77L3.9 9.329V7.1c0-1.03.38-1.97 1.007-2.689L3.088 1.784a.5.5 0 0 1 .823-.568l1.746 2.522a4 4 0 0 1 .699-.393A1.75 1.75 0 0 1 8.001 1M7 13a1 1 0 0 0 2 0zM8 2a.75.75 0 0 0-.607 1.188c.228.314.119.816-.311.95-.31.095-.598.239-.857.42L11.377 12h.455l.065-.009a.25.25 0 0 0 .162-.344l-.904-1.981a.6.6 0 0 1-.055-.249V7.1c0-1.392-.918-2.57-2.182-2.962-.43-.134-.54-.637-.311-.95a.75.75 0 0 0-.53-1.184zM5.5 5.268A3.1 3.1 0 0 0 4.9 7.1v2.317a.6.6 0 0 1-.055.249l-.904 1.98a.25.25 0 0 0 .226.354h5.995z" />{props.children}</SvgRoot>;
});
export default IconBell2Slash;
