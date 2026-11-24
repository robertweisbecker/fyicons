import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDogFace = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDogFace(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="dog-face"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 14.491c-3.352 0-2.786-1.785-3.75-2.94-1.06-1.27-.65-2.2-.75-3.31-.106-1.167-.433-1.138 0-1.75h-1a1 1 0 0 1-.8-1.6l1.8-2.4 2 1.01M8 14.491c3.352 0 2.786-1.785 3.75-2.94 1.06-1.27.65-2.2.75-3.31.106-1.167.433-1.138 0-1.75h.997a1 1 0 0 0 .8-1.6L12.5 2.5l-2 1" /><path fill="currentColor" d="M5.5 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m5 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M8 12c0-.75 2-.75 2-2.25C10 9.129 9 9 8 9s-2 .129-2 .75c0 1.5 2 1.5 2 2.25" /><path stroke="currentColor" strokeLinecap="round" d="M10.5 3.5a3.737 3.737 0 0 0-5 0M8 11v1.5" />{props.children}</SvgRoot>;
});
export default IconDogFace;
