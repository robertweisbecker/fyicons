import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCommentReplyNotification = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCommentReplyNotification(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="comment-reply-notification"><path stroke="currentColor" strokeLinecap="round" d="M7.5 1.5a6 6 0 1 0 0 12h4.667c.31 0 .465 0 .592-.034a1 1 0 0 0 .707-.707c.034-.127.034-.282.034-.592V7.5" /><circle cx={11.5} cy={3.5} r={2.5} fill="currentColor" /></SvgRoot>;
});
export default IconCommentReplyNotification;
