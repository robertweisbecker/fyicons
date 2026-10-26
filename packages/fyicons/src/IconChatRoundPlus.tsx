import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChatRoundPlus = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChatRoundPlus(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.001 1a7 7 0 1 1-2.758 13.434c-.23-.099-.54-.076-.835.075-.71.361-1.568.491-2.494.491a.9.9 0 0 1-.877-.67 1.02 1.02 0 0 1 .282-1.024l.1-.11c.104-.126.211-.302.31-.516.13-.28.23-.595.287-.886.012-.065 0-.164-.074-.29A7 7 0 0 1 8.001 1m0 1a6 6 0 0 0-5.193 9.002c.15.26.262.607.19.981a5 5 0 0 1-.36 1.116c-.153.33-.354.656-.598.898.79-.011 1.428-.131 1.914-.379.483-.246 1.11-.35 1.684-.103A6 6 0 1 0 8 2m0 3a.5.5 0 0 1 .5.5v1.995h2.005a.5.5 0 0 1 0 1H8.5V10.5a.5.5 0 0 1-1 0V8.495H5.505a.5.5 0 0 1 0-1H7.5V5.5A.5.5 0 0 1 8 5" /></SvgRoot>;
});
export default IconChatRoundPlus;
