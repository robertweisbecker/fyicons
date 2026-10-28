import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFilePdf = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFilePdf(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="file-pdf"><path fill="currentColor" d="M7.465 1a3 3 0 0 1 2.12.879l2.83 2.828A2 2 0 0 1 13 6.121V7.5a.5.5 0 0 1-1 0V6.121A1 1 0 0 0 11.992 6H9.5A1.5 1.5 0 0 1 8 4.5V2.074A2 2 0 0 0 7.465 2H5a1 1 0 0 0-1 1v4.5a.5.5 0 0 1-1 0V3a2 2 0 0 1 2-2zM9 4.5a.5.5 0 0 0 .5.5h1.793L9 2.707z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.85 9.507c1.204 0 1.9.986 1.9 1.993s-.929 1.993-1.9 1.993H6.5V9.507zM11.5 13.5v-2m2.5-2h-2.5v2m0 0h2m-11 2v-1m0 0v-3h1C4.125 9.5 5 10 5 11s-1 1.5-1.5 1.5z" /></SvgRoot>;
});
export default IconFilePdf;
