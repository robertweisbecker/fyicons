import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStarHalfFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStarHalfFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.077.897c.39 0 .78.206.962.626l1.485 3.416 3.711.359c.913.089 1.281 1.223.595 1.83l-2.79 2.469.807 3.641c.198.896-.769 1.597-1.559 1.132l-3.21-1.891h-.002l-3.21 1.893h-.002c-.79.464-1.755-.237-1.557-1.132l.805-3.64-2.79-2.47c-.687-.607-.318-1.742.595-1.83l3.708-.359 1.487-3.418c.172-.393.524-.6.888-.626h.003l.074-.004zm0 10.421.253.15 3.466 2.04a.05.05 0 0 0 .027.009.06.06 0 0 0 .047-.033.05.05 0 0 0 0-.029L11 9.527l-.064-.288.221-.194 3.012-2.664a.05.05 0 0 0 .016-.024.06.06 0 0 0-.018-.055l-.026-.008-4.004-.386-.293-.028-.118-.27L8.12 1.921a.05.05 0 0 0-.017-.023l-.027-.007z" /></SvgRoot>;
});
export default IconStarHalfFill;
