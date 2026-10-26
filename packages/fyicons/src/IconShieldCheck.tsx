import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShieldCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShieldCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.325 1.242a2 2 0 0 1 1.351 0l4.262 1.53a1.5 1.5 0 0 1 .99 1.508l-.24 3.776a6.5 6.5 0 0 1-2.502 4.721l-2.572 1.997-.142.092a1 1 0 0 1-.943 0l-.142-.092-2.572-1.997a6.5 6.5 0 0 1-2.47-4.374l-.03-.347-.242-3.776a1.5 1.5 0 0 1 .875-1.46l.115-.048zm1.014.941a1 1 0 0 0-.676 0L3.4 3.713a.5.5 0 0 0-.33.503l.241 3.777a5.5 5.5 0 0 0 2.116 3.994L8 13.984l2.572-1.997a5.5 5.5 0 0 0 2.116-3.994l.241-3.777a.5.5 0 0 0-.33-.502zm1.224 3.572a.5.5 0 1 1 .871.49l-2.25 4a.5.5 0 0 1-.384.253.5.5 0 0 1-.427-.17l-1.75-2a.5.5 0 0 1 .752-.657l1.284 1.467z" /></SvgRoot>;
});
export default IconShieldCheck;
