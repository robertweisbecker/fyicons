import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconExternalLinkLg = React.forwardRef<SVGSVGElement, IconProps>(function IconExternalLinkLg(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M5.5 2C5.77614 2 6 2.22386 6 2.5C6 2.77614 5.77614 3 5.5 3H4.5C3.67157 3 3 3.67157 3 4.5V11C3 12.1046 3.89543 13 5 13H11.5C12.3284 13 13 12.3284 13 11.5V10.5C13 10.2239 13.2239 10 13.5 10C13.7761 10 14 10.2239 14 10.5V11.5C14 12.8807 12.8807 14 11.5 14H5C3.34315 14 2 12.6569 2 11V4.5C2 3.11929 3.11929 2 4.5 2H5.5ZM13.5 2C13.7761 2.00002 14 2.22387 14 2.5V7.5C14 7.77613 13.7761 7.99998 13.5 8C13.2239 8 13 7.77614 13 7.5V3.70703L7.85352 8.85352C7.65826 9.04877 7.34175 9.04876 7.14648 8.85352C6.95122 8.65825 6.95122 8.34175 7.14648 8.14648L12.293 3H8.5C8.22386 3 8 2.77614 8 2.5C8 2.22386 8.22386 2 8.5 2H13.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconExternalLinkLg;
