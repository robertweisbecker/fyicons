import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudUpload = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudUpload(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cloud-upload"><path fill="currentColor" d="M7.646 6.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 1 1-.708.708L8.5 7.707V13.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 0 1-.708-.708zM6.5 2a3.5 3.5 0 0 1 2.447.998.12.12 0 0 0 .099.033q.223-.03.454-.031A3.5 3.5 0 0 1 13 6.5c0 .185-.018.367-.046.543A2.5 2.5 0 0 1 12.5 12H10v-1h2.5a1.5 1.5 0 0 0 0-3h-.174a.5.5 0 0 1-.472-.667q.144-.396.146-.833a2.5 2.5 0 0 0-2.821-2.479 1.12 1.12 0 0 1-.931-.308 2.5 2.5 0 0 0-4.097 2.639.5.5 0 0 1-.406.666A2 2 0 0 0 4 11h2v1H4a3 3 0 0 1-.937-5.85A3.5 3.5 0 0 1 3 5.5 3.5 3.5 0 0 1 6.5 2" /></SvgRoot>;
});
export default IconCloudUpload;
