import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronLeftSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronLeftSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chevron-left-sm"><path fill="currentColor" d="M9.146 4.146a.5.5 0 1 1 .708.708L6.707 8l3.147 3.146a.5.5 0 1 1-.708.707l-3.5-3.5a.5.5 0 0 1 0-.707z" />{props.children}</SvgRoot>;
});
export default IconChevronLeftSm;
