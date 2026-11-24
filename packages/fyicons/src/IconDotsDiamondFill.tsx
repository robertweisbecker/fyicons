import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDotsDiamondFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDotsDiamondFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="dots-diamond-fill"><path fill="currentColor" stroke="currentColor" strokeLinejoin="round" d="M8 10.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.5 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm9 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM8 1.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />{props.children}</SvgRoot>;
});
export default IconDotsDiamondFill;
