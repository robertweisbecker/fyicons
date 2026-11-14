import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowDownLeft = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowDownLeft(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-down-left"><path fill="currentColor" d="M3.5 13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 1 0v5.793l8.147-8.147a.5.5 0 0 1 .707.707L4.707 12H10.5a.5.5 0 1 1 0 1z" />{props.children}</SvgRoot>;
});
export default IconArrowDownLeft;
