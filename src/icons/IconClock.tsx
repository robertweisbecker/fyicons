import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconClock = React.forwardRef<SVGSVGElement, IconProps>(function IconClock(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM8.5 4C8.77614 4 9 4.22386 9 4.5V8.5C9 8.63261 8.94728 8.75975 8.85352 8.85352C8.75975 8.94728 8.63261 9 8.5 9H5.5C5.22386 9 5 8.77614 5 8.5C5 8.22386 5.22386 8 5.5 8H8V4.5C8 4.22386 8.22386 4 8.5 4Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconClock;
