import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="height"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.495 1.505h1m8 0h-1m-3 0h-1m-4 13h1m8 0h-1m-3 0h-1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity={0.9} d="M6.002 5.999 8 4l2 1.999M8.001 4v8M6 9.999 8.001 12 10 10.001" /></SvgRoot>;
});
export default IconHeight;
