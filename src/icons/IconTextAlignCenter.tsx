import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconTextAlignCenter = React.forwardRef<SVGSVGElement, IconProps>(function IconTextAlignCenter(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M9.5 12C9.77614 12 10 12.2239 10 12.5C10 12.7761 9.77614 13 9.5 13H6.5C6.22386 13 6 12.7761 6 12.5C6 12.2239 6.22386 12 6.5 12H9.5ZM13.5 9C13.7761 9 14 9.22386 14 9.5C14 9.77614 13.7761 10 13.5 10H2.5C2.22386 10 2 9.77614 2 9.5C2 9.22386 2.22386 9 2.5 9H13.5ZM10.5 6C10.7761 6 11 6.22386 11 6.5C11 6.77614 10.7761 7 10.5 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H10.5ZM14.5 3C14.7761 3 15 3.22386 15 3.5C15 3.77614 14.7761 4 14.5 4H1.5C1.22386 4 1 3.77614 1 3.5C1 3.22386 1.22386 3 1.5 3H14.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconTextAlignCenter;
