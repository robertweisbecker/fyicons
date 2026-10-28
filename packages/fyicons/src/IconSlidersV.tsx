import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSlidersV = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSlidersV(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sliders-v"><path fill="currentColor" d="M4.5 15a.5.5 0 0 0 .5-.5v-1.55a2.5 2.5 0 0 0 0-4.9V1.5a.5.5 0 0 0-1 0v6.55a2.501 2.501 0 0 0 0 4.9v1.55a.5.5 0 0 0 .5.5m7 0a.5.5 0 0 0 .5-.5V7.95a2.501 2.501 0 0 0 0-4.9V1.5a.5.5 0 0 0-1 0v1.55a2.5 2.5 0 0 0 0 4.9v6.55a.5.5 0 0 0 .5.5m0-8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-7 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" /></SvgRoot>;
});
export default IconSlidersV;
