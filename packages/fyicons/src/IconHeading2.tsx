import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeading2 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeading2(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M13.155 9c1.345 0 2.24 1.39 1.684 2.613-.319.701-1.002 1.081-1.602 1.268-.307.095-.616.251-.844.496a1.4 1.4 0 0 0-.334.623H14.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5c0-.787.263-1.38.661-1.806.388-.415.874-.642 1.28-.768.477-.149.838-.4.987-.726a.85.85 0 0 0-.773-1.2h-.066c-.478 0-.915.27-1.129.698l-.013.026a.5.5 0 0 1-.894-.448l.012-.025A2.26 2.26 0 0 1 13.09 9zM5.5 2a.5.5 0 0 1 0 1H5v3h5V3h-.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1H11v5.5a.5.5 0 0 1-1 0V7H5v4h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H4V3h-.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconHeading2;
