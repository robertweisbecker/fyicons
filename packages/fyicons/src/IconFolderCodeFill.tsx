import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolderCodeFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolderCodeFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="folder-code-fill"><path fill="currentColor" d="M5.672 2a2.5 2.5 0 0 1 1.767.732L8.707 4H12.5A2.5 2.5 0 0 1 15 6.5v5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 11.5v-7A2.5 2.5 0 0 1 3.5 2zm1.182 5.146a.5.5 0 0 0-.708 0l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708-.707L5.707 9l1.147-1.146a.5.5 0 0 0 0-.708m3 0a.5.5 0 0 0-.708.708L10.293 9l-1.147 1.146a.5.5 0 0 0 .708.707l1.5-1.5a.5.5 0 0 0 0-.707z" />{props.children}</SvgRoot>;
});
export default IconFolderCodeFill;
