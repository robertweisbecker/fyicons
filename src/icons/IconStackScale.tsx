import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconStackScale = React.forwardRef<SVGSVGElement, IconProps>(function IconStackScale(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M1 4.5C1 3.67157 1.67157 3 2.5 3H7.5C8.32843 3 9 3.67157 9 4.5V5H10.5C11.3284 5 12 5.67157 12 6.5V7H13.5C14.3284 7 15 7.67157 15 8.5V11.5C15 12.3284 14.3284 13 13.5 13H2.5C1.67157 13 1 12.3284 1 11.5V4.5ZM13.5 12C13.7761 12 14 11.7761 14 11.5V8.5C14 8.22386 13.7761 8 13.5 8H12V11.5C12 11.6756 11.9676 11.8434 11.9121 12H13.5ZM10.5 12C10.7761 12 11 11.7761 11 11.5V6.5C11 6.22386 10.7761 6 10.5 6H9V11.5C9 11.6756 8.96757 11.8434 8.91211 12H10.5ZM2 11.5C2 11.7761 2.22386 12 2.5 12H7.5C7.77614 12 8 11.7761 8 11.5V4.5C8 4.22386 7.77614 4 7.5 4H2.5C2.22386 4 2 4.22386 2 4.5V11.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconStackScale;
