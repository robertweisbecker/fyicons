import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPage = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPage(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11 1C12.1046 1 13 1.89543 13 3V13C13 14.1046 12.1046 15 11 15H5C3.89543 15 3 14.1046 3 13V3C3 1.89543 3.89543 1 5 1H11ZM5 2C4.44772 2 4 2.44772 4 3V13C4 13.5523 4.44772 14 5 14H11C11.5523 14 12 13.5523 12 13V3C12 2.44772 11.5523 2 11 2H5ZM8.5 8C8.77614 8 9 8.22386 9 8.5C9 8.77614 8.77614 9 8.5 9H5.5C5.22386 9 5 8.77614 5 8.5C5 8.22386 5.22386 8 5.5 8H8.5ZM10.5 5C10.7761 5 11 5.22386 11 5.5C11 5.77614 10.7761 6 10.5 6H5.5C5.22386 6 5 5.77614 5 5.5C5 5.22386 5.22386 5 5.5 5H10.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconPage;
