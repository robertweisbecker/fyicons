import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconProjectorScreen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconProjectorScreen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="projector-screen"><path fill="currentColor" d="M8 11.25a1.751 1.751 0 0 1 .001 3.501A1.751 1.751 0 0 1 8 11.25m0 1.001a.75.75 0 1 0 .002 1.5.75.75 0 0 0-.002-1.5M14 2a1 1 0 0 1 1 1v.5a.5.5 0 0 1-.5.5H14v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4h-.5a.5.5 0 0 1-.5-.5V3a1 1 0 0 1 1-1zM3 10h10V4H3z" /><path stroke="currentColor" strokeLinecap="round" d="M8 10.5v1.25" /></SvgRoot>;
});
export default IconProjectorScreen;
