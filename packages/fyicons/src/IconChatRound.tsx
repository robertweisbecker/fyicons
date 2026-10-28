import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChatRound = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChatRound(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chat-round"><path fill="currentColor" d="M8.003 1a7 7 0 1 1-2.757 13.435c-.23-.1-.54-.076-.835.075-.71.361-1.57.49-2.495.49a.9.9 0 0 1-.876-.672 1.02 1.02 0 0 1 .282-1.022l.1-.11a2.5 2.5 0 0 0 .31-.516 4 4 0 0 0 .285-.885c.013-.065 0-.164-.073-.29A7 7 0 0 1 8.003 1m0 1a6 6 0 0 0-5.195 9.003c.152.26.264.607.192.981-.072.37-.198.762-.36 1.115-.153.33-.354.656-.597.898.79-.011 1.428-.131 1.914-.379.483-.246 1.11-.349 1.683-.102A6 6 0 1 0 8.002 2" /></SvgRoot>;
});
export default IconChatRound;
