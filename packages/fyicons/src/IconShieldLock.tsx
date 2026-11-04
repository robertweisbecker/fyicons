import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShieldLock = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShieldLock(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="shield-lock"><path fill="currentColor" d="M7.323 1.242a2 2 0 0 1 1.352 0l4.262 1.53a1.5 1.5 0 0 1 .99 1.509l-.242 3.776a6.5 6.5 0 0 1-2.5 4.72l-2.573 1.998-.141.091a1 1 0 0 1-.944 0l-.141-.091-2.573-1.997a6.5 6.5 0 0 1-2.47-4.374l-.03-.347L2.07 4.28a1.5 1.5 0 0 1 .875-1.461l.116-.047zm1.014.942a1 1 0 0 0-.676 0L3.4 3.714a.5.5 0 0 0-.33.502l.242 3.777a5.5 5.5 0 0 0 2.116 3.995L8 13.985l2.572-1.997a5.5 5.5 0 0 0 2.117-3.995l.24-3.777a.5.5 0 0 0-.33-.502zM8 4c1.104.001 2 .896 2 2v1.092c.461.165.817.544.945 1.022.051.19.052.424.052.888s0 .697-.052.888a1.5 1.5 0 0 1-1.06 1.06c-.19.052-.424.052-.888.052h-2c-.465 0-.698 0-.889-.052a1.5 1.5 0 0 1-1.06-1.06c-.051-.19-.05-.423-.05-.888 0-.464-.001-.698.05-.888.129-.48.487-.862.952-1.025V6a2 2 0 0 1 2-2m-.001 4.001a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m.001-3a1 1 0 0 0-1 1v1.001h2V6c0-.551-.449-.999-1-1" /></SvgRoot>;
});
export default IconShieldLock;
