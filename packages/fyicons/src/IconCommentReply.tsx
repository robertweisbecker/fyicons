import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCommentReply = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCommentReply(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="comment-reply"><path stroke="currentColor" strokeLinejoin="round" d="M13.5 7.5a6 6 0 1 0-12 0 6 6 0 0 0 6 6h5a1 1 0 0 0 1-1z" />{props.children}</SvgRoot>;
});
export default IconCommentReply;
