import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCommentReplyNotification = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCommentReplyNotification(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="comment-reply-notification"><g clipPath={"url(#" + idPrefix + "clip0_1480_13261)"}><path stroke="currentColor" strokeLinejoin="round" d="M13.5 7.5a6 6 0 1 0-12 0 6 6 0 0 0 6 6h5a1 1 0 0 0 1-1z" /><circle cx={12.5} cy={3.5} r={2.5} fill="currentColor" /></g><defs><clipPath id={idPrefix + "clip0_1480_13261"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconCommentReplyNotification;
