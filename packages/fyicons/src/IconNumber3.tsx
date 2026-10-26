import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNumber3 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNumber3(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm2.998 2A1.755 1.755 0 0 1 9.75 6.754c-.003.442-.182.84-.456 1.143.417.298.706.755.706 1.353 0 1.057-.903 1.88-2 1.88l-.164-.006c-.8-.056-1.318-.516-1.736-1.074a.5.5 0 0 1 .8-.6c.358.477.656.68 1.1.68.608 0 1-.437 1-.88 0-.38-.355-.75-.982-.75H7.75a.5.5 0 0 1 0-1h.258c.36-.007.74-.358.742-.754A.756.756 0 0 0 8.002 6c-.366.002-.67.138-.91.363a.5.5 0 1 1-.685-.726A2.3 2.3 0 0 1 7.998 5" /></SvgRoot>;
});
export default IconNumber3;
