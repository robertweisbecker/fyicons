import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChatRoundCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChatRoundCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chat-round-check"><path fill="currentColor" d="M8.001 1a7 7 0 1 1-2.757 13.434c-.23-.099-.54-.076-.835.075-.71.361-1.568.491-2.494.491a.9.9 0 0 1-.877-.67 1.02 1.02 0 0 1 .282-1.024l.1-.11c.103-.126.21-.301.31-.516.13-.28.23-.595.286-.886.013-.065 0-.164-.073-.29A7 7 0 0 1 8.002 1m0 1a6 6 0 0 0-5.193 9.002c.151.261.263.607.19.981-.071.37-.197.763-.36 1.116-.152.33-.354.656-.597.898.79-.011 1.428-.131 1.914-.379.483-.246 1.11-.35 1.683-.103A6 6 0 1 0 8.001 2m2.082 3.228a.5.5 0 0 1 .838.545l-3.25 5a.5.5 0 0 1-.792.062l-2.25-2.5a.501.501 0 0 1 .744-.67l1.813 2.016z" />{props.children}</SvgRoot>;
});
export default IconChatRoundCheck;
