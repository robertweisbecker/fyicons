import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileGif = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileGif(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.465 1a3 3 0 0 1 2.12.879l2.83 2.828A2 2 0 0 1 13 6.121V7.5a.5.5 0 0 1-1 0V6.121A1 1 0 0 0 11.992 6H9.5A1.5 1.5 0 0 1 8 4.5V2.074A2 2 0 0 0 7.465 2H5a1 1 0 0 0-1 1v4.5a.5.5 0 0 1-1 0V3a2 2 0 0 1 2-2zM9 4.5a.5.5 0 0 0 .5.5h1.793L9 2.707z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.313 10.042c-.378-.483-.778-.679-1.36-.666-1.003.02-1.753.948-1.7 2.099.05 1.097.87 1.88 1.7 1.9 1.27.028 1.797-1 1.797-1.8H5.438" /><path stroke="currentColor" strokeLinecap="round" d="M8.5 9.5v4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 13.5v-2m2.5-2h-2.5v2m0 0h2" /></SvgRoot>;
});
export default IconFileGif;
