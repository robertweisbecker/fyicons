import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMouseCupertino = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMouseCupertino(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="mouse-cupertino"><path stroke="currentColor" d="M11.5 7.871c0 -1.123 -0.094 -2.551 -0.19 -3.712c-0.103 -1.257 -1.057 -2.268 -2.3 -2.484a5.9 5.9 0 0 0 -2.02 0a2.76 2.76 0 0 0 -2.296 2.488C4.597 5.357 4.5 6.814 4.5 7.871c0 2.308 0 4.629 1 5.815c0.892 1.057 4.046 1.131 5 0C11.5 12.5 11.5 9.986 11.5 7.871z" /><path fill="currentColor" d="M8.25 11a.74.74 0 0 1 .502.197c.051.046.026.127-.031.165a.499.499 0 0 0 .12.886c.06.02.104.081.08.14A.998.998 0 0 1 7 12v-.25a.75.75 0 0 1 .75-.75z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="m8 10.5.25-.25" /></SvgRoot>;
});
export default IconMouseCupertino;
