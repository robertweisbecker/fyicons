import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSkipBackwardFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSkipBackwardFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="skip-backward-fill"><path fill="currentColor" d="M4.5 3a.5.5 0 0 1 .5.5v3.89l6.86-4.191a.75.75 0 0 1 1.14.64v8.325a.75.75 0 0 1-1.14.64L5 8.61v3.89a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5z" />{props.children}</SvgRoot>;
});
export default IconSkipBackwardFill;
