import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconFolderOpen = React.forwardRef<SVGSVGElement, IconProps>(function IconFolderOpen(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M4.67188 2C5.33481 2.00008 5.97068 2.26365 6.43945 2.73242L7.70703 4H11C12.3807 4 13.5 5.11929 13.5 6.5V8C14.788 8.0157 15.621 9.37548 15.043 10.5322L14.1387 12.3418C13.6305 13.3581 12.5913 13.9999 11.4551 14H3.5C2.11929 14 1 12.8807 1 11.5V4.5C1 3.11929 2.11929 2 3.5 2H4.67188ZM6.65723 9C6.1816 9 5.7588 9.30464 5.6084 9.75586C5.18256 11.0332 4.39225 12.1558 3.33887 12.9902C3.39184 12.9959 3.44552 13 3.5 13H11.4551C12.2126 12.9999 12.9054 12.5721 13.2441 11.8945L14.1484 10.085C14.3973 9.5864 14.0349 9.00006 13.4775 9H6.65723ZM3.5 3C2.67157 3 2 3.67157 2 4.5V11.5C2 11.8734 2.13753 12.214 2.36328 12.4766L2.5957 12.3037C3.55903 11.5812 4.27937 10.5818 4.66016 9.43945C4.94668 8.57989 5.75117 8 6.65723 8H12.5V6.5C12.5 5.67157 11.8284 5 11 5H7.29297L5.73242 3.43945C5.45119 3.15822 5.06959 3.00008 4.67188 3H3.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconFolderOpen;
