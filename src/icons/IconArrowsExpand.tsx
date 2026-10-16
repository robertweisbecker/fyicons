import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconArrowsExpand = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsExpand(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M6.14648 9.14648C6.34175 8.95122 6.65825 8.95122 6.85352 9.14648C7.04878 9.34175 7.04878 9.65825 6.85352 9.85352L3.70703 13H6.5C6.77614 13 7 13.2239 7 13.5C7 13.7761 6.77614 14 6.5 14H2.5C2.36739 14 2.24025 13.9473 2.14648 13.8535C2.05272 13.7597 2 13.6326 2 13.5V9.5C2 9.22386 2.22386 9 2.5 9C2.77614 9 3 9.22386 3 9.5V12.293L6.14648 9.14648ZM13.5 2C13.7761 2 14 2.22386 14 2.5V6.5C14 6.77614 13.7761 7 13.5 7C13.2239 7 13 6.77614 13 6.5V3.70703L9.85352 6.85352C9.65825 7.04878 9.34175 7.04878 9.14648 6.85352C8.95122 6.65825 8.95122 6.34175 9.14648 6.14648L12.293 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H13.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowsExpand;
