import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconFork = React.forwardRef<SVGSVGElement, IconProps>(function IconFork(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M6 3C6.27612 3 6.49997 3.22389 6.5 3.5C6.5 3.77614 6.27614 4 6 4H3.86133L3.94824 4.07422C6.51881 6.2592 7.99998 9.4632 8 12.8369V13.5C8 13.7761 7.77614 14 7.5 14C7.22386 14 7 13.7761 7 13.5V12.8369C6.99998 9.75678 5.64752 6.83189 3.30078 4.83691L3 4.58105V6.5C3 6.77614 2.77614 7 2.5 7C2.22386 7 2 6.77614 2 6.5V3.5C2.00003 3.22389 2.22388 3 2.5 3H6ZM13.5 3C13.7761 3 14 3.22386 14 3.5V6.5C14 6.77614 13.7761 7 13.5 7C13.224 6.99978 13 6.77601 13 6.5V4.47559C12.7769 4.64694 12.5147 4.85435 12.2324 5.09766C11.3476 5.86045 10.2613 6.9494 9.42188 8.26855C9.27356 8.50133 8.96433 8.57008 8.73145 8.42188C8.49882 8.27357 8.4301 7.96428 8.57812 7.73145C9.48842 6.30099 10.6525 5.13951 11.5801 4.33984C11.721 4.21837 11.8573 4.10504 11.9863 4H10C9.72404 3.99978 9.5 3.77601 9.5 3.5C9.5 3.22399 9.72404 3.00022 10 3H13.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconFork;
