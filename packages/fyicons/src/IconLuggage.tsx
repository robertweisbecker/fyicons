import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLuggage = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLuggage(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="luggage"><path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 1 11 3.5V4h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2v-.5A1.5 1.5 0 0 1 6.5 2zM3 5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v1.293l.854.853A.5.5 0 0 1 12 7.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .146-.354L10 6.293V5zm7 2.707V9h1V7.707l-.5-.5zM6.5 3a.5.5 0 0 0-.5.5V4h4v-.5a.5.5 0 0 0-.5-.5z" /></SvgRoot>;
});
export default IconLuggage;
