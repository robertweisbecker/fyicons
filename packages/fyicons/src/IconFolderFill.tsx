import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolderFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolderFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="folder-fill"><path fill="currentColor" d="M15 8v3.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 11.5V8zM4.672 2a2.5 2.5 0 0 1 1.767.732L7.707 4H12.5A2.5 2.5 0 0 1 15 6.5V7H1V4.5A2.5 2.5 0 0 1 3.5 2z" /></SvgRoot>;
});
export default IconFolderFill;
