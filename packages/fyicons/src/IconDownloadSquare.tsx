import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDownloadSquare = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDownloadSquare(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5.5 4.001a.5.5 0 0 1 0 1H4.454C3.651 5.001 3 5.653 3 6.456v6.046a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5h-1a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 1 2.5 2.5v6a2.5 2.5 0 0 1-2.5 2.5h-7a2.5 2.5 0 0 1-2.5-2.5V6.456A2.455 2.455 0 0 1 4.454 4zM8 1a.5.5 0 0 1 .5.5v8.708l1.63-1.793a.5.5 0 0 1 .74.671l-2.5 2.75a.5.5 0 0 1-.74 0l-2.5-2.75a.5.5 0 0 1 .74-.671l1.63 1.793V1.5A.5.5 0 0 1 8 1" /></SvgRoot>;
});
export default IconDownloadSquare;
