import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconExternalLink = React.forwardRef<SVGSVGElement, IconProps>(function IconExternalLink(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M6.5 3C6.77614 3 7 3.22386 7 3.5C7 3.77614 6.77614 4 6.5 4H5.5C4.67157 4 4 4.67157 4 5.5V10.5C4 11.3284 4.67157 12 5.5 12H10.5C11.3284 12 12 11.3284 12 10.5V9.5C12 9.22386 12.2239 9 12.5 9C12.7761 9 13 9.22386 13 9.5V10.5C13 11.8807 11.8807 13 10.5 13H5.5C4.11929 13 3 11.8807 3 10.5V5.5C3 4.11929 4.11929 3 5.5 3H6.5ZM13.5 2C13.7761 2 14 2.22386 14 2.5V6.5C14 6.77614 13.7761 7 13.5 7C13.2239 7 13 6.77614 13 6.5V3.70703L8.85352 7.85352C8.65825 8.04878 8.34175 8.04878 8.14648 7.85352C7.95122 7.65825 7.95122 7.34175 8.14648 7.14648L12.293 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H13.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconExternalLink;
