import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChatRoundQuotes = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChatRoundQuotes(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chat-round-quotes"><path fill="currentColor" d="M8.001 1a7 7 0 1 1-2.758 13.434c-.23-.099-.54-.076-.835.075C3.7 14.87 2.84 15 1.914 15a.904.904 0 0 1-.877-.67 1.02 1.02 0 0 1 .282-1.024l.1-.11c.104-.126.211-.302.31-.516.13-.28.23-.595.287-.886.012-.065 0-.164-.074-.29A7 7 0 0 1 8.001 1m0 1a6 6 0 0 0-5.193 9.002c.15.26.262.607.19.981a5 5 0 0 1-.36 1.116c-.153.33-.354.656-.598.898.79-.011 1.428-.131 1.914-.379.483-.246 1.11-.35 1.684-.103A6 6 0 1 0 8 2M6.053 5.959a1.5 1.5 0 0 1 1.694 1.277 3 3 0 0 1-2.087 3.286c-.252.077-.496-.11-.533-.372-.033-.236.118-.454.326-.57a1.73 1.73 0 0 0 .65-.645 1.5 1.5 0 0 1-.05-2.976m4 0a1.5 1.5 0 0 1 1.695 1.277 3 3 0 0 1-2.087 3.286c-.252.077-.496-.11-.533-.372-.033-.236.118-.454.326-.57a1.73 1.73 0 0 0 .65-.645 1.5 1.5 0 0 1-.05-2.976" /></SvgRoot>;
});
export default IconChatRoundQuotes;
