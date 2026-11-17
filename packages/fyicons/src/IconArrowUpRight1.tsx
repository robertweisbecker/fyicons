import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowUpRight1 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowUpRight1(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-up-right-1"><path fill="currentColor" d="M3.5 3a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0V4.707l8.147 8.147a.5.5 0 1 0 .707-.707L4.707 4H10.5a.5.5 0 1 0 0-1z" />{props.children}</SvgRoot>;
});
export default IconArrowUpRight1;
