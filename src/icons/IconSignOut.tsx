import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSignOut = React.forwardRef<SVGSVGElement, IconProps>(function IconSignOut(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M5.85352 5.14694C5.65825 4.95167 5.34175 4.95167 5.14648 5.14694L2.64648 7.64693C2.47584 7.81781 2.45393 8.08186 2.58203 8.27584L2.64648 8.35397L5.14648 10.854C5.34168 11.0489 5.65832 11.0489 5.85352 10.854C6.0487 10.6588 6.04853 10.3422 5.85352 10.1469L4.20703 8.50045H9.5C9.77606 8.50045 9.99987 8.27648 10 8.00045C10 7.72431 9.77614 7.50045 9.5 7.50045H4.20703L5.85352 5.85397C6.0487 5.65879 6.04853 5.34222 5.85352 5.14694Z" fill="currentColor" /><path d="M6.5 3.5V3C6.5 2.17157 7.17157 1.5 8 1.5H11C11.8284 1.5 12.5 2.17157 12.5 3V13C12.5 13.8284 11.8284 14.5 11 14.5H8C7.17157 14.5 6.5 13.8284 6.5 13V12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconSignOut;
