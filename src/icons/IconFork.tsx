import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconFork = React.forwardRef<SVGSVGElement, IconProps>(function IconFork(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M6 2C6.27612 2 6.49997 2.22389 6.5 2.5C6.5 2.77614 6.27614 3 6 3H3.86133L3.94824 3.07422C6.51881 5.2592 7.99998 8.4632 8 11.8369V13.5C8 13.7761 7.77614 14 7.5 14C7.22386 14 7 13.7761 7 13.5V11.8369C6.99998 8.75678 5.64752 5.83189 3.30078 3.83691L3 3.58105V5.5C3 5.77614 2.77614 6 2.5 6C2.22386 6 2 5.77614 2 5.5V2.5C2.00003 2.22389 2.22388 2 2.5 2H6ZM13.5 2C13.7761 2 14 2.22386 14 2.5V5.5C14 5.77614 13.7761 6 13.5 6C13.224 5.99978 13 5.77601 13 5.5V3.47559C12.7769 3.64694 12.5147 3.85435 12.2324 4.09766C11.3476 4.86045 10.2613 5.9494 9.42188 7.26855C9.27356 7.50133 8.96433 7.57008 8.73145 7.42188C8.49882 7.27357 8.4301 6.96428 8.57812 6.73145C9.48842 5.30099 10.6525 4.13951 11.5801 3.33984C11.721 3.21837 11.8573 3.10504 11.9863 3H10C9.72404 2.99978 9.5 2.77601 9.5 2.5C9.5 2.22399 9.72404 2.00022 10 2H13.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconFork;
