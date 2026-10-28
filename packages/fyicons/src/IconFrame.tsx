import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFrame = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFrame(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="frame"><path fill="currentColor" d="M11.462 2a.5.5 0 0 1 .5.5v1.538H13.5a.5.5 0 0 1 0 1h-1.538v5.924H13.5a.5.5 0 0 1 0 1h-1.538V13.5a.5.5 0 0 1-1 0v-1.538H5.038V13.5a.5.5 0 0 1-1 0v-1.538H2.5a.5.5 0 0 1 0-1h1.538V5.038H2.5a.5.5 0 0 1 0-1h1.538V2.5a.5.5 0 0 1 1 0v1.538h5.924V2.5a.5.5 0 0 1 .5-.5m-6.424 8.962h5.924V5.038H5.038z" /></SvgRoot>;
});
export default IconFrame;
