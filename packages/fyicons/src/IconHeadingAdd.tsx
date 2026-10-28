import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeadingAdd = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeadingAdd(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 1.5a.5.5 0 0 0-.5.5v.995h-1a.5.5 0 0 0 0 1h1V14a.5.5 0 0 0 1 0v-1.005h1a.5.5 0 0 0 0-1h-1V11a.5.5 0 0 0-.5-.5M5.5 2a.5.5 0 0 1 0 1H5v3h5V3h-.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1H11v4.5a.5.5 0 0 1-1 0V7H5v4h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H4V3h-.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconHeadingAdd;
