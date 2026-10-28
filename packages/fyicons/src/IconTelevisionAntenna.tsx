import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTelevisionAntenna = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTelevisionAntenna(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="television-antenna"><path fill="currentColor" d="M10.116 2.18a.5.5 0 0 1 .768.64L9.067 5H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.933L5.116 2.82a.5.5 0 0 1 .768-.64L8 4.719zM2 13h12V6H2z" /></SvgRoot>;
});
export default IconTelevisionAntenna;
