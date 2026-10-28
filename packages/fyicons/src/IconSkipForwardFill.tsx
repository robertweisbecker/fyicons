import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSkipForwardFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSkipForwardFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="skip-forward-fill"><path fill="currentColor" d="M3 4.588a.88.88 0 0 1 1.347-.747l5.459 3.413a.88.88 0 0 1 0 1.493l-5.46 3.412A.88.88 0 0 1 3 11.413zM12.5 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z" /></SvgRoot>;
});
export default IconSkipForwardFill;
