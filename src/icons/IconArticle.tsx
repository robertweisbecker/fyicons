import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconArticle = React.forwardRef<SVGSVGElement, IconProps>(function IconArticle(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11 1C12.1046 1 13 1.89543 13 3V13C13 14.1046 12.1046 15 11 15H5C3.89543 15 3 14.1046 3 13V3C3 1.89543 3.89543 1 5 1H11ZM5 2C4.44772 2 4 2.44772 4 3V13C4 13.5523 4.44772 14 5 14H11C11.5523 14 12 13.5523 12 13V3C12 2.44772 11.5523 2 11 2H5ZM8.5 9C8.77614 9 9 9.22386 9 9.5C9 9.77614 8.77614 10 8.5 10H5.5C5.22386 10 5 9.77614 5 9.5C5 9.22386 5.22386 9 5.5 9H8.5ZM10.5 7C10.7761 7 11 7.22386 11 7.5C11 7.77614 10.7761 8 10.5 8H5.5C5.22386 8 5 7.77614 5 7.5C5 7.22386 5.22386 7 5.5 7H10.5ZM10.5 3C10.7761 3 11 3.22386 11 3.5V5.5C11 5.77614 10.7761 6 10.5 6H5.5C5.22386 6 5 5.77614 5 5.5V3.5C5 3.22386 5.22386 3 5.5 3H10.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconArticle;
