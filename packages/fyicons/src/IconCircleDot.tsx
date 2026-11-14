import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleDot = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleDot(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-dot"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />{props.children}</SvgRoot>;
});
export default IconCircleDot;
