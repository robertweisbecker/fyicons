import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShieldCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShieldCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="shield-check"><path fill="currentColor" d="M7.323 1.242a2 2 0 0 1 1.352 0l4.262 1.53c.628.226 1.032.841.99 1.508l-.242 3.776a6.5 6.5 0 0 1-2.5 4.721l-2.573 1.997-.141.092c-.294.157-.65.157-.944 0l-.141-.092-2.573-1.997a6.5 6.5 0 0 1-2.47-4.374l-.03-.347L2.07 4.28a1.5 1.5 0 0 1 .875-1.46l.116-.048zm1.014.941a1 1 0 0 0-.676 0L3.4 3.713a.5.5 0 0 0-.33.503l.242 3.777a5.5 5.5 0 0 0 2.116 3.994L8 13.984l2.572-1.997a5.5 5.5 0 0 0 2.117-3.994l.24-3.777a.5.5 0 0 0-.33-.502zm1.734 3.06a.5.5 0 0 1 .858.514l-3 5a.5.5 0 0 1-.783.096l-2-2a.5.5 0 1 1 .708-.707L7.4 9.693z" />{props.children}</SvgRoot>;
});
export default IconShieldCheck;
