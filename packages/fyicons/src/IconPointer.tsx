import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointer = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPointer(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pointer"><path fill="currentColor" d="M1.658 3.556c-.391-1.173.725-2.288 1.897-1.898l9.687 3.229c1.293.431 1.387 2.225.146 2.789L9.46 9.46l-1.785 3.93c-.564 1.24-2.358 1.147-2.789-.147zm1.58-.95a.5.5 0 0 0-.632.634l3.23 9.686a.5.5 0 0 0 .93.049l1.861-4.099a.5.5 0 0 1 .248-.248l4.1-1.862a.5.5 0 0 0-.05-.93z" /></SvgRoot>;
});
export default IconPointer;
