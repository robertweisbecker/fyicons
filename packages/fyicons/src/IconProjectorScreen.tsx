import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconProjectorScreen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconProjectorScreen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="projector-screen"><path fill="currentColor" d="M8 11.251a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5m0 1a.75.75 0 1 0 .002 1.5.75.75 0 0 0-.002-1.5M13.5 2A1.5 1.5 0 0 1 15 3.5v1a.5.5 0 0 1-.5.5H14v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5h-.5a.5.5 0 0 1-.5-.5v-1A1.5 1.5 0 0 1 2.5 2zM3 10h10V5H3zm-.5-7a.5.5 0 0 0-.5.5V4h12v-.5a.5.5 0 0 0-.5-.5z" /><path stroke="currentColor" strokeLinecap="round" d="M8 10.5v1.25" />{props.children}</SvgRoot>;
});
export default IconProjectorScreen;
