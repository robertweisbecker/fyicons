import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquircleFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquircleFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="squircle-fill"><path fill="currentColor" d="M8 1C2.236 1 1 2.236 1 8s1.236 7 7 7 7-1.235 7-7-1.235-7-7-7" />{props.children}</SvgRoot>;
});
export default IconSquircleFill;
