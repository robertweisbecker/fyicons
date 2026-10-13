import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSelection = React.forwardRef<SVGSVGElement, IconProps>(function IconSelection(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><rect x={12.25} y={12.25} width={2.5} height={2.5} rx={1.25} fill="currentColor" /><rect x={1.25} y={1.25} width={2.5} height={2.5} rx={1.25} fill="currentColor" /><path d="M5.5 3.5H12.5C13.0523 3.5 13.5 3.94772 13.5 4.5V12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 12.5H3.5C2.94772 12.5 2.5 12.0523 2.5 11.5V3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 6.5H5.5" stroke="currentColor" strokeLinecap="round" /><path d="M8.5 9.5H5.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconSelection;
