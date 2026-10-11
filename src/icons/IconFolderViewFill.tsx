import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconFolderViewFill = React.forwardRef<SVGSVGElement, IconProps>(function IconFolderViewFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.332 9.00977C10.6537 9.05552 10.9376 9.25613 11.0859 9.55273L11.3096 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H9C8.44772 14 8 13.5523 8 13V10C8 9.44772 8.44772 9 9 9H10.1914L10.332 9.00977ZM2.5 7C2.77614 7 3 7.22386 3 7.5V10C3 10.5523 3.44772 11 4 11H6.5C6.77614 11 7 11.2239 7 11.5C7 11.7761 6.77614 12 6.5 12H4C2.89543 12 2 11.1046 2 10V7.5C2 7.22386 2.22386 7 2.5 7ZM10.332 3.00977C10.6537 3.05552 10.9376 3.25613 11.0859 3.55273L11.3096 4H13C13.5523 4 14 4.44772 14 5V7C14 7.55228 13.5523 8 13 8H9C8.44772 8 8 7.55228 8 7V4C8 3.44772 8.44772 3 9 3H10.1914L10.332 3.00977ZM2.5 2C2.77614 2 3 2.22386 3 2.5V4C3 4.55228 3.44772 5 4 5H6.5C6.77614 5 7 5.22386 7 5.5C7 5.77614 6.77614 6 6.5 6H4C2.89543 6 2 5.10457 2 4V2.5C2 2.22386 2.22386 2 2.5 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconFolderViewFill;
