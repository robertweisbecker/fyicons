import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCircleNoEntryFill = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleNoEntryFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM4.5 7C4.22386 7 4 7.22386 4 7.5V8.5C4 8.77614 4.22386 9 4.5 9H11.5C11.7761 9 12 8.77614 12 8.5V7.5C12 7.22386 11.7761 7 11.5 7H4.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconCircleNoEntryFill;
