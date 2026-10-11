import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconWalletFold = React.forwardRef<SVGSVGElement, IconProps>(function IconWalletFold(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M2.5 5V12C2.5 12.8284 3.17157 13.5 4 13.5H12C12.8284 13.5 13.5 12.8284 13.5 12V7C13.5 6.17157 12.8284 5.5 12 5.5H9.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /><path d="M2.5 4.8148C2.5 4.4868 2.73245 4.2048 3.05442 4.1422L10.3091 2.73156C10.9264 2.61153 11.5 3.08431 11.5 3.71317V5.5H3.1852C2.80677 5.5 2.5 5.19323 2.5 4.8148Z" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /><mask id={idPrefix + "path-3-inside-1_780_1745"} fill="white"><path d="M10 9.5C10 8.67157 10.6716 8 11.5 8H13.25C13.6642 8 14 8.33579 14 8.75V10.25C14 10.6642 13.6642 11 13.25 11H11.5C10.6716 11 10 10.3284 10 9.5Z" /></mask><path d="M10 9.5C10 8.67157 10.6716 8 11.5 8H13.25C13.6642 8 14 8.33579 14 8.75V10.25C14 10.6642 13.6642 11 13.25 11H11.5C10.6716 11 10 10.3284 10 9.5Z" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeWidth={2} mask={`url(#${idPrefix}path-3-inside-1_780_1745)`} /></SvgRoot>;
});
export default IconWalletFold;
