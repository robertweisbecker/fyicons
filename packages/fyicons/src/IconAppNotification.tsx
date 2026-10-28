import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAppNotification = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAppNotification(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" d="M13.5 8.5v1c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C11.6 13.5 10.9 13.5 9.5 13.5h-3c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2.5 11.6 2.5 10.9 2.5 9.5v-3c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C4.4 2.5 5.1 2.5 6.5 2.5h1" /><circle cx={12.5} cy={3.5} r={2.5} fill="currentColor" /></SvgRoot>;
});
export default IconAppNotification;
