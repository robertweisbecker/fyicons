import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudSlash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudSlash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cloud-slash"><path fill="currentColor" d="M6.5 2a3.5 3.5 0 0 1 2.447.998.12.12 0 0 0 .099.033A3.5 3.5 0 0 1 13 6.5q-.002.335-.065.65a2.997 2.997 0 0 1 .436 5.514l.482.483a.5.5 0 0 1-.707.707l-.868-.868a3 3 0 0 1-.278.013H4.487l-.154-.003H4.32v-.001A3.5 3.5 0 0 1 1 9.5c0-1.433.862-2.66 2.093-3.202a3.5 3.5 0 0 1 .23-2.269L2.145 2.855a.5.5 0 0 1 .708-.707l1.029 1.03A3.5 3.5 0 0 1 6.5 2M4.099 4.806a2.5 2.5 0 0 0 .079 1.616.5.5 0 0 1-.334.667 2.499 2.499 0 0 0 .518 4.907l.15.003h6.78zM6.5 3c-.765 0-1.45.344-1.908.885l8.018 8.019a2 2 0 0 0-.355-3.887.502.502 0 0 1-.407-.667A2.5 2.5 0 0 0 12 6.5a2.5 2.5 0 0 0-2.821-2.48 1.12 1.12 0 0 1-.931-.309A2.5 2.5 0 0 0 6.5 3" /></SvgRoot>;
});
export default IconCloudSlash;
