import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShieldUser = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShieldUser(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="shield-user"><path fill="currentColor" d="M7.323 1.242a2 2 0 0 1 1.352 0l4.262 1.53c.628.226 1.032.841.99 1.508l-.242 3.776a6.5 6.5 0 0 1-2.5 4.72l-2.573 1.998-.141.092c-.294.157-.65.157-.944 0l-.141-.092-2.573-1.997a6.5 6.5 0 0 1-2.47-4.374l-.03-.347L2.07 4.28a1.5 1.5 0 0 1 .875-1.461l.116-.047zM8 10c-1.235 0-2.26.895-2.462 2.073L8 13.984l2.461-1.912A2.5 2.5 0 0 0 8 10m.337-7.818a1 1 0 0 0-.676 0L3.4 3.713a.5.5 0 0 0-.33.502l.242 3.778a5.5 5.5 0 0 0 1.395 3.319c.299-.827.9-1.51 1.67-1.913A2.5 2.5 0 1 1 10.5 7.5c0 .76-.34 1.44-.877 1.898a3.5 3.5 0 0 1 1.67 1.913 5.5 5.5 0 0 0 1.396-3.32l.24-3.777a.5.5 0 0 0-.33-.502zM8 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /></SvgRoot>;
});
export default IconShieldUser;
