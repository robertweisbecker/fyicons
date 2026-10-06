import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconGitMerge = React.forwardRef<SVGSVGElement, IconProps>(function IconGitMerge(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M5 2C6.10457 2 7 2.89543 7 4C7 4.91787 6.38092 5.68859 5.53809 5.92383C5.73955 7.1025 6.76388 7.99998 8 8H9C9 6.89543 9.89543 6 11 6C12.1046 6 13 6.89543 13 8C13 9.10457 12.1046 10 11 10C10.2601 10 9.61546 9.59733 9.26953 9H8C7.02008 8.99999 6.13534 8.5962 5.5 7.94727V10.0654C6.36232 10.2877 7 11.0683 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 11.0683 3.63768 10.2877 4.5 10.0654V5.93359C3.6378 5.71129 3 4.93162 3 4C3 2.89543 3.89543 2 5 2ZM5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11ZM11 7C10.4477 7 10 7.44772 10 8C10 8.55228 10.4477 9 11 9C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7ZM5 3C4.44772 3 4 3.44772 4 4C4 4.55228 4.44772 5 5 5C5.55228 5 6 4.55228 6 4C6 3.44772 5.55228 3 5 3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconGitMerge;
