import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSign = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSign(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="sign"><path d="M2.5 4.5C2.5 3.94772 2.94772 3.5 3.5 3.5H11.1301C11.3688 3.5 11.5996 3.58539 11.7809 3.74074L14.5571 6.12037C14.7899 6.31992 14.7899 6.68008 14.5571 6.87963L11.7809 9.25926C11.5996 9.41461 11.3688 9.5 11.1301 9.5H3.5C2.94772 9.5 2.5 9.05228 2.5 8.5V4.5Z" stroke="currentColor" strokeLinejoin="round" /><path d="M7.5 2.5V3.5" stroke="currentColor" strokeLinecap="round" /><path d="M7.5 9.5V13.5" stroke="currentColor" strokeLinecap="round" /><path d="M9.5 13.5H5.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconSign;
