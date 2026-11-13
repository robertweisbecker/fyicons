import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCommentCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCommentCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="comment-check"><path stroke="currentColor" strokeLinejoin="round" d="M2.5 7.5a6 6 0 0 1 12 0 6 6 0 0 1-6 6h-5a1 1 0 0 1-1-1z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.5 7.75 8.25 9.5l2.25-3.75" /></SvgRoot>;
});
export default IconCommentCheck;
