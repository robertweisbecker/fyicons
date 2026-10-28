import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="file-down"><path fill="currentColor" d="M7.879 1a2 2 0 0 1 1.414.586l3.121 3.121A2 2 0 0 1 13 6.121V13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.121A1 1 0 0 0 11.992 6H9.5A1.5 1.5 0 0 1 8 4.5V2.008A1 1 0 0 0 7.879 2zm3 5a.5.5 0 0 1 .5.5v3.293l.896-.897a.5.5 0 1 1 .707.707l-1.75 1.75a.5.5 0 0 1-.707 0l-1.75-1.75a.5.5 0 1 1 .708-.707l.896.897V7.5A.5.5 0 0 1 8 7m1-2.5a.5.5 0 0 0 .5.5h1.793L9 2.707z" /></SvgRoot>;
});
export default IconFileDown;
