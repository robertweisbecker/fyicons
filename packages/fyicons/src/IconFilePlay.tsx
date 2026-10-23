import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFilePlay = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFilePlay(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><g clipPath={"url(#" + idPrefix + "clip0_1013_19504)"}><path d="M8.87891 1C9.40926 1.00006 9.91795 1.21092 10.293 1.58594L12.4141 3.70703C12.7891 4.08205 12.9999 4.59075 13 5.12109V12.5C13 13.8807 11.8807 15 10.5 15H5.5C4.11929 15 3.00001 13.8807 3 12.5V3C3 1.89543 3.89543 1 5 1H8.87891ZM5 2C4.44772 2 4 2.44772 4 3V12.5C4.00001 13.3284 4.67158 14 5.5 14H10.5C11.3284 14 12 13.3284 12 12.5V6H9.5C8.67157 6 8 5.32843 8 4.5V2H5ZM9 4.5C9 4.77614 9.22386 5 9.5 5H11.9922C11.9652 4.77947 11.8657 4.57277 11.707 4.41406L9.58594 2.29297C9.42724 2.13427 9.22052 2.03478 9 2.00781V4.5Z" fill="currentColor" /><path d="M6 10.6754V7.32464C6 6.74167 6.63598 6.38159 7.13587 6.68152L9.92813 8.35688C10.4136 8.64818 10.4136 9.35182 9.92813 9.64312L7.13587 11.3185C6.63598 11.6184 6 11.2583 6 10.6754Z" fill="currentColor" /></g><defs><clipPath id={idPrefix + "clip0_1013_19504"}><rect width={16} height={16} fill="white" /></clipPath></defs></SvgRoot>;
});
export default IconFilePlay;
