import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCommentReplyEdit = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCommentReplyEdit(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="comment-reply-edit"><path fill="currentColor" d="M7.5 1A6.5 6.5 0 0 1 14 7.5v5a1.5 1.5 0 0 1-1.5 1.5h-5a6.5 6.5 0 1 1 0-13m0 1a5.5 5.5 0 1 0 0 11h5a.5.5 0 0 0 .5-.5v-5A5.5 5.5 0 0 0 7.5 2m2.509 6.655a4.25 4.25 0 0 1 1.027 1.661l.201.605a.251.251 0 0 1-.316.316l-.605-.2a4.26 4.26 0 0 1-1.66-1.028L6.675 8.03 8.03 6.677zM5.323 5.323a.96.96 0 0 1 1.354 0l.646.647L5.97 7.323l-.647-.646a.96.96 0 0 1 0-1.354" />{props.children}</SvgRoot>;
});
export default IconCommentReplyEdit;
