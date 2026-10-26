import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNumber2 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNumber2(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm3.155 2A1.85 1.85 0 0 1 9.84 7.613c-.319.701-1.002 1.081-1.602 1.268-.307.096-.616.251-.844.496A1.4 1.4 0 0 0 7.06 10H9.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5c0-.787.263-1.38.661-1.806.388-.415.874-.642 1.28-.768.477-.148.838-.4.987-.726A.85.85 0 0 0 8.155 6H8.09c-.478 0-.915.27-1.129.698l-.013.026a.5.5 0 0 1-.894-.448l.012-.025A2.26 2.26 0 0 1 8.09 5z" /></SvgRoot>;
});
export default IconNumber2;
