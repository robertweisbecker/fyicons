import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCirclePause = React.forwardRef<SVGSVGElement, IconProps>(function IconCirclePause(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM6.5 5C6.77614 5 7 5.22386 7 5.5V10.5C7 10.7761 6.77614 11 6.5 11H5.5C5.22386 11 5 10.7761 5 10.5V5.5C5 5.22386 5.22386 5 5.5 5H6.5ZM10.5 5C10.7761 5 11 5.22386 11 5.5V10.5C11 10.7761 10.7761 11 10.5 11H9.5C9.22386 11 9 10.7761 9 10.5V5.5C9 5.22386 9.22386 5 9.5 5H10.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconCirclePause;
