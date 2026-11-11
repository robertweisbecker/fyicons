import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCommentReplyCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCommentReplyCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="comment-reply-check"><g stroke="currentColor" strokeLinejoin="round" clipPath={"url(#" + idPrefix + "clip0_1480_13259)"}><path d="M13.5 7.5a6 6 0 1 0-12 0 6 6 0 0 0 6 6h5a1 1 0 0 0 1-1z" /><path strokeLinecap="round" d="M5.5 7.75 7.25 9.5 9.5 5.75" /></g><defs><clipPath id={idPrefix + "clip0_1480_13259"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconCommentReplyCheck;
