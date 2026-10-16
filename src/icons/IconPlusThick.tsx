import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconPlusThick = React.forwardRef<SVGSVGElement, IconProps>(function IconPlusThick(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M3.75 8H12.25M8 3.75V12.25" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconPlusThick;
