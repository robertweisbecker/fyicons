import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCompassSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCompassSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="compass-simple"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m2.61 2.77a.5.5 0 0 1 .62.62L9.98 9.64a.5.5 0 0 1-.34.34l-4.25 1.25a.5.5 0 0 1-.62-.62l1.25-4.25.022-.06a.5.5 0 0 1 .317-.28zM6.901 6.903l-.915 3.11 3.11-.915.915-3.11z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9.5 9.5-3-3" /></SvgRoot>;
});
export default IconCompassSimple;
