import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconPictureInPicture = React.forwardRef<SVGSVGElement, IconProps>(function IconPictureInPicture(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M13 3C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H13ZM9.25 9C9.11193 9 9 9.11193 9 9.25V12H13C13.5523 12 14 11.5523 14 11V9H9.25ZM3 4C2.44772 4 2 4.44772 2 5V11C2 11.5523 2.44772 12 3 12H8V9.25C8 8.55964 8.55964 8 9.25 8H14V5C14 4.44772 13.5523 4 13 4H3Z" fill="currentColor" /><path d="M3.5 5.5L5.5 7.5" stroke="currentColor" strokeLinecap="round" /><path d="M7 6.20711V8.5C7 8.77614 6.77614 9 6.5 9H4.20711C3.76165 9 3.53857 8.46143 3.85355 8.14645L6.14645 5.85355C6.46143 5.53857 7 5.76165 7 6.20711Z" fill="currentColor" /></SvgRoot>;
});
export default IconPictureInPicture;
