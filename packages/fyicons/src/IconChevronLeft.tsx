import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronLeft = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronLeft(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M9.85315 3.14669C9.65789 2.95143 9.34138 2.95143 9.14612 3.14669L4.64612 7.64669C4.45103 7.84197 4.45091 8.15852 4.64612 8.35372L9.14612 12.8537C9.34134 13.0488 9.65793 13.0488 9.85315 12.8537C10.0484 12.6585 10.0482 12.342 9.85315 12.1467L5.70667 8.00021L9.85315 3.85372C10.0484 3.65852 10.0482 3.34197 9.85315 3.14669Z" fill="currentColor" /></SvgRoot>;
});
export default IconChevronLeft;
