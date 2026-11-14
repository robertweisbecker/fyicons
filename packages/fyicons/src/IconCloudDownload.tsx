import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudDownload = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudDownload(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cloud-download"><path fill="currentColor" d="M8 7a.5.5 0 0 1 .5.5v5.293l1.146-1.146a.5.5 0 1 1 .707.707l-2 2a.5.5 0 0 1-.707 0l-2-2a.5.5 0 1 1 .708-.707L7.5 12.793V7.5A.5.5 0 0 1 8 7M6.5 1.999c.952 0 1.817.381 2.447.998a.12.12 0 0 0 .099.033A3.5 3.5 0 0 1 13 6.5q-.002.335-.065.651a3 3 0 0 1-.78 5.846L12 13v-1a2 2 0 0 0 .255-3.983.5.5 0 0 1-.407-.667c.097-.27.152-.555.152-.851a2.5 2.5 0 0 0-2.821-2.478 1.12 1.12 0 0 1-.931-.31 2.5 2.5 0 0 0-4.07 2.71.502.502 0 0 1-.334.668A2.498 2.498 0 0 0 4 11.946v1.017a3.497 3.497 0 0 1-.907-6.665A3.5 3.5 0 0 1 6.5 1.999" />{props.children}</SvgRoot>;
});
export default IconCloudDownload;
