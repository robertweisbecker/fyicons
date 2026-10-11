import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconEnvelopeLetter = React.forwardRef<SVGSVGElement, IconProps>(function IconEnvelopeLetter(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12 1.75037C13.1046 1.75037 14 2.6458 14 3.75037V7.00037C13.9998 7.27634 13.776 7.50037 13.5 7.50037C13.224 7.50037 13.0002 7.27634 13 7.00037V3.75037C13 3.19808 12.5523 2.75037 12 2.75037H4C3.44772 2.75037 3 3.19808 3 3.75037V7.00037C2.9998 7.27634 2.77602 7.50037 2.5 7.50037C2.22398 7.50037 2.0002 7.27634 2 7.00037V3.75037C2 2.6458 2.89543 1.75037 4 1.75037H12Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M1.5 6.49988L5.5 9.49988M14.5 6.5L10.5 9.49988" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinejoin="round" /><path d="M12.4995 11.4998L10.7225 9.62381C9.24345 8.06236 6.75689 8.06226 5.27771 9.62358L3.5 11.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /><path d="M1.5 6.49988L1.5 11.9999C1.5 12.8283 2.17157 13.4999 3 13.4999H13C13.8284 13.4999 14.5 12.8283 14.5 11.9999V6.49988" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /><path d="M5.5 4.5H10.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /><path d="M6.5 6.5H9.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /></SvgRoot>;
});
export default IconEnvelopeLetter;
