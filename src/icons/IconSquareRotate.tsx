import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSquareRotate = React.forwardRef<SVGSVGElement, IconProps>(function IconSquareRotate(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.5 6.00004C12.3284 6.00004 13 6.67161 13 7.50004V12.5C13 13.3285 12.3284 14 11.5 14H6.5C5.67157 14 5 13.3285 5 12.5V7.50004C5 6.67161 5.67157 6.00004 6.5 6.00004H11.5ZM6.5 7.00004C6.22386 7.00004 6 7.2239 6 7.50004V12.5C6 12.7762 6.22386 13 6.5 13H11.5C11.7761 13 12 12.7762 12 12.5V7.50004C12 7.2239 11.7761 7.00004 11.5 7.00004H6.5ZM7.28809 0.796915C7.46372 0.714773 7.67134 0.742111 7.82031 0.866251L9.32031 2.11625C9.43413 2.21124 9.5 2.35177 9.5 2.50004C9.5 2.6483 9.43413 2.78884 9.32031 2.88383L7.82031 4.13383C7.67134 4.25797 7.46372 4.28531 7.28809 4.20316C7.11239 4.12087 7 3.94405 7 3.75004V3.00004H5.5C3.567 3.00004 2 4.56704 2 6.50004V7.50004C2 7.77618 1.77614 8.00004 1.5 8.00004C1.22386 8.00004 1 7.77618 1 7.50004V6.50004C1 4.01476 3.01472 2.00004 5.5 2.00004H7V1.25004C7 1.05603 7.11239 0.879205 7.28809 0.796915Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconSquareRotate;
