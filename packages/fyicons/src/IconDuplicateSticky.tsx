import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDuplicateSticky = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDuplicateSticky(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="duplicate-sticky"><path d="M4.5 11.5L3.5 11.5C2.39543 11.5 1.5 10.6046 1.5 9.5L1.5 3.5C1.5 2.39543 2.39543 1.5 3.5 1.5L9.5 1.5C10.6046 1.5 11.5 2.39543 11.5 3.5L11.5 4.5" stroke="currentColor" strokeLinecap="round" /><path d="M4.5 6.5L4.5 12.5C4.5 13.6046 5.39543 14.5 6.5 14.5L10.75 14.5L13.8238 11.2212C14.2582 10.7579 14.5 10.1465 14.5 9.51138L14.5 6.5C14.5 5.39543 13.6046 4.5 12.5 4.5L6.5 4.5C5.39543 4.5 4.5 5.39543 4.5 6.5Z" stroke="currentColor" strokeLinecap="round" /><path d="M10.5 14L10.5 12C10.5 11.1716 11.1716 10.5 12 10.5L14 10.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconDuplicateSticky;
