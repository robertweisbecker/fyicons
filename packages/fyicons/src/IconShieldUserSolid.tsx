import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShieldUserSolid = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShieldUserSolid(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="shield-user-solid"><path fill="currentColor" d="M7.325 1.242a2 2 0 0 1 1.352 0l4.262 1.53c.628.226 1.032.841.99 1.508l-.242 3.776a6.5 6.5 0 0 1-2.5 4.721l-2.573 1.997-.141.092c-.294.157-.65.157-.944 0l-.141-.092-2.573-1.997a6.5 6.5 0 0 1-2.47-4.374l-.03-.347-.242-3.776a1.5 1.5 0 0 1 .875-1.46l.115-.048zm1.014.941a1 1 0 0 0-.676 0l-4.262 1.53a.5.5 0 0 0-.33.503l.241 3.777a5.5 5.5 0 0 0 1.852 3.774C5.588 10.804 6.777 10 8 10s2.411.805 2.835 1.768a5.5 5.5 0 0 0 1.854-3.775l.242-3.777a.5.5 0 0 0-.33-.502zM8 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />{props.children}</SvgRoot>;
});
export default IconShieldUserSolid;
