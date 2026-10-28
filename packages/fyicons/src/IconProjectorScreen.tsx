import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconProjectorScreen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconProjectorScreen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="projector-screen"><path fill="currentColor" d="M8 13.001a1 1 0 1 1 0 2 1 1 0 0 1 0-2M13.5 2A1.5 1.5 0 0 1 15 3.5v1a.5.5 0 0 1-.5.5H14v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5h-.5a.5.5 0 0 1-.5-.5v-1A1.5 1.5 0 0 1 2.5 2zM3 11h10V5H3zm-.5-8a.5.5 0 0 0-.5.5V4h12v-.5a.5.5 0 0 0-.5-.5z" /><path stroke="currentColor" strokeLinecap="round" d="M8 11.5v2" /></SvgRoot>;
});
export default IconProjectorScreen;
