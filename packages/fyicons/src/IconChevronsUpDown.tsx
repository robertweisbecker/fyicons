import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronsUpDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronsUpDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.148 10.147a.5.5 0 0 1 .707.707l-2.5 2.5a.5.5 0 0 1-.707 0l-2.5-2.5a.5.5 0 1 1 .707-.707l2.146 2.146zm-2.5-7.5a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1-.707.707L8 3.707 5.854 5.854a.5.5 0 1 1-.707-.707z" /></SvgRoot>;
});
export default IconChevronsUpDown;
