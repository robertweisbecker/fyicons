import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconZoomIn = React.forwardRef<SVGSVGElement, IconProps>(function IconZoomIn(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7 2C9.76142 2 12 4.23858 12 7C12 8.20064 11.5764 9.30213 10.8711 10.1641L13.8525 13.1455C14.0478 13.3408 14.0478 13.6573 13.8525 13.8525C13.6573 14.0478 13.3408 14.0478 13.1455 13.8525L10.1641 10.8711C9.30213 11.5764 8.20064 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2ZM7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3ZM7 5C7.27614 5 7.5 5.22386 7.5 5.5V6.5H8.5C8.77614 6.5 9 6.72386 9 7C9 7.27614 8.77614 7.5 8.5 7.5H7.5V8.5C7.5 8.77614 7.27614 9 7 9C6.72386 9 6.5 8.77614 6.5 8.5V7.5H5.5C5.22386 7.5 5 7.27614 5 7C5 6.72386 5.22386 6.5 5.5 6.5H6.5V5.5C6.5 5.22386 6.72386 5 7 5Z" fill="currentColor" /></SvgRoot>;
});
export default IconZoomIn;
