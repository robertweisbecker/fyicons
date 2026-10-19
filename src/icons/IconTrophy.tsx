import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconTrophy = React.forwardRef<SVGSVGElement, IconProps>(function IconTrophy(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M4.5 2.5H11.5V7C11.5 8.933 9.933 10.5 8 10.5V10.5C6.067 10.5 4.5 8.933 4.5 7V2.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M1.5 5C1.5 3.61929 2.61929 2.5 4 2.5H4.5V7.5H4C2.61929 7.5 1.5 6.38071 1.5 5V5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 2.5H12C13.3807 2.5 14.5 3.61929 14.5 5V5C14.5 6.38071 13.3807 7.5 12 7.5H11.5V2.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 10.5V13.5" stroke="currentColor" strokeLinecap="round" /><path d="M10.5 13.5H5.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconTrophy;
