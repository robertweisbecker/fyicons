import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSkipForwardFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSkipForwardFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="skip-forward-fill"><path fill="currentColor" d="M12.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V8.61l-6.86 4.193a.75.75 0 0 1-1.14-.64V3.837a.75.75 0 0 1 1.14-.64L11 7.39V3.5a.5.5 0 0 1 .5-.5z" /></SvgRoot>;
});
export default IconSkipForwardFill;
