import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBroom = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBroom(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.25 11.25L5.75 6.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.84315 8.5H1.5V9.5C1.5 10.6046 2.39543 11.5 3.5 11.5L2.5 12.5C4.51969 13.9426 7.28634 13.7137 9.04138 11.9586L10.5 10.5C11.0523 9.94772 11.0523 9.05228 10.5 8.5V7.5C10.5 6.94772 10.0523 6.5 9.5 6.5H8.5C7.94772 5.94772 7.05228 5.94772 6.5 6.5L5.67157 7.32843C4.92143 8.07857 3.90401 8.5 2.84315 8.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 2.5L10.5 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconBroom;
