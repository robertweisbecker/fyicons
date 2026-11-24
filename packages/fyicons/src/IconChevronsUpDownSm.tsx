import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronsUpDownSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronsUpDownSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chevrons-up-down-sm"><path fill="currentColor" d="M9.807 9.808a.626.626 0 0 1 .884.885l-2.25 2.25a.626.626 0 0 1-.884 0l-2.25-2.25a.627.627 0 0 1 .884-.885L8 11.616zm-2.25-6.75a.626.626 0 0 1 .885 0l2.25 2.25a.626.626 0 0 1-.884.885L8 4.385 6.192 6.193a.626.626 0 0 1-.884-.885z" />{props.children}</SvgRoot>;
});
export default IconChevronsUpDownSm;
