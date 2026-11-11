import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFilePdf = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFilePdf(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="file-pdf"><path stroke="currentColor" strokeLinecap="round" d="M12.5 7.5V6.121a1.5 1.5 0 0 0-.44-1.06L9.233 2.232A2.5 2.5 0 0 0 7.464 1.5H5A1.5 1.5 0 0 0 3.5 3v4.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.85 9.507c1.204 0 1.9.986 1.9 1.993s-.929 1.993-1.9 1.993H6.5V9.507zM11.5 13.5v-2m2.5-2h-2.5v2m0 0h2m-11 2v-1m0 0v-3h1C4.125 9.5 5 10 5 11s-1 1.5-1.5 1.5z" /><path fill="currentColor" d="M12 7.5a.5.5 0 0 0 1 0zm-.75-2V5H9.5v1h1.75zm-2.75-1H9v-3H8v3zm4 2.25H12v.75h1v-.75zm-3-1.25V5a.5.5 0 0 1-.5-.5H8A1.5 1.5 0 0 0 9.5 6zm1.75 0V6a.75.75 0 0 1 .75.75h1A1.75 1.75 0 0 0 11.25 5z" /></SvgRoot>;
});
export default IconFilePdf;
