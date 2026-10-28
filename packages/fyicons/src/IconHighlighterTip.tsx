import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHighlighterTip = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHighlighterTip(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><g clipPath={"url(#" + idPrefix + "clip0_137_4863)"}><path d="M9.22266 1.08398C9.37608 0.981699 9.57375 0.972561 9.73633 1.05957C9.89862 1.14666 10 1.31579 10 1.5V6.02734C10.5657 6.13507 11.031 6.56111 11.1748 7.13574L11.9854 10.3789C11.9952 10.4185 12 10.4592 12 10.5V16H4V10.5C4 10.4592 4.00478 10.4185 4.01465 10.3789L4.8252 7.13574C4.96899 6.56111 5.43435 6.13507 6 6.02734V3.5C6 3.33283 6.08357 3.17672 6.22266 3.08398L9.22266 1.08398ZM5 10.875V15H11V10.875H5ZM6.28125 7C6.05182 7 5.85154 7.15632 5.7959 7.37891L5.10938 10.125H10.8906L10.2041 7.37891C10.1485 7.15632 9.94818 7 9.71875 7H6.28125ZM7 3.76758V6H9V2.43359L7 3.76758Z" fill="currentColor" /><path opacity={0.5} d="M9.5 1.5V6.5H6.5V3.5L9.5 1.5Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath id={idPrefix + "clip0_137_4863"}><rect width={16} height={16} fill="white" /></clipPath></defs></SvgRoot>;
});
export default IconHighlighterTip;
