import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSearchSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSearchSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="search-sm"><path d="M10.249 10.249L13.499 13.499" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 11.5C9.48528 11.5 11.5 9.48528 11.5 7C11.5 4.51472 9.48528 2.5 7 2.5C4.51472 2.5 2.5 4.51472 2.5 7C2.5 9.48528 4.51472 11.5 7 11.5Z" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" /></SvgRoot>;
});
export default IconSearchSm;
