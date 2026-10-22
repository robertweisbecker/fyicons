import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFullscreenExitLandscape = React.forwardRef<SVGSVGElement, IconProps>(function IconFullscreenExitLandscape(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M5.5 9C5.77614 9 6 9.22386 6 9.5V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V10H1.5C1.22386 10 1 9.77614 1 9.5C1 9.22386 1.22386 9 1.5 9H5.5ZM14.5 9C14.7761 9 15 9.22386 15 9.5C15 9.77614 14.7761 10 14.5 10H11V12.5C11 12.7761 10.7761 13 10.5 13C10.2239 13 10 12.7761 10 12.5V9.5C10 9.22386 10.2239 9 10.5 9H14.5ZM5.5 3C5.77614 3 6 3.22386 6 3.5V6.5C6 6.77614 5.77614 7 5.5 7H1.5C1.22386 7 1 6.77614 1 6.5C1 6.22386 1.22386 6 1.5 6H5V3.5C5 3.22386 5.22386 3 5.5 3ZM10.5 3C10.7761 3 11 3.22386 11 3.5V6H14.5C14.7761 6 15 6.22386 15 6.5C15 6.77614 14.7761 7 14.5 7H10.5C10.2239 7 10 6.77614 10 6.5V3.5C10 3.22386 10.2239 3 10.5 3Z" fill="currentColor" /></SvgRoot>;
});
export default IconFullscreenExitLandscape;
