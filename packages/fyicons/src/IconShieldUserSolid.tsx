import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShieldUserSolid = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShieldUserSolid(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="shield-user-solid"><path fill="currentColor" d="M7.324 1.241a2 2 0 0 1 1.352 0l4.262 1.53c.628.227 1.032.842.99 1.509l-.242 3.776a6.5 6.5 0 0 1-2.5 4.72l-2.573 1.998-.141.092c-.294.157-.65.157-.944 0l-.141-.092-2.573-1.997a6.5 6.5 0 0 1-2.47-4.374l-.03-.347-.242-3.776a1.5 1.5 0 0 1 .875-1.461l.115-.047zm1.014.942a1 1 0 0 0-.676 0L3.4 3.713a.5.5 0 0 0-.33.502l.242 3.777a5.5 5.5 0 0 0 1.852 3.776C5.588 10.805 6.777 10 8 10s2.41.804 2.835 1.767a5.5 5.5 0 0 0 1.853-3.775l.242-3.777a.5.5 0 0 0-.33-.502zM8 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></SvgRoot>;
});
export default IconShieldUserSolid;
