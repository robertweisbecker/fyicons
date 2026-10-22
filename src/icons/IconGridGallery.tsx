import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridGallery = React.forwardRef<SVGSVGElement, IconProps>(function IconGridGallery(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7 9C7.55228 9 8 9.44772 8 10V12C8 12.5523 7.55228 13 7 13H3C2.44772 13 2 12.5523 2 12V10C2 9.44772 2.44772 9 3 9H7ZM3 10V12H7V10H3ZM14 4C14.5523 4 15 4.44772 15 5V11C15 11.5523 14.5523 12 14 12H10C9.44771 12 9 11.5523 9 11V5C9 4.44772 9.44772 4 10 4H14ZM10 11H14V5H10V11ZM6 3C6.55228 3 7 3.44772 7 4V7C7 7.55228 6.55228 8 6 8H2C1.44772 8 1 7.55228 1 7V4C1 3.44772 1.44772 3 2 3H6ZM2 7H6V4H2V7Z" fill="currentColor" /></SvgRoot>;
});
export default IconGridGallery;
