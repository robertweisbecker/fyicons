import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPercent = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPercent(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" d="m11.5 2.5-7 11" /><circle cx={11.5} cy={11.5} r={2} stroke="currentColor" /><circle cx={4.5} cy={4.5} r={2} stroke="currentColor" /></SvgRoot>;
});
export default IconPercent;
