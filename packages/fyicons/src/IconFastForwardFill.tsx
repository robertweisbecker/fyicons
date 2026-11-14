import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFastForwardFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFastForwardFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="fast-forward-fill"><path fill="currentColor" d="M8 3.966a.88.88 0 0 1 1.394-.714l5.61 4.031a.88.88 0 0 1 0 1.43l-5.61 4.031A.88.88 0 0 1 8 12.03V8.72l-5.606 4.029A.88.88 0 0 1 1 12.034V3.967a.88.88 0 0 1 1.394-.715L8 7.28z" />{props.children}</SvgRoot>;
});
export default IconFastForwardFill;
