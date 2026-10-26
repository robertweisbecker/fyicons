import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronLeftSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronLeftSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.146 4.146a.5.5 0 1 1 .707.707L6.707 8l3.146 3.146a.5.5 0 0 1-.707.707l-3.5-3.5a.5.5 0 0 1 0-.707z" /></SvgRoot>;
});
export default IconChevronLeftSm;
