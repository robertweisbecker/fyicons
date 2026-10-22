import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSignOut = React.forwardRef<SVGSVGElement, IconProps>(function IconSignOut(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M4.85352 5.14694C4.65825 4.95167 4.34175 4.95167 4.14648 5.14694L1.64648 7.64693C1.47564 7.8178 1.45387 8.08177 1.58203 8.27584L1.64648 8.35397L4.14648 10.854C4.34174 11.0492 4.65826 11.0492 4.85352 10.854C5.04877 10.6587 5.04876 10.3422 4.85352 10.1469L3.20801 8.50143H9.5C9.77613 8.50143 9.99998 8.27755 10 8.00143C10 7.72529 9.77614 7.50143 9.5 7.50143H3.20605L4.85352 5.85397C5.04877 5.65871 5.04876 5.3422 4.85352 5.14694Z" fill="currentColor" /><path d="M6.5 5.5V4C6.5 3.17157 7.17157 2.5 8 2.5H12C12.8284 2.5 13.5 3.17157 13.5 4V12C13.5 12.8284 12.8284 13.5 12 13.5H8C7.17157 13.5 6.5 12.8284 6.5 12V10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconSignOut;
