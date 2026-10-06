import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconTextColumns = React.forwardRef<SVGSVGElement, IconProps>(function IconTextColumns(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M5.5 12C5.77614 12 6 12.2239 6 12.5C6 12.7761 5.77614 13 5.5 13H1.5C1.22386 13 1 12.7761 1 12.5C1 12.2239 1.22386 12 1.5 12H5.5ZM14.5 12C14.7761 12 15 12.2239 15 12.5C15 12.7761 14.7761 13 14.5 13H10.5C10.2239 13 10 12.7761 10 12.5C10 12.2239 10.2239 12 10.5 12H14.5ZM5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10H1.5C1.22386 10 1 9.77614 1 9.5C1 9.22386 1.22386 9 1.5 9H5.5ZM14.5 9C14.7761 9 15 9.22386 15 9.5C15 9.77614 14.7761 10 14.5 10H10.5C10.2239 10 10 9.77614 10 9.5C10 9.22386 10.2239 9 10.5 9H14.5ZM5.5 6C5.77614 6 6 6.22386 6 6.5C6 6.77614 5.77614 7 5.5 7H1.5C1.22386 7 1 6.77614 1 6.5C1 6.22386 1.22386 6 1.5 6H5.5ZM14.5 6C14.7761 6 15 6.22386 15 6.5C15 6.77614 14.7761 7 14.5 7H10.5C10.2239 7 10 6.77614 10 6.5C10 6.22386 10.2239 6 10.5 6H14.5ZM5.5 3C5.77614 3 6 3.22386 6 3.5C6 3.77614 5.77614 4 5.5 4H1.5C1.22386 4 1 3.77614 1 3.5C1 3.22386 1.22386 3 1.5 3H5.5ZM14.5 3C14.7761 3 15 3.22386 15 3.5C15 3.77614 14.7761 4 14.5 4H10.5C10.2239 4 10 3.77614 10 3.5C10 3.22386 10.2239 3 10.5 3H14.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconTextColumns;
