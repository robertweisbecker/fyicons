import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDuplicateSticky = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDuplicateSticky(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" d="M5.5 10.5H3A1.5 1.5 0 0 1 1.5 9V3A1.5 1.5 0 0 1 3 1.5h6A1.5 1.5 0 0 1 10.5 3v2.5" /><path stroke="currentColor" strokeLinecap="round" d="M5.5 7v6A1.5 1.5 0 0 0 7 14.5h4.19a.75.75 0 0 0 .53-.22l2.56-2.56a.75.75 0 0 0 .22-.53V7A1.5 1.5 0 0 0 13 5.5H7A1.5 1.5 0 0 0 5.5 7Z" /><path stroke="currentColor" strokeLinecap="round" d="M10.5 14.5V12a1.5 1.5 0 0 1 1.5-1.5h2.5" /></SvgRoot>;
});
export default IconDuplicateSticky;
