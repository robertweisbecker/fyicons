import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLinkSideUnlink = React.forwardRef<SVGSVGElement, IconProps>(function IconLinkSideUnlink(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M5.5 4.5H4C2.067 4.5 0.5 6.067 0.5 8C0.5 9.933 2.067 11.5 4 11.5H5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 11.5H12C13.933 11.5 15.5 9.933 15.5 8C15.5 6.067 13.933 4.5 12 4.5H10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconLinkSideUnlink;
