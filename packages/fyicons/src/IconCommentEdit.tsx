import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCommentEdit = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCommentEdit(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="comment-edit"><path fill="currentColor" d="M8.5 1a6.5 6.5 0 1 1 0 13h-5A1.5 1.5 0 0 1 2 12.5v-5A6.5 6.5 0 0 1 8.5 1m0 1A5.5 5.5 0 0 0 3 7.5v5a.5.5 0 0 0 .5.5h5a5.5 5.5 0 1 0 0-11m.823 6.03-2.19 2.19c-.499.5-1.176.78-1.883.78H5v-.25c0-.707.28-1.384.78-1.884l2.19-2.19zm0-2.707a.957.957 0 0 1 1.354 1.354l-.647.646L8.677 5.97z" />{props.children}</SvgRoot>;
});
export default IconCommentEdit;
