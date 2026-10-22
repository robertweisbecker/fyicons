import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEnvelopeLetter = React.forwardRef<SVGSVGElement, IconProps>(function IconEnvelopeLetter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11 1.75037C12.1046 1.75037 13 2.6458 13 3.75037V8.00037C12.9998 8.27634 12.776 8.50037 12.5 8.50037C12.224 8.50037 12.0002 8.27634 12 8.00037V3.75037C12 3.19808 11.5523 2.75037 11 2.75037H5C4.44772 2.75037 4 3.19808 4 3.75037V8.00037C3.9998 8.27634 3.77602 8.50037 3.5 8.50037C3.22398 8.50037 3.0002 8.27634 3 8.00037V3.75037C3 2.6458 3.89543 1.75037 5 1.75037H11Z" fill="currentColor" /><path d="M1.5 6.49988L5.5 9.49988M14.5 6.5L10.5 9.49988" stroke="currentColor" strokeLinejoin="round" /><path d="M12.4995 11.4998L10.7225 9.62381C9.24345 8.06236 6.75689 8.06226 5.27771 9.62358L3.5 11.5" stroke="currentColor" strokeLinecap="round" /><path d="M1.5 6.49988L1.5 11.9999C1.5 12.8283 2.17157 13.4999 3 13.4999H13C13.8284 13.4999 14.5 12.8283 14.5 11.9999V6.49988" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 6.5L12.5 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.5 4.5L1.5 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconEnvelopeLetter;
