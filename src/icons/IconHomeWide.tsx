import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconHomeWide = React.forwardRef<SVGSVGElement, IconProps>(function IconHomeWide(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M14.5 7.5L8.96891 2.81985C8.40964 2.34662 7.59036 2.34662 7.03109 2.81985L1.5 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.5 6.75V12.1667C13.5 12.903 12.903 13.5 12.1667 13.5H3.83333C3.09695 13.5 2.5 12.903 2.5 12.1667V6.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.5 13.5V11C9.5 10.1716 8.82843 9.5 8 9.5C7.17157 9.5 6.5 10.1716 6.5 11V13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconHomeWide;
