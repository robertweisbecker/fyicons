import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRocketLaunch = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRocketLaunch(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="rocket-launch"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.595 1.403v.83a4 4 0 0 1-1.6 3.2l-1.228.92L8.5 9.5l-2-2 3.146-3.267.92-1.229a4 4 0 0 1 3.201-1.6z" /><path fill="currentColor" d="M10 8.75a.5.5 0 0 0-1 0zm-.5 3.75H9a.5.5 0 0 0 .854.354zm0-3.75H9v3.75h1V8.75zm0 3.75.354.354 2.414-2.415-.354-.353-.353-.354-2.414 2.414zm3-3.828h.5V6h-1v2.672zm-.586 1.414.354.353A2.5 2.5 0 0 0 13 8.672h-1a1.5 1.5 0 0 1-.44 1.06z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75 3.5 6.5l2.414-2.414A2 2 0 0 1 7.328 3.5H10m-3.5 6h-.969a3 3 0 0 0-2.785 1.886L1.5 14.5l3.114-1.246A3 3 0 0 0 6.5 10.47z" />{props.children}</SvgRoot>;
});
export default IconRocketLaunch;
