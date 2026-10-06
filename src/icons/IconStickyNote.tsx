import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconStickyNote = React.forwardRef<SVGSVGElement, IconProps>(function IconStickyNote(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.5 2C12.8807 2 14 3.11929 14 4.5V7.67188C13.9999 8.33481 13.7363 8.97068 13.2676 9.43945L9.43945 13.2676C8.97068 13.7363 8.33481 13.9999 7.67188 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11929 2 4.5 2H11.5ZM4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H7.67188C7.78325 13 7.893 12.986 8 12.9619V10C8 8.89543 8.89543 8 10 8H12.9619C12.986 7.893 13 7.78325 13 7.67188V4.5C13 3.67157 12.3284 3 11.5 3H4.5ZM10 9C9.44772 9 9 9.44772 9 10V12.293L12.293 9H10Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconStickyNote;
