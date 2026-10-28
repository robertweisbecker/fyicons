import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBraces = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBraces(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5.5 2a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v.944a3.02 3.02 0 0 1-1.667 2.699l-.162.08a.31.31 0 0 0 0 .553l.162.081A3.02 3.02 0 0 1 4 11.056V12a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H5a2 2 0 0 1-2-2v-.944c0-.764-.431-1.462-1.114-1.804l-.162-.081a1.31 1.31 0 0 1 0-2.342l.162-.08A2.02 2.02 0 0 0 3 4.943V4a2 2 0 0 1 2-2zm5.501 0a2 2 0 0 1 2 2v.944c0 .764.431 1.462 1.114 1.804l.162.081a1.31 1.31 0 0 1 0 2.342l-.162.081a2.02 2.02 0 0 0-1.114 1.804L13 12a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1h.5a1 1 0 0 0 1-1v-.944c0-1.143.646-2.187 1.668-2.699l.162-.08A.31.31 0 0 0 14.001 8a.31.31 0 0 0-.17-.276l-.163-.081a3.02 3.02 0 0 1-1.667-2.699V4a1 1 0 0 0-1-1h-.5a.5.5 0 1 1 0-1z" /></SvgRoot>;
});
export default IconBraces;
