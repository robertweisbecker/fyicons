import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBanFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBanFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="ban-fill"><circle cx={8} cy={8} r={6.5} stroke="currentColor" /><path fill="currentColor" d="M11.164 11.871a5 5 0 0 1-7.036-7.036zM8 3a5 5 0 0 1 3.871 8.164L4.835 4.128A4.98 4.98 0 0 1 8 3" />{props.children}</SvgRoot>;
});
export default IconBanFill;
