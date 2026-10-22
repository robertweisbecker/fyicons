import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBird = React.forwardRef<SVGSVGElement, IconProps>(function IconBird(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.5 5C7.5 3.61929 6.36809 2.5 4.98737 2.5C3.62054 2.5 2.5 3.60804 2.5 4.97487V5.05719C2.5 5.66086 2.73981 6.23981 3.16667 6.66667C3.3801 6.8801 3.5 7.16957 3.5 7.4714V7.77208C3.5 9.83095 5.16905 11.5 7.22792 11.5H10.5L12.9137 12.3046C13.273 12.4243 13.6692 12.3308 13.937 12.063L14.5 11.5L11.75 9.75" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" /><path d="M9.09494 5.82911L13.5 9.5H8.71944C7.93864 9.5 7.18983 9.18983 6.63773 8.63773L6.58146 8.58146C5.95264 7.95264 5.85508 6.96739 6.34836 6.22745C6.96352 5.30472 8.24299 5.11916 9.09494 5.82911Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M1.25 4.5H2.5V5.5L1.25 4.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.5 13.25L9.5 11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.5 11.5V12.5L5.5 13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 13.5C9.53957 13.1799 8.49129 13.2544 7.58579 13.7071L7 14" stroke="currentColor" strokeLinecap="round" /><path d="M5.5 13.5H4.5" stroke="currentColor" strokeLinecap="round" /><circle cx={4.5} cy={4.5} r={0.5} fill="currentColor" /></SvgRoot>;
});
export default IconBird;
