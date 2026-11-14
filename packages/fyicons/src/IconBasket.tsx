import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBasket = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBasket(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="basket"><path fill="currentColor" d="M9.343 2.026a.5.5 0 0 1 .633.317L10.528 4H12.5A2.5 2.5 0 0 1 15 6.5v1.23c0 1.02-.672 1.9-1.625 2.19l-1.042 2.782A2 2 0 0 1 10.461 14H5.539a2 2 0 0 1-1.872-1.298L2.624 9.921A2.29 2.29 0 0 1 1 7.729V6.5A2.5 2.5 0 0 1 3.5 4h1.973l.552-1.657a.501.501 0 0 1 .95.316L6.527 4h2.946l-.447-1.34a.5.5 0 0 1 .317-.634M3.5 5A1.5 1.5 0 0 0 2 6.5v1.23c0 .593.402 1.105.967 1.252l.115.025.285.048.1.27 1.137 3.027a1 1 0 0 0 .935.648h4.922a1 1 0 0 0 .935-.649l1.136-3.027.028-.06a.5.5 0 0 1 .358-.257A1.295 1.295 0 0 0 14 7.729V6.5A1.5 1.5 0 0 0 12.5 5h-1.639l.34 1.02a1.001 1.001 0 1 1-.949.319L9.807 5H6.194L5.75 6.337a1 1 0 1 1-.95-.317L5.14 5z" /></SvgRoot>;
});
export default IconBasket;
