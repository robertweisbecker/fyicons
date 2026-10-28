import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chevron-down"><path fill="currentColor" d="M12.148 6.146a.5.5 0 1 1 .707.707l-4.5 4.5a.5.5 0 0 1-.707 0l-4.5-4.5a.5.5 0 1 1 .707-.707L8 10.293z" /></SvgRoot>;
});
export default IconChevronDown;
