import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChatRoundSparkles = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChatRoundSparkles(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chat-round-sparkles"><path fill="currentColor" d="M8.001 1a7 7 0 1 1-2.758 13.434c-.23-.099-.54-.076-.835.075C3.7 14.87 2.84 15 1.914 15a.904.904 0 0 1-.877-.67 1.02 1.02 0 0 1 .282-1.024l.1-.11c.104-.126.211-.302.31-.516.13-.28.23-.595.287-.886.012-.065 0-.164-.074-.29A7 7 0 0 1 8.001 1m0 1a6 6 0 0 0-5.193 9.002c.15.26.262.607.19.981a5 5 0 0 1-.36 1.116c-.153.33-.354.656-.598.898.79-.011 1.428-.131 1.914-.379.483-.246 1.11-.35 1.684-.103A6 6 0 1 0 8 2m-.502 3.5a.5.5 0 0 1 .46.303l.67 1.565 1.567.672a.5.5 0 0 1 0 .92l-1.566.67-.671 1.567a.5.5 0 0 1-.92 0l-.672-1.566-1.565-.671a.5.5 0 0 1 0-.92l1.565-.672.672-1.565.034-.066A.5.5 0 0 1 7.5 5.5m3-1.5a.25.25 0 0 1 .237.17l.273.82.82.273a.25.25 0 0 1 0 .474l-.82.273-.273.82a.25.25 0 0 1-.474 0l-.274-.82-.818-.273a.25.25 0 0 1 0-.474l.818-.274.274-.818.036-.07a.25.25 0 0 1 .2-.101" /></SvgRoot>;
});
export default IconChatRoundSparkles;
