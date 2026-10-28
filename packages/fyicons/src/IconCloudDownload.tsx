import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudDownload = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudDownload(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 7a.5.5 0 0 1 .5.5v4.793l1.146-1.146a.5.5 0 1 1 .707.707l-2 2a.5.5 0 0 1-.707 0l-2-2a.5.5 0 1 1 .708-.707L7.5 12.293V7.5A.5.5 0 0 1 8 7M6.5 3a3.5 3.5 0 0 1 2.447.998.12.12 0 0 0 .099.033q.223-.03.454-.031A3.5 3.5 0 0 1 13 7.5q-.002.335-.065.651A2.999 2.999 0 0 1 12 14v-1a2 2 0 0 0 .255-3.982.502.502 0 0 1-.407-.667c.097-.27.152-.555.152-.851a2.5 2.5 0 0 0-2.821-2.479 1.12 1.12 0 0 1-.931-.308 2.5 2.5 0 0 0-4.07 2.71.5.5 0 0 1-.334.667A2.5 2.5 0 0 0 2 10.5c0 1.209.86 2.215 2 2.446v1.017a3.496 3.496 0 0 1-.907-6.664A3.5 3.5 0 0 1 6.5 3" /></SvgRoot>;
});
export default IconCloudDownload;
