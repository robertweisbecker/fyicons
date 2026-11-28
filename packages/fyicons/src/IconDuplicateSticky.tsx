import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDuplicateSticky = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDuplicateSticky(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="duplicate-sticky"><path stroke="currentColor" strokeLinecap="round" d="M4.5 11.5h-1a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1" /><path stroke="currentColor" strokeLinecap="round" d="m14.06 9.44-4.62 4.62a1.5 1.5 0 0 1-1.061.44H6.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.879a1.5 1.5 0 0 1-.44 1.06Z" /><path stroke="currentColor" strokeLinecap="round" d="M14.5 7.5v1a1 1 0 0 1-1 1H11A1.5 1.5 0 0 0 9.5 11v2.5a1 1 0 0 1-1 1h-1" />{props.children}</SvgRoot>;
});
export default IconDuplicateSticky;
