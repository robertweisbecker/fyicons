import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolderSquare = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolderSquare(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="folder-square"><path d="M13.5 7.5V6C13.5 4.61929 12.3807 3.5 11 3.5H8.20711C7.75435 3.5 7.32014 3.32014 7 3C6.67986 2.67986 6.24565 2.5 5.79289 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V7.5M13.5 7.5H2.5M13.5 7.5V11C13.5 12.3807 12.3807 13.5 11 13.5H5C3.61929 13.5 2.5 12.3807 2.5 11V7.5" stroke="currentColor" strokeLinecap="square" /></SvgRoot>;
});
export default IconFolderSquare;
