import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconBookSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconBookSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.75 2C13.4404 2 14 2.55964 14 3.25V12.75C14 13.4404 13.4404 14 12.75 14H4C2.89543 14 2 13.1046 2 12V4C2 2.89543 2.89543 2 4 2H12.75ZM4 3C3.44772 3 3 3.44772 3 4V12C3 12.5523 3.44772 13 4 13H5V3H4ZM6 13H12.75C12.8881 13 13 12.8881 13 12.75V3.25C13 3.11193 12.8881 3 12.75 3H6V13ZM10.5 7C10.7761 7 11 7.22386 11 7.5C11 7.77614 10.7761 8 10.5 8H7.5C7.22386 8 7 7.77614 7 7.5C7 7.22386 7.22386 7 7.5 7H10.5ZM11.5 5C11.7761 5 12 5.22386 12 5.5C12 5.77614 11.7761 6 11.5 6H7.5C7.22386 6 7 5.77614 7 5.5C7 5.22386 7.22386 5 7.5 5H11.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconBookSimple;
