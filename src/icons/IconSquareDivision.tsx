import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSquareDivision = React.forwardRef<SVGSVGElement, IconProps>(function IconSquareDivision(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11 2C12.6569 2 14 3.34315 14 5V11C14 12.6569 12.6569 14 11 14H5C3.34315 14 2 12.6569 2 11V5C2 3.34315 3.34315 2 5 2H11ZM5 3C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H11C12.1046 13 13 12.1046 13 11V5C13 3.89543 12.1046 3 11 3H5ZM8 9.75C8.41421 9.75 8.75 10.0858 8.75 10.5C8.75 10.9142 8.41421 11.25 8 11.25C7.58579 11.25 7.25 10.9142 7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75ZM10.5 7.5C10.7761 7.5 11 7.72386 11 8C11 8.27614 10.7761 8.5 10.5 8.5H5.5C5.22386 8.5 5 8.27614 5 8C5 7.72386 5.22386 7.5 5.5 7.5H10.5ZM8 4.75C8.41421 4.75 8.75 5.08579 8.75 5.5C8.75 5.91421 8.41421 6.25 8 6.25C7.58579 6.25 7.25 5.91421 7.25 5.5C7.25 5.08579 7.58579 4.75 8 4.75Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconSquareDivision;
