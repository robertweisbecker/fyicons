import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShieldX = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShieldX(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="shield-x"><path fill="currentColor" d="M7.324 1.241a2 2 0 0 1 1.352 0l4.262 1.53c.628.227 1.032.842.99 1.509l-.241 3.776a6.5 6.5 0 0 1-2.501 4.72l-2.573 1.998-.141.092c-.294.157-.65.157-.944 0l-.141-.092-2.572-1.997a6.5 6.5 0 0 1-2.47-4.374l-.031-.347-.242-3.776a1.5 1.5 0 0 1 .875-1.461l.116-.047zm1.014.942a1 1 0 0 0-.676 0L3.4 3.713a.5.5 0 0 0-.33.502l.242 3.777a5.5 5.5 0 0 0 2.116 3.995L8 13.984l2.572-1.997a5.5 5.5 0 0 0 2.117-3.995l.24-3.777a.5.5 0 0 0-.33-.502zm.81 3.964a.5.5 0 1 1 .707.707L8.708 8l1.147 1.147a.5.5 0 0 1-.707.707L8 8.707 6.855 9.854a.5.5 0 0 1-.707-.707L7.294 8 6.148 6.854a.5.5 0 1 1 .707-.707L8 7.293z" /></SvgRoot>;
});
export default IconShieldX;
