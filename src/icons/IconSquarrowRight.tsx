import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSquarrowRight = React.forwardRef<SVGSVGElement, IconProps>(function IconSquarrowRight(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M4.5 2C3.11929 2 2 3.11929 2 4.5V6C2 7.38071 3.11929 8.5 4.5 8.5H9.29297L7.64648 10.1465C7.45122 10.3417 7.45122 10.6583 7.64648 10.8535C7.84175 11.0488 8.15825 11.0488 8.35352 10.8535L10.8535 8.35352C11.0488 8.15825 11.0488 7.84175 10.8535 7.64648L8.35352 5.14648C8.15825 4.95122 7.84175 4.95122 7.64648 5.14648C7.45122 5.34175 7.45122 5.65825 7.64648 5.85352L9.29297 7.5H4.5C3.67157 7.5 3 6.82843 3 6V4.5C3 3.67157 3.67157 3 4.5 3H11.5C12.3284 3 13 3.67157 13 4.5V11.5C13 12.3284 12.3284 13 11.5 13H4.5C3.67157 13 3 12.3284 3 11.5C3 11.2239 2.77614 11 2.5 11C2.22386 11 2 11.2239 2 11.5C2 12.8807 3.11929 14 4.5 14H11.5C12.8807 14 14 12.8807 14 11.5V4.5C14 3.11929 12.8807 2 11.5 2H4.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconSquarrowRight;
