import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFrame = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFrame(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="frame"><path fill="currentColor" d="M11.462 1a.5.5 0 0 1 .5.5v2.538H14.5a.5.5 0 0 1 0 1h-2.538v5.924H14.5a.5.5 0 0 1 0 1h-2.538V14.5a.5.5 0 0 1-1 0v-2.538H5.038V14.5a.5.5 0 0 1-1 0v-2.538H1.5a.5.5 0 0 1 0-1h2.538V5.038H1.5a.5.5 0 0 1 0-1h2.538V1.5a.5.5 0 0 1 1 0v2.538h5.924V1.5a.5.5 0 0 1 .5-.5m-6.424 9.962h5.924V5.038H5.038z" />{props.children}</SvgRoot>;
});
export default IconFrame;
