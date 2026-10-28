import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMouseCupertino = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMouseCupertino(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="mouse-cupertino"><path stroke="currentColor" d="M11.5 7.871c0-1.123-.094-2.551-.19-3.712-.103-1.257-1.057-2.268-2.3-2.484a5.9 5.9 0 0 0-2.02 0 2.76 2.76 0 0 0-2.296 2.488C4.597 5.357 4.5 6.814 4.5 7.871c0 2.308 0 4.629 1 5.815.892 1.057 4.046 1.131 5 0 1-1.186 1-3.7 1-5.815Z" /><path fill="currentColor" d="M8.5 11a.5.5 0 0 1 .5.5.5.5 0 0 0-.087.991.89.89 0 0 1-.802.509A1.11 1.11 0 0 1 7 11.889v-.139a.75.75 0 0 1 .75-.75z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="m7.5 11.5.75-.75" /></SvgRoot>;
});
export default IconMouseCupertino;
