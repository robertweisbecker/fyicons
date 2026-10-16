import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCarFront = React.forwardRef<SVGSVGElement, IconProps>(function IconCarFront(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M2.5 6.5L4.27735 3.83397C4.41645 3.62533 4.65062 3.5 4.90139 3.5H11.5365C11.8206 3.5 12.0803 3.6605 12.2073 3.91459L13.5 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.5 10.5714L2.5 11.9998C2.5 12.2759 2.27614 12.4998 2 12.4998C1.72386 12.4998 1.5 12.2759 1.5 11.9998V10.5" stroke="currentColor" strokeLinecap="square" /><path d="M14.5 10.5V12C14.5 12.2761 14.2761 12.5 14 12.5C13.7239 12.5 13.5 12.2761 13.5 12V10.6071" stroke="currentColor" strokeLinecap="square" /><path d="M13 6.50015L3.00002 6.50002C2.17158 6.50001 1.5 7.17158 1.5 8.00002V10.5002H14.5V8.00015C14.5 7.17173 13.8284 6.50016 13 6.50015Z" stroke="currentColor" strokeLinejoin="round" /><path d="M13.5 5.5H14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M1.5 5.5H2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 8.5H5.5" stroke="currentColor" strokeLinecap="round" /><circle cx={12.5} cy={8.5} r={0.5} fill="currentColor" /><circle cx={3.5} cy={8.5} r={0.5} fill="currentColor" /></SvgRoot>;
});
export default IconCarFront;
