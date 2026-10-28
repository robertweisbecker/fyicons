import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHome = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHome(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.707 1.438a2 2 0 0 1 2.585 0l5.047 4.272A1.866 1.866 0 0 1 13.133 9H13v3.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 12.5L3.001 9h-.135A1.866 1.866 0 0 1 1.66 5.71zm1.939.764a1 1 0 0 0-1.292 0l-5.047 4.27A.867.867 0 0 0 2.867 8H4v4.5a.5.5 0 0 0 .5.5H6V8.995a1 1 0 0 1 1-1h2L9.103 8a1 1 0 0 1 .897.995V13h1.5a.5.5 0 0 0 .5-.5v-4l-.001-.5h1.134a.866.866 0 0 0 .56-1.528zM7 12.995h2v-4H7z" /></SvgRoot>;
});
export default IconHome;
