import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHomeWide = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHomeWide(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M14.5 7.5L8.96891 2.81985C8.40964 2.34662 7.59036 2.34662 7.03109 2.81985L1.5 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.5 6.75V12.1667C13.5 12.903 12.903 13.5 12.1667 13.5H3.83333C3.09695 13.5 2.5 12.903 2.5 12.1667V6.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.5 13.5V10C9.5 9.17157 8.82843 8.5 8 8.5C7.17157 8.5 6.5 9.17157 6.5 10V13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconHomeWide;
