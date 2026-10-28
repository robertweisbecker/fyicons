import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMarker = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMarker(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="marker"><path fill="currentColor" d="M11.5 1.879q.126 0 .251.012a2.621 2.621 0 0 1 1.602 4.463l-5.439 5.44A4.12 4.12 0 0 1 5 13a.5.5 0 0 1-.335-.13l-1.922 1.068a.5.5 0 0 1-.68-.681l1.067-1.923A.5.5 0 0 1 3 11a4.12 4.12 0 0 1 1.207-2.914L8.793 3.5l-.44-.44a.5.5 0 0 0-.706 0L5.854 4.855a.5.5 0 0 1-.707-.707L6.94 2.354a1.5 1.5 0 0 1 2.12 0l.44.44.147-.147a2.6 2.6 0 0 1 1.853-.768M4.914 8.793a3.12 3.12 0 0 0-.884 1.78c.678.186 1.21.719 1.396 1.397a3.12 3.12 0 0 0 1.781-.884l2.685-2.685-.242-.485a3.5 3.5 0 0 0-1.566-1.565L7.6 6.108zM11.5 2.88a1.62 1.62 0 0 0-1.146.475l-2.01 2.008.187.094a4.5 4.5 0 0 1 2.013 2.013l.093.186 2.01-2.008q.118-.12.208-.255A1.622 1.622 0 0 0 11.5 2.879" /></SvgRoot>;
});
export default IconMarker;
