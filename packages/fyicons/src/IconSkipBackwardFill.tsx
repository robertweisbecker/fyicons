import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSkipBackwardFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSkipBackwardFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="skip-backward-fill"><path fill="currentColor" d="M11.653 3.842A.88.88 0 0 1 13 4.588v6.824a.88.88 0 0 1-1.347.746L6.194 8.746a.88.88 0 0 1 0-1.492zM4.5 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z" /></SvgRoot>;
});
export default IconSkipBackwardFill;
