import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudUpload = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudUpload(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cloud-upload"><path fill="currentColor" d="M7.646 7.147a.5.5 0 0 1 .708 0l2 2a.5.5 0 1 1-.708.707L8.5 8.707V13.5a.5.5 0 0 1-1 0V8.707L6.354 9.854a.5.5 0 1 1-.708-.707zM6.5 1.999c.952 0 1.817.382 2.447.998a.12.12 0 0 0 .099.033Q9.269 3 9.5 3A3.5 3.5 0 0 1 13 6.5q-.002.334-.065.65A3 3 0 0 1 12 13h-1v-1h1a2 2 0 0 0 .255-3.983.502.502 0 0 1-.407-.667c.097-.269.152-.555.152-.85a2.5 2.5 0 0 0-2.821-2.48 1.12 1.12 0 0 1-.931-.308 2.5 2.5 0 0 0-4.07 2.71.5.5 0 0 1-.334.667 2.5 2.5 0 0 0 .518 4.907l.15.004H5v1h-.513l-.154-.004H4.32a3.497 3.497 0 0 1-1.228-6.697 3.5 3.5 0 0 1 3.408-4.3" />{props.children}</SvgRoot>;
});
export default IconCloudUpload;
