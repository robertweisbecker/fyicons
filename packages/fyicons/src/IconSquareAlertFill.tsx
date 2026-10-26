import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareAlertFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareAlertFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM8 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-5.375a.64.64 0 0 0-.454.183.6.6 0 0 0-.171.442l.006.163.113 2.925.006.162a.504.504 0 0 0 .5.482.504.504 0 0 0 .5-.481l.006-.163.113-2.925.006-.163a.6.6 0 0 0-.17-.442A.64.64 0 0 0 8 4.625" /></SvgRoot>;
});
export default IconSquareAlertFill;
