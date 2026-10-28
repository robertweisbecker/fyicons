import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolderViewFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolderViewFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="folder-view-fill"><path d="M10.332 9.00977C10.6537 9.05552 10.9376 9.25613 11.0859 9.55273L11.3096 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H9C8.44772 14 8 13.5523 8 13V10C8 9.44771 8.44772 9 9 9H10.1914L10.332 9.00977ZM2.5 1C2.77614 1 3 1.22386 3 1.5V3C3 3.55228 3.44772 4 4 4H6.5C6.77614 4 7 4.22386 7 4.5C7 4.77614 6.77614 5 6.5 5H4C3.63519 5 3.29446 4.90012 3 4.72949V10C3 10.5523 3.44772 11 4 11H6.5C6.77614 11 7 11.2239 7 11.5C7 11.7761 6.77614 12 6.5 12H4C2.89543 12 2 11.1046 2 10V1.5C2 1.22386 2.22386 1 2.5 1ZM10.332 2.00977C10.6537 2.05552 10.9376 2.25613 11.0859 2.55273L11.3096 3H13C13.5523 3 14 3.44772 14 4V6C14 6.55228 13.5523 7 13 7H9C8.44772 7 8 6.55228 8 6V3C8 2.44772 8.44772 2 9 2H10.1914L10.332 2.00977Z" fill="currentColor" /></SvgRoot>;
});
export default IconFolderViewFill;
