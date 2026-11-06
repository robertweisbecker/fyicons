import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCursorRays = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCursorRays(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cursor-rays"><path fill="currentColor" d="M7.184 7.881a.5.5 0 0 1 .66-.64l4.693 1.96a.5.5 0 0 1 .149.827l-.857.803 1.316 1.316a.5.5 0 0 1 .001.707l-.293.292a.5.5 0 0 1-.707.001l-1.35-1.349-1.005.944a.5.5 0 0 1-.808-.186zm-2.722 2.946a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707-.707zM3.5 7.499a.5.5 0 1 1-.001 1h-2a.5.5 0 0 1 0-1zm-.45-4.45a.5.5 0 0 1 .706 0L5.17 4.461a.5.5 0 0 1-.707.707L3.048 3.755a.5.5 0 0 1 0-.707m9.192 0a.5.5 0 0 1 .707.706L11.534 5.17a.5.5 0 1 1-.707-.707zM7.999.998a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconCursorRays;
