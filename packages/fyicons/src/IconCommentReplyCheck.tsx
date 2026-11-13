import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCommentReplyCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCommentReplyCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="comment-reply-check"><path stroke="currentColor" strokeLinejoin="round" d="M13.5 7.5a6 6 0 1 0-12 0 6 6 0 0 0 6 6h5a1 1 0 0 0 1-1z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.5 7.75 7.25 9.5 9.5 5.75" /></SvgRoot>;
});
export default IconCommentReplyCheck;
