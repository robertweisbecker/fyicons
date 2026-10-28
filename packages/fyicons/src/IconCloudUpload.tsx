import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudUpload = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudUpload(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cloud-upload"><path fill="currentColor" d="M6.5 3a3.5 3.5 0 0 1 2.447.998.12.12 0 0 0 .099.033q.223-.03.454-.031A3.5 3.5 0 0 1 13 7.5q-.002.335-.065.651A2.999 2.999 0 0 1 12 14h-2v-1h2a2 2 0 0 0 .255-3.982.502.502 0 0 1-.407-.667c.097-.27.152-.555.152-.851a2.5 2.5 0 0 0-2.821-2.479 1.12 1.12 0 0 1-.931-.308 2.5 2.5 0 0 0-4.07 2.71.5.5 0 0 1-.334.667 2.5 2.5 0 0 0 .518 4.906l.15.004H6v1H4.487l-.154-.004H4.32A3.5 3.5 0 0 1 1 10.5c0-1.433.862-2.66 2.093-3.201A3.5 3.5 0 0 1 6.5 3m1.146 4.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 1 1-.708.708L8.5 8.707V13.5a.5.5 0 0 1-1 0V8.707L6.354 9.854a.5.5 0 1 1-.708-.708z" /></SvgRoot>;
});
export default IconCloudUpload;
