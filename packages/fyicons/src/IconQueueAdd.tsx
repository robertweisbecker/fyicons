import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconQueueAdd = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconQueueAdd(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="queue-add"><path fill="currentColor" d="M11.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H12v1.5a.5.5 0 0 1-1 0V12H9.5a.5.5 0 0 1 0-1H11V9.5a.5.5 0 0 1 .5-.5m1-7A1.5 1.5 0 0 1 14 3.5v2A1.5 1.5 0 0 1 12.5 7h-9A1.5 1.5 0 0 1 2 5.5v-2A1.5 1.5 0 0 1 3.5 2zm-9 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.5 8v2.5a2 2 0 0 0 2 2h1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.5 6.5v1a2 2 0 0 0 2 2h1" /></SvgRoot>;
});
export default IconQueueAdd;
