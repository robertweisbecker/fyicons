import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMailbox = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMailbox(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.5 3A3.5 3.5 0 0 1 15 6.5V11a1 1 0 0 1-1 1H8v1.5a.5.5 0 0 1-1 0V12H2a1 1 0 0 1-1-1V6.5A3.5 3.5 0 0 1 4.5 3zm-7 1A2.5 2.5 0 0 0 2 6.5V11h5V6.5A2.5 2.5 0 0 0 4.5 4m2.448 0A3.5 3.5 0 0 1 8 6.5V11h6V6.5A2.5 2.5 0 0 0 11.5 4zM12.5 6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.854.354L11.294 7H9.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconMailbox;
