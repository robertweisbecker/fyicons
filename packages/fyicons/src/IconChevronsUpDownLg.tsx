import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronsUpDownLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronsUpDownLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chevrons-up-down-lg"><path fill="currentColor" d="M11.647 10.147a.5.5 0 1 1 .707.707l-4 4a.5.5 0 0 1-.707 0l-3.999-4a.5.5 0 0 1 .707-.707l3.647 3.645zm-4-9a.5.5 0 0 1 .706 0l4 4a.5.5 0 0 1-.707.707L8 2.207 4.353 5.854a.5.5 0 0 1-.707-.707z" /></SvgRoot>;
});
export default IconChevronsUpDownLg;
