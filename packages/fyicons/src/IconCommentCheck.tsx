import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCommentCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCommentCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="comment-check"><g stroke="currentColor" strokeLinejoin="round" clipPath={"url(#" + idPrefix + "clip0_1419_1551)"}><path d="M2.5 7.5a6 6 0 0 1 12 0 6 6 0 0 1-6 6h-5a1 1 0 0 1-1-1z" /><path strokeLinecap="round" d="M6.5 7.75 8.25 9.5l2.25-3.75" /></g><defs><clipPath id={idPrefix + "clip0_1419_1551"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconCommentCheck;
