import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconPurse = React.forwardRef<SVGSVGElement, IconProps>(function IconPurse(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M9.49908 2C10.3273 2.00026 10.9991 2.67173 10.9991 3.5V5H11.7862C12.4267 5 12.9969 5.407 13.2051 6.0127L14.8116 10.6875C15.3694 12.3105 14.1635 14 12.4473 14H3.55279C1.83662 14 0.630704 12.3105 1.18853 10.6875L2.79497 6.0127C3.00318 5.40701 3.57346 5.00003 4.21392 5H4.99908V3.5C4.99908 2.67157 5.67065 2 6.49908 2H9.49908ZM4.21392 6C4.00045 6.00003 3.81066 6.13601 3.74126 6.33789L2.13384 11.0127C1.79937 11.9864 2.52319 13 3.55279 13H12.4473C13.477 13 14.2008 11.9864 13.8663 11.0127L12.2588 6.33789C12.1894 6.136 11.9997 6 11.7862 6H4.21392ZM6.49908 3C6.22293 3 5.99908 3.22386 5.99908 3.5V5H9.99908V3.5C9.99908 3.22402 9.775 3.00026 9.49908 3H6.49908Z" fill="currentColor" /><circle cx={10.5} cy={7.5} r={0.5} fill="currentColor" /><circle cx={5.5} cy={7.5} r={0.5} fill="currentColor" /></SvgRoot>;
});
export default IconPurse;
