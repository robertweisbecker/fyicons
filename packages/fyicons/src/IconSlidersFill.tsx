import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSlidersFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSlidersFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="sliders-fill"><path d="M10.75 9C11.9081 9 12.8609 9.87506 12.9854 11H14.498C14.7742 11 14.998 11.2239 14.998 11.5C14.998 11.7761 14.7742 12 14.498 12H12.8691C12.56 12.8734 11.7293 13.5 10.75 13.5C9.77067 13.5 8.93999 12.8734 8.63086 12H1.5C1.22386 12 1 11.7761 1 11.5C1 11.2239 1.22386 11 1.5 11H8.51465C8.63906 9.87506 9.5919 9 10.75 9ZM6 2.5C6.97933 2.5 7.81001 3.12657 8.11914 4H14.499C14.7751 4.0001 14.999 4.22392 14.999 4.5C14.999 4.77608 14.7751 4.9999 14.499 5H8.23535C8.11094 6.12494 7.1581 7 6 7C4.8419 7 3.88906 6.12494 3.76465 5H1.5C1.22386 5 1 4.77614 1 4.5C1 4.22386 1.22386 4 1.5 4H3.88086C4.18999 3.12657 5.02067 2.5 6 2.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconSlidersFill;
