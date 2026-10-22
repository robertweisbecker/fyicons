import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconClock = React.forwardRef<SVGSVGElement, IconProps>(function IconClock(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM8.5 3C8.77614 3 9 3.22386 9 3.5V8.5C9 8.77614 8.77614 9 8.5 9H4.5C4.22386 9 4 8.77614 4 8.5C4 8.22386 4.22386 8 4.5 8H8V3.5C8 3.22386 8.22386 3 8.5 3Z" fill="currentColor" /></SvgRoot>;
});
export default IconClock;
