import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowRightCurve = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowRightCurve(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-right-curve"><path d="M12.5 9.5H5C3.61929 9.5 2.5 8.38071 2.5 7V2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.5 5.5L13.4998 9.49905L9.5 13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconArrowRightCurve;
