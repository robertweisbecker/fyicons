import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPanelRightOpen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPanelRightOpen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M13 3C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H13ZM3 4C2.44772 4 2 4.44772 2 5V11C2 11.5523 2.44772 12 3 12H13C13.5523 12 14 11.5523 14 11V5C14 4.44772 13.5523 4 13 4H3ZM12.5 5C12.7761 5 13 5.22386 13 5.5V10.5C13 10.7761 12.7761 11 12.5 11H7.5C7.22386 11 7 10.7761 7 10.5V5.5C7 5.22386 7.22386 5 7.5 5H12.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconPanelRightOpen;
