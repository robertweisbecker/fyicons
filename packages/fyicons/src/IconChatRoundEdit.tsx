import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChatRoundEdit = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChatRoundEdit(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chat-round-edit"><path fill="currentColor" d="M8.001 1a7 7 0 1 1-2.757 13.434c-.23-.1-.54-.076-.835.075-.71.361-1.568.491-2.494.491a.9.9 0 0 1-.877-.67 1.02 1.02 0 0 1 .282-1.024l.1-.11a2.5 2.5 0 0 0 .31-.516c.13-.28.23-.595.286-.886.013-.065 0-.164-.073-.29A7 7 0 0 1 8.002 1m0 1a6 6 0 0 0-5.193 9.002c.151.26.263.607.19.981-.071.37-.197.762-.36 1.116-.152.33-.354.656-.597.898.79-.011 1.428-.131 1.914-.379.483-.246 1.11-.35 1.683-.103A6 6 0 1 0 8.001 2m1.327 6.03-2.19 2.19c-.5.5-1.177.78-1.884.78h-.25v-.25c0-.706.281-1.384.78-1.884l2.19-2.19zm0-2.707a.957.957 0 0 1 1.353 1.354l-.646.646L8.68 5.97z" />{props.children}</SvgRoot>;
});
export default IconChatRoundEdit;
