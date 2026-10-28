import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronDownSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronDownSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chevron-down-sm"><path fill="currentColor" d="M11.146 6.647a.5.5 0 0 1 .707.707l-3.5 3.5a.5.5 0 0 1-.707 0l-3.5-3.5a.5.5 0 1 1 .707-.707L8 9.793z" /></SvgRoot>;
});
export default IconChevronDownSm;
