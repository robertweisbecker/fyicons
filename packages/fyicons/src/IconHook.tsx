import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHook = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHook(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="hook"><path fill="currentColor" d="M8 2a1.998 1.998 0 0 1 .5 3.934v4.816a2.25 2.25 0 0 0 4.5 0V8.707l-1.146 1.147a.5.5 0 1 1-.707-.708l2-2A.5.5 0 0 1 14 7.5v3.25a3.25 3.25 0 0 1-6 1.731 3.25 3.25 0 0 1-6-1.731V7.5a.5.5 0 0 1 .854-.354l2 2a.5.5 0 1 1-.708.708L3 8.707v2.043a2.25 2.25 0 0 0 4.5 0V5.934A1.998 1.998 0 0 1 8 2m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />{props.children}</SvgRoot>;
});
export default IconHook;
