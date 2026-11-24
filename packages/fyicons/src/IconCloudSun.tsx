import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudSun = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudSun(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cloud-sun"><path fill="currentColor" d="M10.5 4a2.5 2.5 0 1 1-.53 4.942 3.5 3.5 0 0 0-1.74-3.484A2.5 2.5 0 0 1 10.5 4" /><path stroke="currentColor" strokeLinejoin="round" d="M6.5 5.5a3 3 0 0 1 3 3h.5a2.5 2.5 0 0 1 0 5H4a2.5 2.5 0 0 1-.5-4.95V8.5a3 3 0 0 1 3-3Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5v1m3 1 1-1m-7 1-1-1m8 8-1-1m1-3h1" />{props.children}</SvgRoot>;
});
export default IconCloudSun;
