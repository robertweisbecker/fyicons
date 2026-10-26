import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronsUpDownSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronsUpDownSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.808 9.808a.626.626 0 0 1 .884.884l-2.25 2.25a.626.626 0 0 1-.884 0l-2.25-2.25a.626.626 0 0 1 .884-.884L8 11.615zm-2.25-6.75a.626.626 0 0 1 .884 0l2.25 2.25a.626.626 0 0 1-.884.884L8 4.385 6.192 6.192a.626.626 0 0 1-.884-.884z" /></SvgRoot>;
});
export default IconChevronsUpDownSm;
