import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTimerSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTimerSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" d="M8 1.5a6.5 6.5 0 1 1-4.676 1.985" /><path fill="currentColor" d="M8.708 7.288a1 1 0 0 1-1.415 1.414c-.266-.266-1.466-2.12-2.204-3.275a.246.246 0 0 1 .34-.34c1.155.737 3.012 1.935 3.279 2.201" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.5v-2h.75" /></SvgRoot>;
});
export default IconTimerSimple;
