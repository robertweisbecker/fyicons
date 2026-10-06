import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSubtitlesSquare = React.forwardRef<SVGSVGElement, IconProps>(function IconSubtitlesSquare(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.5 2C12.8807 2 14 3.11929 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11929 2 4.5 2H11.5ZM4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H4.5ZM6.5 11C6.77614 11 7 11.2239 7 11.5C7 11.7761 6.77614 12 6.5 12H4.5C4.22386 12 4 11.7761 4 11.5C4 11.2239 4.22386 11 4.5 11H6.5ZM11.5 11C11.7761 11 12 11.2239 12 11.5C12 11.7761 11.7761 12 11.5 12H8.5C8.22386 12 8 11.7761 8 11.5C8 11.2239 8.22386 11 8.5 11H11.5ZM8 9C8.27614 9 8.5 9.22386 8.5 9.5C8.5 9.77614 8.27614 10 8 10H4.5C4.22386 10 4 9.77614 4 9.5C4 9.22386 4.22386 9 4.5 9H8ZM11.5 9C11.7761 9 12 9.22386 12 9.5C12 9.77614 11.7761 10 11.5 10H10C9.72386 10 9.5 9.77614 9.5 9.5C9.5 9.22386 9.72386 9 10 9H11.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconSubtitlesSquare;
