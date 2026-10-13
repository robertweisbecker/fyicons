import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconTrophy = React.forwardRef<SVGSVGElement, IconProps>(function IconTrophy(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M4.5 1.5H11.5V8C11.5 9.933 9.933 11.5 8 11.5V11.5C6.067 11.5 4.5 9.933 4.5 8V1.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M1.5 4C1.5 2.61929 2.61929 1.5 4 1.5H4.5V6.5H4C2.61929 6.5 1.5 5.38071 1.5 4V4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 1.5H12C13.3807 1.5 14.5 2.61929 14.5 4V4C14.5 5.38071 13.3807 6.5 12 6.5H11.5V1.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 11.5V14.5" stroke="currentColor" strokeLinecap="round" /><path d="M10.5 14.5H5.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconTrophy;
