import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWarningFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWarningFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="warning-fill"><path fill="currentColor" d="M6.293 1.834c.78-1.276 2.634-1.276 3.414 0l5.575 9.123C16.096 12.29 15.137 14 13.575 14H2.425C.863 14-.097 12.29.718 10.957zM8 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-5.875a.64.64 0 0 0-.452.183.6.6 0 0 0-.173.442l.006.188.113 3.375.006.187a.503.503 0 0 0 .5.484.503.503 0 0 0 .5-.483l.006-.188.113-3.375.006-.188a.6.6 0 0 0-.173-.442A.64.64 0 0 0 8 4.125" /></SvgRoot>;
});
export default IconWarningFill;
