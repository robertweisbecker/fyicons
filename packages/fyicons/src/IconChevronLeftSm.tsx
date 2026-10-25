import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronLeftSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronLeftSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="chevron-left-sm"><path d="M9.14645 4.14645C9.34171 3.95118 9.65822 3.95118 9.85348 4.14645C10.0487 4.34171 10.0487 4.65823 9.85348 4.85348L6.70699 7.99996L9.85348 11.1464C10.0487 11.3417 10.0487 11.6582 9.85348 11.8535C9.65823 12.0487 9.34171 12.0487 9.14645 11.8535L5.64645 8.35348C5.45118 8.15822 5.45118 7.84171 5.64645 7.64645L9.14645 4.14645Z" fill="currentColor" /></SvgRoot>;
});
export default IconChevronLeftSm;
