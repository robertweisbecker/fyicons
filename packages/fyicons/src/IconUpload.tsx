import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUpload = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUpload(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.5 9a.5.5 0 0 1 .5.5V12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5a.5.5 0 0 1 1 0V12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9.5a.5.5 0 0 1 .5-.5M7.725 1.583a.5.5 0 0 1 .629.064l3 3a.5.5 0 0 1-.707.707L8.5 3.207V10.5a.5.5 0 0 1-1 0V3.207L5.354 5.353a.5.5 0 1 1-.708-.707l3-3z" /></SvgRoot>;
});
export default IconUpload;
