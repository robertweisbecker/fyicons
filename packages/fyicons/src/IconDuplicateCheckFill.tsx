import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDuplicateCheckFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDuplicateCheckFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.5 1A2.5 2.5 0 0 1 12 3.5V4h.5A2.5 2.5 0 0 1 15 6.5v6a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 4 12.5V12h-.5A2.5 2.5 0 0 1 1 9.5v-6A2.5 2.5 0 0 1 3.5 1zm1.985 6.309a.5.5 0 0 0-.676.206l-1.66 3.111-1.273-1.455a.5.5 0 0 0-.752.658l1.75 2a.5.5 0 0 0 .817-.094l2-3.75a.5.5 0 0 0-.206-.676M3.5 2A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H4V6.5A2.5 2.5 0 0 1 6.5 4H11v-.5A1.5 1.5 0 0 0 9.5 2z" /></SvgRoot>;
});
export default IconDuplicateCheckFill;
