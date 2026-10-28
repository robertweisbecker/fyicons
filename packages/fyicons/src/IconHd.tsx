import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHd = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHd(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="hd"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM3 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm7.468 1.193c1.486.033 2.347 1.382 2.345 2.92 0 1.357-.956 2.659-2.344 2.693-.317.007-.75.007-1.1.006l-.445-.004-.133-.001-.036-.001h-.013a.563.563 0 0 1-.555-.563V5.756c0-.308.248-.559.556-.563h.049l.133-.002.444-.003c.35-.001.783-.002 1.099.005m-3.968.05a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-1 0V8.718H4v1.525a.5.5 0 0 1-1 0v-4.5a.5.5 0 0 1 1 0v1.975h2V5.743a.5.5 0 0 1 .5-.5m2.813 4.443h.062c.349.002.768.002 1.066-.005.62-.015 1.247-.651 1.247-1.57.001-1.197-.611-1.778-1.245-1.793a53 53 0 0 0-1.068-.005h-.062z" /></SvgRoot>;
});
export default IconHd;
