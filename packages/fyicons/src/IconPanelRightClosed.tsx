import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPanelRightClosed = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPanelRightClosed(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M13 3C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H13ZM3 4C2.44772 4 2 4.44772 2 5V11C2 11.5523 2.44772 12 3 12H13C13.5523 12 14 11.5523 14 11V5C14 4.44772 13.5523 4 13 4H3ZM11.5 5C11.7761 5 12 5.22386 12 5.5V10.5C12 10.7761 11.7761 11 11.5 11C11.2239 11 11 10.7761 11 10.5V5.5C11 5.22386 11.2239 5 11.5 5Z" fill="currentColor" /></SvgRoot>;
});
export default IconPanelRightClosed;
