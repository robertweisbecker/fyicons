import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCopyLg = React.forwardRef<SVGSVGElement, IconProps>(function IconCopyLg(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M9.5 1C10.8807 1 12 2.11929 12 3.5V4H12.5C13.8807 4 15 5.11929 15 6.5V12.5C15 13.8807 13.8807 15 12.5 15H6.5C5.11929 15 4 13.8807 4 12.5V12H3.5C2.11929 12 1 10.8807 1 9.5V3.5C1 2.11929 2.11929 1 3.5 1H9.5ZM12 9.5C12 10.8807 10.8807 12 9.5 12H5V12.5C5 13.3284 5.67157 14 6.5 14H12.5C13.3284 14 14 13.3284 14 12.5V6.5C14 5.67157 13.3284 5 12.5 5H12V9.5ZM3.5 2C2.67157 2 2 2.67157 2 3.5V9.5C2 10.3284 2.67157 11 3.5 11H9.5C10.3284 11 11 10.3284 11 9.5V3.5C11 2.67157 10.3284 2 9.5 2H3.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconCopyLg;
