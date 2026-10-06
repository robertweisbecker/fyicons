import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconDesktopSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconDesktopSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.5 2C13.3284 2 14 2.67157 14 3.5V9.5C14 10.3284 13.3284 11 12.5 11H11V12.75C11 13.4404 10.4404 14 9.75 14H6.25C5.55964 14 5 13.4404 5 12.75V11H3.5C2.67157 11 2 10.3284 2 9.5V3.5C2 2.67157 2.67157 2 3.5 2H12.5ZM6 11V12.75C6 12.8881 6.11193 13 6.25 13H9.75C9.88807 13 10 12.8881 10 12.75V11H6ZM3.5 3C3.22386 3 3 3.22386 3 3.5V9.5C3 9.77614 3.22386 10 3.5 10H12.5C12.7761 10 13 9.77614 13 9.5V3.5C13 3.22386 12.7761 3 12.5 3H3.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconDesktopSimple;
