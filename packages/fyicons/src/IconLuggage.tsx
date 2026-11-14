import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLuggage = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLuggage(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="luggage"><path fill="currentColor" d="M9.5 1A1.5 1.5 0 0 1 11 2.5V3h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2v-.5A1.5 1.5 0 0 1 6.5 1zM3 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2v.293l1.854 1.853A.5.5 0 0 1 13 6.5V10a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6.5a.5.5 0 0 1 .146-.354L10 4.293V4zm6 2.707V10h3V6.707l-1.5-1.5zM6.5 2a.5.5 0 0 0-.5.5V3h4v-.5a.5.5 0 0 0-.5-.5z" />{props.children}</SvgRoot>;
});
export default IconLuggage;
