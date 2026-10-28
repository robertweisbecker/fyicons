import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayoutTabs = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutTabs(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M4.5 2.99988C4.77611 2.99988 4.99995 3.22378 5 3.49988C5 3.77602 4.77614 3.99988 4.5 3.99988H3C2.44774 3.99988 2.00005 4.44763 2 4.99988V10.9999C2 11.5522 2.44772 11.9999 3 11.9999H13C13.5523 11.9999 14 11.5522 14 10.9999V8.49988C14 8.22378 14.2239 7.99988 14.5 7.99988C14.7761 7.99988 15 8.22378 15 8.49988V10.9999C15 12.1044 14.1046 12.9999 13 12.9999H3C1.89543 12.9999 1 12.1044 1 10.9999V4.99988C1.00005 3.89535 1.89546 2.99988 3 2.99988H4.5Z" fill="currentColor" /><path d="M3.5 3.5H5.5C6.05228 3.5 6.5 3.94772 6.5 4.5V5.5C6.5 6.05228 6.94772 6.5 7.5 6.5H14.5V10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 6.5V4.5C10.5 3.94772 10.0523 3.5 9.5 3.5H7.5C6.94772 3.5 6.5 3.94772 6.5 4.5V5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 6.5V4.5C14.5 3.94772 14.0523 3.5 13.5 3.5H11.5C10.9477 3.5 10.5 3.94772 10.5 4.5V5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconLayoutTabs;
