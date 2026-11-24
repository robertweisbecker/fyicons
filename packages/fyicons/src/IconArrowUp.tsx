import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-up"><path fill="currentColor" d="M8.001 2c.141 0 .276.06.371.166l4.5 5a.5.5 0 0 1-.744.668L8.5 3.804V13.5a.5.5 0 0 1-1 0V3.803L3.872 7.834a.501.501 0 0 1-.744-.668l4.5-5A.5.5 0 0 1 8.002 2" />{props.children}</SvgRoot>;
});
export default IconArrowUp;
