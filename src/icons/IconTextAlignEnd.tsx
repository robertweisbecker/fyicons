import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconTextAlignEnd = React.forwardRef<SVGSVGElement, IconProps>(function IconTextAlignEnd(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M14.5 12C14.7761 12 15 12.2239 15 12.5C15 12.7761 14.7761 13 14.5 13H10.5C10.2239 13 10 12.7761 10 12.5C10 12.2239 10.2239 12 10.5 12H14.5ZM14.5 9C14.7761 9 15 9.22386 15 9.5C15 9.77614 14.7761 10 14.5 10H5.5C5.22386 10 5 9.77614 5 9.5C5 9.22386 5.22386 9 5.5 9H14.5ZM14.5 6C14.7761 6 15 6.22386 15 6.5C15 6.77614 14.7761 7 14.5 7H8.5C8.22386 7 8 6.77614 8 6.5C8 6.22386 8.22386 6 8.5 6H14.5ZM14.5 3C14.7761 3 15 3.22386 15 3.5C15 3.77614 14.7761 4 14.5 4H1.5C1.22386 4 1 3.77614 1 3.5C1 3.22386 1.22386 3 1.5 3H14.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconTextAlignEnd;
