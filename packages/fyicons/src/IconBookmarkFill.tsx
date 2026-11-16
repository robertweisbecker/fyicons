import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookmarkFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookmarkFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bookmark-fill"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 1.5H5A1.5 1.5 0 0 0 3.5 3v10.552a.875.875 0 0 0 1.456.654L8 11.5l3.044 2.706a.875.875 0 0 0 1.456-.654V3A1.5 1.5 0 0 0 11 1.5" /></SvgRoot>;
});
export default IconBookmarkFill;
