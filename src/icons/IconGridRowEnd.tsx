import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconGridRowEnd = React.forwardRef<SVGSVGElement, IconProps>(function IconGridRowEnd(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.75 9C13.4404 9 14 9.55964 14 10.25V12.75C14 13.4404 13.4404 14 12.75 14H3.25C2.55964 14 2 13.4404 2 12.75V10.25C2 9.55964 2.55964 9 3.25 9H12.75ZM3.25 10C3.11193 10 3 10.1119 3 10.25V12.75C3 12.8881 3.11193 13 3.25 13H12.75C12.8881 13 13 12.8881 13 12.75V10.25C13 10.1119 12.8881 10 12.75 10H3.25ZM4.75 2C5.44036 2 6 2.55964 6 3.25V5.75C6 6.44036 5.44036 7 4.75 7H3.25C2.55964 7 2 6.44036 2 5.75V3.25C2 2.55964 2.55964 2 3.25 2H4.75ZM12.75 2C13.4404 2 14 2.55964 14 3.25V5.75C14 6.44036 13.4404 7 12.75 7H9.25C8.55964 7 8 6.44036 8 5.75V3.25C8 2.55964 8.55964 2 9.25 2H12.75ZM3.25 3C3.11193 3 3 3.11193 3 3.25V5.75C3 5.88807 3.11193 6 3.25 6H4.75C4.88807 6 5 5.88807 5 5.75V3.25C5 3.11193 4.88807 3 4.75 3H3.25ZM9.25 3C9.11193 3 9 3.11193 9 3.25V5.75C9 5.88807 9.11193 6 9.25 6H12.75C12.8881 6 13 5.88807 13 5.75V3.25C13 3.11193 12.8881 3 12.75 3H9.25Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconGridRowEnd;
