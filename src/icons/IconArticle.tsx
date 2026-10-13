import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconArticle = React.forwardRef<SVGSVGElement, IconProps>(function IconArticle(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11 1C12.1046 1 13 1.89543 13 3V13C13 14.1046 12.1046 15 11 15H5C3.89543 15 3 14.1046 3 13V3C3 1.89543 3.89543 1 5 1H11ZM5 2C4.44772 2 4 2.44772 4 3V13C4 13.5523 4.44772 14 5 14H11C11.5523 14 12 13.5523 12 13V3C12 2.44772 11.5523 2 11 2H5ZM8.5 10C8.77614 10 9 10.2239 9 10.5C9 10.7761 8.77614 11 8.5 11H5.5C5.22386 11 5 10.7761 5 10.5C5 10.2239 5.22386 10 5.5 10H8.5ZM10.5 8C10.7761 8 11 8.22386 11 8.5C11 8.77614 10.7761 9 10.5 9H5.5C5.22386 9 5 8.77614 5 8.5C5 8.22386 5.22386 8 5.5 8H10.5ZM10.5 3C10.7761 3 11 3.22386 11 3.5V6.5C11 6.77614 10.7761 7 10.5 7H5.5L5.39941 6.99023C5.17145 6.94371 5 6.74171 5 6.5V3.5C5 3.22386 5.22386 3 5.5 3H10.5ZM6 6H10V4H6V6Z" fill="currentColor" /></SvgRoot>;
});
export default IconArticle;
