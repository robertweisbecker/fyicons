import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDiamondFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDiamondFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="diamond-fill"><path fill="currentColor" d="M7.295 1.25a1 1 0 0 1 1.414 0l6.043 6.043a1 1 0 0 1 0 1.414L8.709 14.75a1 1 0 0 1-1.414 0L1.252 8.707a1 1 0 0 1 0-1.414z" />{props.children}</SvgRoot>;
});
export default IconDiamondFill;
