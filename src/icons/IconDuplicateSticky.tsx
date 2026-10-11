import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconDuplicateSticky = React.forwardRef<SVGSVGElement, IconProps>(function IconDuplicateSticky(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M5.5 10.5L4 10.5C3.17157 10.5 2.5 9.82843 2.5 9L2.5 4C2.5 3.17157 3.17157 2.5 4 2.5L9 2.5C9.82843 2.5 10.5 3.17157 10.5 4L10.5 5.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /><path d="M5.5 7L5.5 12C5.5 12.8284 6.17157 13.5 7 13.5L10.1893 13.5C10.3883 13.5 10.579 13.421 10.7197 13.2803L13.2803 10.7197C13.421 10.579 13.5 10.3883 13.5 10.1893L13.5 7C13.5 6.17157 12.8284 5.5 12 5.5L7 5.5C6.17157 5.5 5.5 6.17157 5.5 7Z" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /><path d="M9.5 13.5L9.5 11C9.5 10.1716 10.1716 9.5 11 9.5L13.5 9.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /></SvgRoot>;
});
export default IconDuplicateSticky;
