import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPercent = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPercent(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="percent"><path d="M11.5 2.5L4.5 13.5" stroke="currentColor" strokeLinecap="round" /><circle cx={11.5} cy={11.5} r={2} stroke="currentColor" strokeWidth={1.125} /><circle cx={4.5} cy={4.5} r={2} stroke="currentColor" strokeWidth={1.125} /></SvgRoot>;
});
export default IconPercent;
