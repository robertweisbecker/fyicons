import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChatRoundEllipsis = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChatRoundEllipsis(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.002 1a7 7 0 1 1-2.758 13.434c-.23-.1-.539-.076-.835.075C3.7 14.87 2.842 15 1.915 15a.9.9 0 0 1-.877-.67 1.02 1.02 0 0 1 .283-1.024l.1-.11a2.5 2.5 0 0 0 .31-.516c.13-.28.23-.595.286-.886.012-.065 0-.164-.073-.29A7 7 0 0 1 8.003 1m0 1a6 6 0 0 0-5.193 9.002c.151.26.263.607.19.981-.071.37-.197.762-.36 1.116-.153.33-.354.656-.598.898.79-.011 1.429-.131 1.914-.379.484-.246 1.11-.35 1.684-.103A6 6 0 1 0 8.002 2" /><path fill="currentColor" d="M5 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" /></SvgRoot>;
});
export default IconChatRoundEllipsis;
