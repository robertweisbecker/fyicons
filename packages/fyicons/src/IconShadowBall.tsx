import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShadowBall = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShadowBall(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="shadow-ball"><path fill="currentColor" d="M8 2a5 5 0 1 1 0 10A5 5 0 0 1 8 2m0 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8" /><path fill="currentColor" d="M11.847 9.584C13.162 10.043 14 10.73 14 11.5c0 1.38-2.687 2.5-6 2.5s-6-1.12-6-2.5c0-.77.836-1.457 2.15-1.916A4.5 4.5 0 0 0 8 11.75c1.63 0 3.058-.868 3.847-2.166" opacity={0.3} /></SvgRoot>;
});
export default IconShadowBall;
