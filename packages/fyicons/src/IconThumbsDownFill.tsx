import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconThumbsDownFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconThumbsDownFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.297 12.013c-.305.806-.255 2.16-1.196 1.974-1.47-.239-1.198-2.946-.986-3.986H3.618a1.57 1.57 0 0 1-1.572-1.572c0-.292.069-.568.185-.815a1.74 1.74 0 0 1 .332-2.143 2 2 0 0 1-.017-.22c0-.508.22-.96.562-1.278A1.75 1.75 0 0 1 4.84 2h.773v.001a5 5 0 0 1 1.781.356l.968.388c.415.166.77.454 1.018.826l.13.194c.32.479.49 1.042.49 1.617V7.47c0 .517-.03 1.077-.38 1.456-.347.377-1.146 1.119-1.732 1.824-.297.358-.453.945-.592 1.264M11 5.25A3.75 3.75 0 0 0 10.25 3h1.6c.43 0 .872.057 1.207.327.427.342.942 1 .943 2.173 0 1.172-.516 1.83-.943 2.172-.335.27-.777.328-1.207.328H11z" /></SvgRoot>;
});
export default IconThumbsDownFill;
