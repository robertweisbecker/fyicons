import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-up"><path fill="currentColor" d="M7.646 1.646a.5.5 0 0 1 .707 0l4.5 4.5a.5.5 0 0 1-.707.707L8.5 3.207V13.5a.5.5 0 0 1-1 0V3.207L3.853 6.853a.5.5 0 0 1-.707-.707z" /></SvgRoot>;
});
export default IconArrowUp;
