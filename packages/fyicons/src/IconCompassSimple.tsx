import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCompassSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCompassSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="compass-simple"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m2.379 3.015a.5.5 0 0 1 .606.606l-1 4a.5.5 0 0 1-.364.364l-4 1a.5.5 0 0 1-.606-.606l1-4 .021-.066a.5.5 0 0 1 .343-.298zM6.912 6.912l-.724 2.9 2.899-.725.726-2.9z" /></SvgRoot>;
});
export default IconCompassSimple;
