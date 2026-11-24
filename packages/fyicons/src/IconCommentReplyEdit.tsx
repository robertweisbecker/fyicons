import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCommentReplyEdit = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCommentReplyEdit(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="comment-reply-edit"><path fill="currentColor" d="M7.5 1A6.5 6.5 0 0 1 14 7.5v5a1.5 1.5 0 0 1-1.5 1.5h-5a6.5 6.5 0 1 1 0-13m0 1a5.5 5.5 0 1 0 0 11h5a.5.5 0 0 0 .5-.5v-5A5.5 5.5 0 0 0 7.5 2m2.72 6.866c.5.5.78 1.178.78 1.884V11h-.25c-.707 0-1.384-.28-1.884-.78l-2.19-2.19L8.03 6.677zM5.323 5.323a.957.957 0 0 1 1.354 0l.646.647L5.97 7.323l-.647-.646a.957.957 0 0 1 0-1.354" />{props.children}</SvgRoot>;
});
export default IconCommentReplyEdit;
