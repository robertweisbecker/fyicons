import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTreasureChest = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTreasureChest(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 2a3 3 0 0 1 2.231 1H11.5A2.5 2.5 0 0 1 14 5.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5.5A2.5 2.5 0 0 1 4.5 3h1.269A3 3 0 0 1 8 2M3 9v4h10V9h-2v.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V9zm5-6a2 2 0 0 0-2 2v4h4V5a2 2 0 0 0-2-2m2.826 1c.11.313.174.649.174 1v3h2V5.5A1.5 1.5 0 0 0 11.5 4zM4.5 4A1.5 1.5 0 0 0 3 5.5V8h2V5c0-.351.063-.687.174-1zM8 5a1 1 0 0 1 .5 1.864V7.5a.5.5 0 0 1-1 0v-.636A.998.998 0 0 1 8 5" /></SvgRoot>;
});
export default IconTreasureChest;
