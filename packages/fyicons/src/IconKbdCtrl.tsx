import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconKbdCtrl = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconKbdCtrl(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="kbd-ctrl"><path fill="currentColor" d="M7.725 2.581a.5.5 0 0 1 .628.065l4.5 4.5a.5.5 0 0 1-.707.707L8 3.706 3.853 7.853a.5.5 0 1 1-.707-.707l4.5-4.5z" /></SvgRoot>;
});
export default IconKbdCtrl;
