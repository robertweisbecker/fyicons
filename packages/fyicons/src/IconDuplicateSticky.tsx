import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDuplicateSticky = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDuplicateSticky(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="duplicate-sticky"><path stroke="currentColor" strokeLinecap="round" d="M4.5 11.5h-1a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1" /><path stroke="currentColor" strokeLinecap="round" d="M4.5 6.5v6a2 2 0 0 0 2 2h3.172a2 2 0 0 0 1.414-.586l2.828-2.828a2 2 0 0 0 .586-1.414V6.5a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2Z" /><path stroke="currentColor" strokeLinecap="round" d="M14.5 8.5V9a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 0-1.5 1.5v1A1.5 1.5 0 0 1 9 14.5h-.5" /></SvgRoot>;
});
export default IconDuplicateSticky;
