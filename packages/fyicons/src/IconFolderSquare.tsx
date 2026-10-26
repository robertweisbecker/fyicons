import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolderSquare = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolderSquare(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="square" d="M13.5 7.5V6A2.5 2.5 0 0 0 11 3.5H7.5l-.414-.414A2 2 0 0 0 5.672 2.5H4.5a2 2 0 0 0-2 2v3m11 0h-11m11 0V11a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 11V7.5" /></SvgRoot>;
});
export default IconFolderSquare;
