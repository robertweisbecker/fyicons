import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconPause = React.forwardRef<SVGSVGElement, IconProps>(function IconPause(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M5.75 2C6.44036 2 7 2.55964 7 3.25V12.75C7 13.4404 6.44036 14 5.75 14H3.25C2.55964 14 2 13.4404 2 12.75V3.25C2 2.55964 2.55964 2 3.25 2H5.75ZM12.75 2C13.4404 2 14 2.55964 14 3.25V12.75C14 13.4404 13.4404 14 12.75 14H10.25C9.55964 14 9 13.4404 9 12.75V3.25C9 2.55964 9.55964 2 10.25 2H12.75ZM3.25 3C3.11193 3 3 3.11193 3 3.25V12.75C3 12.8881 3.11193 13 3.25 13H5.75C5.88807 13 6 12.8881 6 12.75V3.25C6 3.11193 5.88807 3 5.75 3H3.25ZM10.25 3C10.1119 3 10 3.11193 10 3.25V12.75C10 12.8881 10.1119 13 10.25 13H12.75C12.8881 13 13 12.8881 13 12.75V3.25C13 3.11193 12.8881 3 12.75 3H10.25Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconPause;
