import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAngle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAngle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M2.5 2a.5.5 0 0 1 .5.5v3.517h.001c.56.037 1.115.138 1.652.3.271.08.4.381.292.643a.53.53 0 0 1-.643.297A6.5 6.5 0 0 0 3 7.02v-.001V13h5.982a6.5 6.5 0 0 0-.239-1.304.53.53 0 0 1 .296-.643.476.476 0 0 1 .643.293c.162.538.264 1.093.302 1.654H13.5a.5.5 0 0 1 0 1H2V2.5a.5.5 0 0 1 .5-.5m5.264 6.941a.476.476 0 0 1 .718.037q.18.234.338.484a.477.477 0 0 1-.233.695.535.535 0 0 1-.647-.213 7 7 0 0 0-.215-.31.53.53 0 0 1 .039-.693M5.84 7.413a.477.477 0 0 1 .695-.234q.25.159.485.337a.477.477 0 0 1 .036.72.53.53 0 0 1-.692.038 7 7 0 0 0-.311-.215.534.534 0 0 1-.213-.646" /></SvgRoot>;
});
export default IconAngle;
