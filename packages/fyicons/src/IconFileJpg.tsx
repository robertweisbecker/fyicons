import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileJpg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileJpg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.465 1a3 3 0 0 1 2.12.879l2.83 2.828A2 2 0 0 1 13 6.121V7.5a.5.5 0 0 1-1 0V6.121A1 1 0 0 0 11.992 6H9.5A1.5 1.5 0 0 1 8 4.5V2.074A2 2 0 0 0 7.465 2H5a1 1 0 0 0-1 1v4.5a.5.5 0 0 1-1 0V3a2 2 0 0 1 2-2zM9 4.5a.5.5 0 0 0 .5.5h1.793L9 2.707z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.563 10.167c-.378-.483-.778-.679-1.36-.666-1.004.02-1.753.948-1.7 2.099.05 1.097.87 1.88 1.7 1.9 1.27.028 1.797-1 1.797-1.8h-1.312M6.5 13.5v-1m0 0v-3h1C8.125 9.5 9 10 9 11s-1 1.5-1.5 1.5zm-2-3v2.75a1.25 1.25 0 1 1-2.5 0v-.35" /></SvgRoot>;
});
export default IconFileJpg;
