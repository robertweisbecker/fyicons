import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareAlertFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareAlertFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-alert-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM8 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-5.875a.64.64 0 0 0-.452.183.6.6 0 0 0-.173.442l.006.188.113 3.375.006.187a.504.504 0 0 0 .5.484.504.504 0 0 0 .5-.483l.006-.188.113-3.375.006-.188a.6.6 0 0 0-.173-.442A.64.64 0 0 0 8 4.125" /></SvgRoot>;
});
export default IconSquareAlertFill;
