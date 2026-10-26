import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconComputer = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconComputer(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 1a2 2 0 0 1 2 2v6.5c0 .52-.2.992-.526 1.348A.5.5 0 0 1 12.5 11v2.5A1.5 1.5 0 0 1 11 15H5a1.5 1.5 0 0 1-1.5-1.5V11q.001-.08.025-.152A2 2 0 0 1 3 9.5V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v6.5a1 1 0 0 0 1 1 .5.5 0 0 1 0 1h-.5v2a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-2H11a.5.5 0 0 1 0-1 1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm1.51 10a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1 0-1zm3.5.125a.375.375 0 0 1 0 .75H8.5a.375.375 0 0 1 0-.75zM10.5 3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5zM6 7h4V4H6z" /></SvgRoot>;
});
export default IconComputer;
