import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudRain = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudRain(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cloud-rain"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5a3 3 0 0 1 0-6h.036A3.5 3.5 0 0 1 11.5 5v.5h.5a2.5 2.5 0 0 1 0 5zm2.25 0-1.25 3m3.75-2.75L8.5 12.5m-4.25-1.75L3.5 12.5m8.25-2-1.25 3" />{props.children}</SvgRoot>;
});
export default IconCloudRain;
