import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFrame = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFrame(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="frame"><path fill="currentColor" d="M12.462 1a.5.5 0 0 1 .5.5v1.538H14.5a.5.5 0 0 1 0 1h-1.538v7.924H14.5a.5.5 0 0 1 0 1h-1.538V14.5a.5.5 0 0 1-1 0v-1.538H4.038V14.5a.5.5 0 0 1-1 0v-1.538H1.5a.5.5 0 0 1 0-1h1.538V4.038H1.5a.5.5 0 0 1 0-1h1.538V1.5a.5.5 0 0 1 1 0v1.538h7.924V1.5a.5.5 0 0 1 .5-.5M4.038 11.962h7.924V4.038H4.038z" /></SvgRoot>;
});
export default IconFrame;
