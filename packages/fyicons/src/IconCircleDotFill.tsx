import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleDotFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleDotFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-dot-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />{props.children}</SvgRoot>;
});
export default IconCircleDotFill;
