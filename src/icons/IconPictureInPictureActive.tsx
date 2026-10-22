import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPictureInPictureActive = React.forwardRef<SVGSVGElement, IconProps>(function IconPictureInPictureActive(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M13 3C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H13ZM3 4C2.44772 4 2 4.44772 2 5V11C2 11.5523 2.44772 12 3 12H13C13.5523 12 14 11.5523 14 11V5C14 4.44772 13.5523 4 13 4H3ZM12.5 7C12.7761 7 13 7.22386 13 7.5V10.5C13 10.7761 12.7761 11 12.5 11H8.5C8.22386 11 8 10.7761 8 10.5V7.5C8 7.22386 8.22386 7 8.5 7H12.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconPictureInPictureActive;
