import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudDrizzle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudDrizzle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cloud-drizzle"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5a3 3 0 0 1 0-6h.036A3.5 3.5 0 0 1 11.5 5v.5h.5a2.5 2.5 0 0 1 0 5zm0 0v1m0 2v1m2-2v1m2 0v1m4-1v1m-2-2v1m-2-3v1m4-1v1" />{props.children}</SvgRoot>;
});
export default IconCloudDrizzle;
