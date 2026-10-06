import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconInfoFill = React.forwardRef<SVGSVGElement, IconProps>(function IconInfoFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM7.5 7C7.22386 7 7 7.22386 7 7.5C7 7.77614 7.22386 8 7.5 8H7.71777L7.53223 10.9697C7.49733 11.528 7.94064 12 8.5 12C8.77614 12 9 11.7761 9 11.5C9 11.2344 8.79278 11.0191 8.53125 11.0029L8.71582 8.0625C8.7518 7.4868 8.29459 7 7.71777 7H7.5ZM8 4.25C7.58579 4.25 7.25 4.58579 7.25 5C7.25 5.41421 7.58579 5.75 8 5.75C8.41421 5.75 8.75 5.41421 8.75 5C8.75 4.58579 8.41421 4.25 8 4.25Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconInfoFill;
