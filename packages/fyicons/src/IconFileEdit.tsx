import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileEdit = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileEdit(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="file-edit"><path fill="currentColor" d="M7.672 1a2.5 2.5 0 0 1 1.767.732l2.829 2.829A2.5 2.5 0 0 1 13 6.328V7l-1 1V6.75a.75.75 0 0 0-.75-.75H8.5A1.5 1.5 0 0 1 7 4.5V2H5a1 1 0 0 0-1 1v9.5A1.5 1.5 0 0 0 5.5 14H7v1H5.5A2.5 2.5 0 0 1 3 12.5V3a2 2 0 0 1 2-2zm5.651 11.03-2.19 2.19c-.499.5-1.176.78-1.883.78H9v-.25c0-.707.28-1.384.78-1.884l2.19-2.19zm0-2.707a.957.957 0 0 1 1.354 1.354l-.647.646-1.353-1.353zM8 4.5a.5.5 0 0 0 .5.5h2.75l.045.002-2.563-2.563A1.5 1.5 0 0 0 8 2.037z" />{props.children}</SvgRoot>;
});
export default IconFileEdit;
