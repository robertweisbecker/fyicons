import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareAlert = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareAlert(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm3 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-5.375c.172 0 .337.066.454.183a.6.6 0 0 1 .171.442l-.006.163-.113 2.925L8.5 8.5a.504.504 0 0 1-.5.482.504.504 0 0 1-.5-.481l-.006-.163-.113-2.925-.006-.163a.6.6 0 0 1 .17-.442A.64.64 0 0 1 8 4.625" /></SvgRoot>;
});
export default IconSquareAlert;
