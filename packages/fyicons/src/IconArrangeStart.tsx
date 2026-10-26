import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrangeStart = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrangeStart(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.5 7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zm4 4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5z" /><path stroke="currentColor" strokeLinecap="round" d="M3.5 2.5v11" /></SvgRoot>;
});
export default IconArrangeStart;
