import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCommentCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCommentCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="comment-check"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14H1V8a7 7 0 0 1 7-7m0 1a6 6 0 0 0-6 6v6h6A6 6 0 0 0 8 2m2.081 3.228a.5.5 0 0 1 .839.544l-3.251 5a.5.5 0 0 1-.791.062l-2.25-2.5a.5.5 0 0 1 .744-.668l1.813 2.015z" /></SvgRoot>;
});
export default IconCommentCheck;
