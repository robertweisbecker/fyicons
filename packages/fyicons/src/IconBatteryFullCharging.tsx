import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBatteryFullCharging = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBatteryFullCharging(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12 3a3 3 0 0 1 3 3 1 1 0 0 1 1 1v2a1 1 0 0 1-1 1 3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM4 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm1.999 1a.5.5 0 0 1 .4.8L5.05 7.6a1.495 1.495 0 0 0 .88 2.363c.08.017.136.094.116.173a2 2 0 0 0-.032.167c-.045.342-.289.697-.634.697H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM12 5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1.999a.5.5 0 0 1-.4-.8l1.35-1.8a1.5 1.5 0 0 0-.883-2.364c-.078-.017-.133-.094-.113-.172q.021-.083.032-.167c.046-.342.289-.697.634-.697z" /><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m6.25 8.5 2.25-3-.5 2h1.75l-2.25 3 .5-2z" /></SvgRoot>;
});
export default IconBatteryFullCharging;
