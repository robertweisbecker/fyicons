import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVolumeXFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeXFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="volume-x-fill"><path fill="currentColor" d="M6.92 2.237C7.726 1.52 9 2.092 9 3.17v9.66c0 1.079-1.274 1.65-2.08.934L3.81 11H1.5A1.5 1.5 0 0 1 0 9.5v-3A1.5 1.5 0 0 1 1.5 5h2.31z" /><path stroke="currentColor" strokeLinecap="round" d="m14.5 6.5-3 3m0-3 3 3" /></SvgRoot>;
});
export default IconVolumeXFill;
