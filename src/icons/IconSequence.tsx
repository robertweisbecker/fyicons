import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSequence = React.forwardRef<SVGSVGElement, IconProps>(function IconSequence(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7 7.5H5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.5 7.5H10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.5 5.5L14.5 7.5L12.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><rect x={7} y={6} width={3} height={3} rx={0.5} stroke="currentColor" /><rect x={1.5} y={6} width={3} height={3} rx={0.5} stroke="currentColor" /></SvgRoot>;
});
export default IconSequence;
