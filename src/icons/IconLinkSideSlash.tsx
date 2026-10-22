import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLinkSideSlash = React.forwardRef<SVGSVGElement, IconProps>(function IconLinkSideSlash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M13.4995 13.5L2.49951 2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.75 4.5C4.75 4.77614 4.52614 5 4.25 5H4C2.34315 5 1 6.34315 1 8C1 9.65685 2.34315 11 4 11H5.5C5.77614 11 6 11.2239 6 11.5C6 11.7761 5.77614 12 5.5 12H4C1.79086 12 0 10.2091 0 8C0 5.79086 1.79086 4 4 4H4.25C4.52614 4 4.75 4.22386 4.75 4.5ZM12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12H11.75C11.4739 12 11.25 11.7761 11.25 11.5C11.25 11.2239 11.4739 11 11.75 11H12C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5H10.5C10.2239 5 10 4.77614 10 4.5C10 4.22386 10.2239 4 10.5 4H12Z" fill="currentColor" /></SvgRoot>;
});
export default IconLinkSideSlash;
