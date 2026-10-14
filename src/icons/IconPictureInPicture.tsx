import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconPictureInPicture = React.forwardRef<SVGSVGElement, IconProps>(function IconPictureInPicture(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M13 3C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V8.5C1 8.22386 1.22386 8 1.5 8C1.77614 8 2 8.22386 2 8.5V11C2 11.5523 2.44772 12 3 12H13C13.5523 12 14 11.5523 14 11V5C14 4.44772 13.5523 4 13 4H9.5C9.22386 4 9 3.77614 9 3.5C9 3.22386 9.22386 3 9.5 3H13ZM12.5 7C12.7761 7 13 7.22386 13 7.5V10.5C13 10.7761 12.7761 11 12.5 11H9.5C9.22386 11 9 10.7761 9 10.5V7.5C9 7.22386 9.22386 7 9.5 7H12.5ZM10 10H12V8H10V10Z" fill="currentColor" /><path d="M2.5 2.5L5.5 5.5" stroke="currentColor" strokeLinecap="round" /><path d="M7 4.20711V6.5C7 6.77614 6.77614 7 6.5 7H4.20711C3.76165 7 3.53857 6.46143 3.85355 6.14645L6.14645 3.85355C6.46143 3.53857 7 3.76165 7 4.20711Z" fill="currentColor" /></SvgRoot>;
});
export default IconPictureInPicture;
