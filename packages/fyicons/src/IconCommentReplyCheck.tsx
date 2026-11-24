import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCommentReplyCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCommentReplyCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="comment-reply-check"><path stroke="currentColor" strokeLinejoin="round" d="M12.5 13.5h-5a6 6 0 1 1 0-12 6 6 0 0 1 6 6v5a1 1 0 0 1-1 1Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.5 7.75 7.25 9.5 9.5 5.75" />{props.children}</SvgRoot>;
});
export default IconCommentReplyCheck;
