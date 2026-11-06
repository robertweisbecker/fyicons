import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShieldWarning = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShieldWarning(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="shield-warning"><path fill="currentColor" d="M7.324 1.242a2 2 0 0 1 1.351 0l4.262 1.53a1.5 1.5 0 0 1 .99 1.508l-.24 3.776a6.5 6.5 0 0 1-2.502 4.72l-2.572 1.998-.142.092a1 1 0 0 1-.943 0l-.142-.092-2.572-1.997a6.5 6.5 0 0 1-2.47-4.374l-.03-.347-.242-3.776a1.5 1.5 0 0 1 .875-1.461l.115-.047zm1.014.941a1 1 0 0 0-.676 0L3.4 3.713a.5.5 0 0 0-.33.502l.241 3.778a5.5 5.5 0 0 0 2.116 3.994L8 13.984l2.572-1.997a5.5 5.5 0 0 0 2.116-3.994l.241-3.778a.5.5 0 0 0-.33-.502z" /><path fill="currentColor" d="M8 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-4.875c.173 0 .339.066.456.183a.58.58 0 0 1 .169.442l-.006.138-.113 2.474L8.5 7.5a.504.504 0 0 1-.5.478.504.504 0 0 1-.5-.478l-.006-.138-.113-2.474-.006-.138a.58.58 0 0 1 .169-.442A.65.65 0 0 1 8 4.125" /></SvgRoot>;
});
export default IconShieldWarning;
