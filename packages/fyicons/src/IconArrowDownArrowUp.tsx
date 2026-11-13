import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowDownArrowUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowDownArrowUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-down-arrow-up"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14.5 5.5-3-3-3 3" /><path stroke="currentColor" strokeLinecap="round" d="M11.5 2.5v8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7.499 10.5-3 3-3-3" /><path stroke="currentColor" strokeLinecap="round" d="M4.499 5.5v8" /></SvgRoot>;
});
export default IconArrowDownArrowUp;
